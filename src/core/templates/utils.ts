import {select} from '@inquirer/prompts';
import chalk from 'chalk';
import Table from 'cli-table3';
import {type ActTemplate, actTemplates} from './index.js';

export const findActTemplate = (id: string): ActTemplate | undefined => {
  return actTemplates.find((template) => template.id === id);
};

export const listActTemplates = async (): Promise<void> => {
  const pageSize = 10;
  const templates = actTemplates
    .slice()
    .sort((a, b) => a.label.localeCompare(b.label));
  const totalPages = Math.ceil(templates.length / pageSize);
  let page = 0;

  const renderPage = (pageIdx: number) => {
    const table = new Table({
      head: [
        chalk.cyan('ID'),
        chalk.cyan('Label'),
        chalk.cyan('Category'),
        chalk.cyan('Description'),
      ],
      style: {head: ['cyan']},
      colWidths: [16, 22, 16, 36],
      wordWrap: true,
    });
    templates
      .slice(pageIdx * pageSize, (pageIdx + 1) * pageSize)
      .forEach((template) => {
        table.push([
          chalk.green(template.id),
          template.label,
          chalk.blue(template.category),
          '',
        ]);
      });
    console.log(chalk.bold.cyan('\n🎭 Available Act Templates:'));
    console.log(table.toString());
    console.log(chalk.gray(`Page ${pageIdx + 1} of ${totalPages}`));
  };

  if (templates.length > pageSize) {
    let exit = false;
    while (!exit) {
      renderPage(page);
      const choices = [];
      if (page > 0) choices.push({name: 'Previous', value: 'prev'});
      if (page < totalPages - 1) choices.push({name: 'Next', value: 'next'});
      choices.push({name: 'Exit', value: 'exit'});
      const nav = await select({
        message: 'Navigate pages:',
        choices,
        default: page < totalPages - 1 ? 'next' : 'exit',
      });
      if (nav === 'prev') page--;
      else if (nav === 'next') page++;
      else exit = true;
      if (!exit) console.clear();
    }
  } else {
    renderPage(0);
  }
  console.log();
  console.log(chalk.dim('Usage: rawi ask --act <template-id> "your question"'));
  console.log(chalk.dim('Show template: rawi act --show <template-id>'));
};

export const showActTemplate = (id: string): void => {
  const template = findActTemplate(id);

  if (!template) {
    console.error(chalk.red(`❌ Act template '${id}' not found.`));
    console.log(
      chalk.yellow('💡 Use "rawi act --list" to see available templates.'),
    );
    return;
  }

  console.log(chalk.bold.cyan(`\n🎭 Act Template: ${template.label}`));
  console.log(chalk.blue(`ID: ${template.id}`));
  console.log(chalk.blue(`Category: ${template.category}`));
  console.log();
  console.log(chalk.bold('Template:'));
  console.log(chalk.white(template.template));
  console.log();
  console.log(chalk.dim(`Usage: rawi ask --act ${template.id} "{userInput}"`));
};

export const applyActTemplate = (
  templateId: string,
  userInput: string,
): string => {
  const template = findActTemplate(templateId);

  if (!template) {
    throw new Error(`Act template '${templateId}' not found`);
  }

  return template.template.replace('{userInput}', userInput);
};
