import type {bedrock} from '@ai-sdk/amazon-bedrock';
import {createAmazonBedrock} from '@ai-sdk/amazon-bedrock';
import {generateText} from 'ai';
import type {
  BedrockSettings,
  LooseToStrict,
  ModelInfo,
  RawiCredentials,
} from '../../shared/types.js';

type LooseBedrockModelId = Parameters<typeof bedrock>[0];
export type BedrockModelId = LooseToStrict<LooseBedrockModelId>;

const bedrockModelIds = [
  'amazon.titan-tg1-large',
  'amazon.titan-text-express-v1',
  'amazon.titan-text-lite-v1',
  'anthropic.claude-v2',
  'anthropic.claude-v2:1',
  'anthropic.claude-instant-v1',
  'anthropic.claude-sonnet-4-20250514-v1:0',
  'anthropic.claude-opus-4-20250514-v1:0',
  'anthropic.claude-3-7-sonnet-20250219-v1:0',
  'anthropic.claude-3-5-sonnet-20240620-v1:0',
  'anthropic.claude-3-5-sonnet-20241022-v2:0',
  'anthropic.claude-3-5-haiku-20241022-v1:0',
  'anthropic.claude-3-sonnet-20240229-v1:0',
  'anthropic.claude-3-haiku-20240307-v1:0',
  'anthropic.claude-3-opus-20240229-v1:0',
  'cohere.command-text-v14',
  'cohere.command-light-text-v14',
  'cohere.command-r-v1:0',
  'cohere.command-r-plus-v1:0',
  'meta.llama3-70b-instruct-v1:0',
  'meta.llama3-8b-instruct-v1:0',
  'meta.llama3-1-405b-instruct-v1:0',
  'meta.llama3-1-70b-instruct-v1:0',
  'meta.llama3-1-8b-instruct-v1:0',
  'meta.llama3-2-11b-instruct-v1:0',
  'meta.llama3-2-1b-instruct-v1:0',
  'meta.llama3-2-3b-instruct-v1:0',
  'meta.llama3-2-90b-instruct-v1:0',
  'mistral.mistral-7b-instruct-v0:2',
  'mistral.mixtral-8x7b-instruct-v0:1',
  'mistral.mistral-large-2402-v1:0',
  'mistral.mistral-small-2402-v1:0',
] as const;

export const bedrockModels: ModelInfo[] = bedrockModelIds.map((name) => ({
  name,
  displayName: name,
}));

export const bedrockProvider = {
  name: 'bedrock' as const,
  displayName: '🟠 Amazon Bedrock',
  models: bedrockModels,
};

export const generateWithBedrock = async (
  credentials: RawiCredentials,
  prompt: string,
): Promise<string> => {
  try {
    const settings = credentials.providerSettings as
      | BedrockSettings
      | undefined;

    const region = settings?.region || process.env.AWS_REGION || 'us-east-1';

    let bedrockClient: ReturnType<typeof createAmazonBedrock>;

    if (settings?.useProviderChain) {
      try {
        const {fromNodeProviderChain} = await import(
          '@aws-sdk/credential-providers'
        );

        bedrockClient = createAmazonBedrock({
          region,
          credentialProvider: fromNodeProviderChain(),
        });
      } catch (_) {
        throw new Error(
          'Failed to load AWS credential provider chain. Make sure you have installed ' +
            '@aws-sdk/credential-providers package: npm install @aws-sdk/credential-providers',
        );
      }
    } else {
      const accessKeyId =
        settings?.accessKeyId || process.env.AWS_ACCESS_KEY_ID;
      const secretAccessKey =
        settings?.secretAccessKey || process.env.AWS_SECRET_ACCESS_KEY;
      const sessionToken =
        settings?.sessionToken || process.env.AWS_SESSION_TOKEN;

      if (!accessKeyId || !secretAccessKey) {
        throw new Error(
          'AWS access key ID and secret access key are required for Amazon Bedrock',
        );
      }

      bedrockClient = createAmazonBedrock({
        region,
        accessKeyId,
        secretAccessKey,
        sessionToken,
      });
    }

    const result = await generateText({
      model: bedrockClient(credentials.model),
      prompt,
      temperature: credentials.temperature || 0.7,
      maxTokens: credentials.maxTokens || 2048,
    });

    return result.text;
  } catch (error) {
    throw new Error(
      `Error calling Amazon Bedrock API: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
};
