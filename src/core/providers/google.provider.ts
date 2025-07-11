import type {GoogleGenerativeAIProvider, google} from '@ai-sdk/google';
import {createGoogleGenerativeAI} from '@ai-sdk/google';
import {generateText} from 'ai';
import type {
  GoogleSettings,
  LooseToStrict,
  ModelInfo,
  RawiCredentials,
} from '../shared/index.js';

type LooseGoogleModelId = Parameters<typeof google>[0];
export type GoogleModelId = LooseToStrict<LooseGoogleModelId>;

const googleModelIds = [
  'gemini-1.5-flash',
  'gemini-1.5-flash-latest',
  'gemini-1.5-flash-001',
  'gemini-1.5-flash-002',
  'gemini-1.5-flash-8b',
  'gemini-1.5-flash-8b-latest',
  'gemini-1.5-flash-8b-001',
  'gemini-1.5-pro',
  'gemini-1.5-pro-latest',
  'gemini-1.5-pro-001',
  'gemini-1.5-pro-002',
  'gemini-2.0-flash',
  'gemini-2.0-flash-001',
  'gemini-2.0-flash-live-001',
  'gemini-2.0-flash-lite',
  'gemini-2.0-pro-exp-02-05',
  'gemini-2.0-flash-thinking-exp-01-21',
  'gemini-2.0-flash-exp',
  'gemini-2.5-pro-exp-03-25',
  'gemini-2.5-pro-preview-05-06',
  'gemini-2.5-flash-preview-04-17',
  'gemini-exp-1206',
  'gemma-3-27b-it',
  'learnlm-1.5-pro-experimental',
] as const;

export const googleModels: ModelInfo[] = googleModelIds.map((name) => ({
  name,
  displayName: name,
}));

export const googleProvider = {
  name: 'google' as const,
  displayName: '🔴 Google (Gemini)',
  models: googleModels,
};

export const generateWithGoogle = async (
  credentials: RawiCredentials,
  prompt: string,
): Promise<string> => {
  try {
    const settings = credentials.providerSettings as GoogleSettings | undefined;

    const apiKey = settings?.apiKey || credentials.apiKey;
    if (!apiKey) {
      throw new Error('API key is required for Google');
    }

    const baseURL =
      settings?.baseURL || 'https://generativelanguage.googleapis.com/v1beta';

    const googleProvider: GoogleGenerativeAIProvider = createGoogleGenerativeAI(
      {
        apiKey: apiKey,
        baseURL: baseURL,
      },
    );

    const result = await generateText({
      model: googleProvider(credentials.model),
      prompt,
      temperature: credentials.temperature || 0.7,
      maxTokens: credentials.maxTokens || 2048,
    });

    return result.text;
  } catch (error) {
    throw new Error(
      `Error calling Google AI API: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
};
