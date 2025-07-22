import chalk from 'chalk';
import {DatabaseManager} from '../../../../core/database/manager.js';
import {spinnerManager} from '../../../../core/shared/spinner.js';

export const streamResponse = async (
  provider: any,
  sessionId: string,
  filteredQuery: string,
  context: string | null,
  dbManager: DatabaseManager,
  credentials: any,
  options: any
): Promise<void> => {
  if (options.verbose) {
    spinnerManager.start('query', 'Processing your query...');
  }

  try {
    const stream = await provider.generateStream({
      message: filteredQuery,
      context: context || '',
    });

    let response = '';
    let isFirstChunk = true;

    for await (const chunk of stream) {
      if (isFirstChunk) {
        if (options.verbose) {
          spinnerManager.stop('query');
        }
        isFirstChunk = false;
      }
      
      process.stdout.write(chunk);
      response += chunk;
    }

    // Ensure we end with a newline
    if (!response.endsWith('\n')) {
      process.stdout.write('\n');
    }

    // Save the interaction to the database
    await dbManager.addMessage(
      sessionId,
      'user',
      filteredQuery,
      credentials.provider,
      credentials.model || 'default',
      credentials.temperature,
      credentials.maxTokens
    );

    await dbManager.addMessage(
      sessionId,
      'assistant',
      response,
      credentials.provider,
      credentials.model || 'default',
      credentials.temperature,
      credentials.maxTokens
    );

    if (options.verbose) {
      console.log(chalk.dim('\n✅ Response saved to session history'));
    }
  } catch (error) {
    if (options.verbose) {
      spinnerManager.fail('query', 'Failed to process query');
    }
    
    console.error(chalk.red('❌ Error processing query:'));
    console.error(chalk.red((error as Error).message));
    
    if (options.verbose && error instanceof Error && error.stack) {
      console.error(chalk.dim('Stack trace:'));
      console.error(chalk.dim(error.stack));
    }
    
    process.exit(1);
  }
};
