#!/usr/bin/env node

import {createProgram} from './cli/program.js';

process.on('uncaughtException', (error) => {
  if (error instanceof Error && error.name === 'ExitPromptError') {
    console.log('\n👋 Exiting Rawi. Until next time!');
    process.exit(0);
  } else {
    throw error;
  }
});

const program = createProgram();

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
