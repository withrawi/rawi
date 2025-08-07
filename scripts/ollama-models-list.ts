#!/usr/bin/env node

import * as fs from 'node:fs';
import * as https from 'node:https';

function fetch(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    https
      .get(url, {headers: {'User-Agent': 'node.js script'}}, (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => resolve(data));
      })
      .on('error', reject);
  });
}

async function getModels() {
  const html = await fetch('https://ollama.com/library');
  const matchArray = Array.from(html.matchAll(/href="\/library\/([^"/>]+)"/g));
  const models = new Set(matchArray.map((m) => decodeURIComponent(m[1])));
  return Array.from(models).sort();
}

async function getModelTags(model: string) {
  try {
    const tagsHtml = await fetch(
      `https://ollama.com/library/${encodeURIComponent(model)}/tags`,
    );
    return tagsHtml.toLowerCase();
  } catch {
    return '';
  }
}

async function getTags(model: string) {
  const url = `https://ollama.com/library/${encodeURIComponent(model)}/tags`;

  try {
    const html = await fetch(url);
    const tagRegex = new RegExp(`${model}:[^\\s<>"']+`, 'gi');
    const matchArray = Array.from(html.matchAll(tagRegex));
    const tags = new Set(matchArray.map((m) => m[0].trim()));
    return Array.from(tags).sort();
  } catch {
    return [];
  }
}

interface ExportData {
  embeddingModels: Set<string>;
  visionModels: Set<string>;
  otherModels: Set<string>;
  embeddingEntries: Set<string>;
  visionEntries: Set<string>;
  otherEntries: Set<string>;
  modelTags: Record<string, string[]>;
}

function writeComprehensiveTypeFile(filename: string, data: ExportData) {
  const lines = [
    '// Auto-generated from https://ollama.com/library',
    `// Generated on: ${new Date().toISOString()}`,
    '',
    '// Chat Models',
    'export type OllamaChatModelId =',
    ...Array.from(data.otherEntries)
      .sort()
      .map((t) => `  | '${t}'`),
    ';',
    '',
    '// Embedding Models',
    'export type OllamaEmbeddingModelId =',
    ...Array.from(data.embeddingEntries)
      .sort()
      .map((t) => `  | '${t}'`),
    ';',
    '',
    '// Vision Models',
    'export type OllamaVisionModelId =',
    ...Array.from(data.visionEntries)
      .sort()
      .map((t) => `  | '${t}'`),
    ';',
    '',
    '// All Models Union Type',
    'export type OllamaModelId = OllamaChatModelId | OllamaEmbeddingModelId | OllamaVisionModelId;',
    '',
    '// All model IDs array (includes models)',
    'export const ollamaModelIds = [',
    ...generateSimpleModelArray(data),
    '] as const;',
    '',
    '// Model Metadata',
    'export interface OllamaModelInfo {',
    '  name: string;',
    '  type: "chat" | "embedding" | "vision";',
    '  tags: string[];',
    '}',
    '',
    '// Model Registry',
    'export const OLLAMA_MODELS: Record<string, OllamaModelInfo> = {',
    ...generateModelRegistry(data),
    '};',
    '',
    '// Helper functions',
    'export function isEmbeddingModel(model: string): model is OllamaEmbeddingModelId {',
    `  return ${JSON.stringify(Array.from(data.embeddingModels).sort())}.includes(model);`,
    '}',
    '',
    'export function isVisionModel(model: string): model is OllamaVisionModelId {',
    `  return ${JSON.stringify(Array.from(data.visionModels).sort())}.includes(model);`,
    '}',
    '',
    'export function isChatModel(model: string): model is OllamaChatModelId {',
    `  return ${JSON.stringify(Array.from(data.otherModels).sort())}.includes(model);`,
    '}',
    '',
    'export function getModelType(model: string): "chat" | "embedding" | "vision" | "unknown" {',
    '  if (isEmbeddingModel(model)) return "embedding";',
    '  if (isVisionModel(model)) return "vision";',
    '  if (isChatModel(model)) return "chat";',
    '  return "unknown";',
    '}',
    '',
    '// Model counts',
    'export const MODEL_COUNTS = {',
    `  chat: ${data.otherEntries.size},`,
    `  embedding: ${data.embeddingEntries.size},`,
    `  vision: ${data.visionEntries.size},`,
    `  total: ${data.otherEntries.size + data.embeddingEntries.size + data.visionEntries.size}`,
    '} as const;',
    '',
  ];

  fs.writeFileSync(filename, lines.join('\n'), 'utf8');
  console.log(`✅ Generated ${filename} with comprehensive model information.`);
  console.log(`   📊 Chat models: ${data.otherEntries.size}`);
  console.log(`   📊 Embedding models: ${data.embeddingEntries.size}`);
  console.log(`   📊 Vision models: ${data.visionEntries.size}`);
  console.log(
    `   📊 Total entries: ${data.otherEntries.size + data.embeddingEntries.size + data.visionEntries.size}`,
  );
}

function generateSimpleModelArray(data: ExportData) {
  const allEntries = Array.from(data.otherEntries);

  // Remove duplicates and sort
  const uniqueEntries = Array.from(new Set(allEntries)).sort();

  return uniqueEntries.map((entry) => `  '${entry}',`);
}

function generateModelRegistry(data: ExportData) {
  const registry: string[] = [];

  // Add chat models
  for (const model of Array.from(data.otherModels).sort()) {
    const tags = Array.from(data.modelTags[model] || []).sort();
    registry.push(`  '${model}': {`);
    registry.push(`    name: '${model}',`);
    registry.push(`    type: 'chat',`);
    registry.push(`    tags: ${JSON.stringify(tags)}`);
    registry.push('  },');
  }

  // Add embedding models
  for (const model of Array.from(data.embeddingModels).sort()) {
    const tags = Array.from(data.modelTags[model] || []).sort();
    registry.push(`  '${model}': {`);
    registry.push(`    name: '${model}',`);
    registry.push(`    type: 'embedding',`);
    registry.push(`    tags: ${JSON.stringify(tags)}`);
    registry.push('  },');
  }

  // Add vision models
  for (const model of Array.from(data.visionModels).sort()) {
    const tags = Array.from(data.modelTags[model] || []).sort();
    registry.push(`  '${model}': {`);
    registry.push(`    name: '${model}',`);
    registry.push(`    type: 'vision',`);
    registry.push(`    tags: ${JSON.stringify(tags)}`);
    registry.push('  },');
  }

  return registry;
}

(async () => {
  console.log('🚀 Starting Ollama models discovery...');
  const models = await getModels();
  console.log(`📥 Found ${models.length} models to process.`);

  // Sets for different categories
  const embeddingModels = new Set<string>();
  const visionModels = new Set<string>();
  const otherModels = new Set<string>();

  // Entries (models + tags) for each category
  const embeddingEntries = new Set<string>();
  const visionEntries = new Set<string>();
  const otherEntries = new Set<string>();

  // Store tags for each model
  const modelTags: Record<string, string[]> = {};

  for (const model of models) {
    const modelNameLower = model.toLowerCase();
    const tagsHtml = await getModelTags(model);

    const hasEmbed =
      modelNameLower.includes('embed') || tagsHtml.includes('embed');
    const hasVision =
      modelNameLower.includes('vision') || tagsHtml.includes('vision');

    const tags = await getTags(model);
    modelTags[model] = tags;

    if (hasEmbed) {
      embeddingModels.add(model);
      embeddingEntries.add(model);
      for (const tag of tags) embeddingEntries.add(tag);
      console.log(`🔤 Embedding model: ${model} (${tags.length} tags)`);
    } else if (hasVision) {
      visionModels.add(model);
      visionEntries.add(model);
      for (const tag of tags) visionEntries.add(tag);
      console.log(`👁️ Vision model: ${model} (${tags.length} tags)`);
    } else {
      otherModels.add(model);
      otherEntries.add(model);
      for (const tag of tags) otherEntries.add(tag);
      console.log(`💬 Chat model: ${model} (${tags.length} tags)`);
    }
  }

  // Prepare data for comprehensive export
  const exportData: ExportData = {
    embeddingModels,
    visionModels,
    otherModels,
    embeddingEntries,
    visionEntries,
    otherEntries,
    modelTags,
  };

  // Generate the comprehensive file
  writeComprehensiveTypeFile(
    'src/libs/providers/ollama/ollama-models-list.ts',
    exportData,
  );

  console.log('🎉 Script completed successfully!');
})();
