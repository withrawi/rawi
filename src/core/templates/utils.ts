import {select} from '@inquirer/prompts';
import chalk from 'chalk';
import Table from 'cli-table3';
import {actTemplates} from './act.js';
import {ActTemplateManager} from './act-manager.js';

export const findActTemplate = async (id: string) => {
  const builtIn = actTemplates.find((template) => template.id === id);
  if (builtIn) {
    return builtIn;
  }

  const manager = new ActTemplateManager();
  const custom = await manager.getTemplate(id);
  return custom || undefined;
};

export const getAllTemplates = async () => {
  const manager = new ActTemplateManager();
  const customTemplates = await manager.listCustomTemplates();

  return [...actTemplates, ...customTemplates];
};

export const listActTemplates = async () => {
  const pageSize = 10;
  const allTemplates = await getAllTemplates();
  const templates = allTemplates
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
        chalk.cyan('Type'),
        chalk.cyan('Description'),
      ],
      style: {head: ['cyan']},
      colWidths: [16, 22, 16, 10, 30],
      wordWrap: true,
    });
    templates
      .slice(pageIdx * pageSize, (pageIdx + 1) * pageSize)
      .forEach((template) => {
        const isCustom = 'isBuiltIn' in template ? !template.isBuiltIn : false;
        table.push([
          chalk.green(template.id),
          template.label,
          chalk.blue(template.category),
          isCustom ? chalk.yellow('Custom') : chalk.gray('Built-in'),
          template.description?.substring(0, 50) +
            (template.description?.length > 50 ? '...' : '') || '',
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
  console.log(chalk.dim('Create custom template: rawi act --create'));
};

export const listBuiltInTemplates = async (): Promise<void> => {
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
          template.description?.substring(0, 80) +
            (template.description?.length > 80 ? '...' : '') || '',
        ]);
      });
    console.log(chalk.bold.cyan('\n🎭 Built-in Act Templates:'));
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
};

export const listCustomTemplates = async (): Promise<void> => {
  const manager = new ActTemplateManager();
  const templates = await manager.listCustomTemplates();

  if (templates.length === 0) {
    console.log(chalk.yellow('\n📝 No custom templates found.'));
    console.log(chalk.dim('Create one with: rawi act --create'));
    return;
  }

  const table = new Table({
    head: [
      chalk.cyan('ID'),
      chalk.cyan('Label'),
      chalk.cyan('Category'),
      chalk.cyan('Created'),
      chalk.cyan('Description'),
    ],
    style: {head: ['cyan']},
    colWidths: [16, 22, 16, 12, 30],
    wordWrap: true,
  });

  templates.forEach((template) => {
    table.push([
      chalk.green(template.id),
      template.label,
      chalk.blue(template.category),
      template.createdAt.toLocaleDateString(),
      template.description?.substring(0, 50) +
        (template.description?.length > 50 ? '...' : '') || '',
    ]);
  });

  console.log(chalk.bold.yellow('\n📝 Custom Act Templates:'));
  console.log(table.toString());
  console.log();
  console.log(chalk.dim('Usage: rawi ask --act <template-id> "your question"'));
  console.log(chalk.dim('Show template: rawi act --show <template-id>'));
  console.log(chalk.dim('Edit template: rawi act --edit <template-id>'));
  console.log(chalk.dim('Delete template: rawi act --delete <template-id>'));
};

export const showActTemplate = async (id: string): Promise<void> => {
  const template = await findActTemplate(id);

  if (!template) {
    console.error(chalk.red(`❌ Act template '${id}' not found.`));
    console.log(
      chalk.yellow('💡 Use "rawi act --list" to see available templates.'),
    );
    return;
  }

  const isCustom = 'isBuiltIn' in template ? !template.isBuiltIn : false;

  console.log(chalk.bold.cyan(`\n🎭 Act Template: ${template.label}`));
  console.log(chalk.blue(`ID: ${template.id}`));
  console.log(chalk.blue(`Category: ${template.category}`));
  console.log(
    chalk.blue(
      `Type: ${isCustom ? chalk.yellow('Custom') : chalk.gray('Built-in')}`,
    ),
  );

  if (isCustom && 'createdAt' in template) {
    const customTemplate = template as any;
    console.log(
      chalk.blue(
        `Created: ${new Date(customTemplate.createdAt).toLocaleString()}`,
      ),
    );
    console.log(
      chalk.blue(
        `Updated: ${new Date(customTemplate.updatedAt).toLocaleString()}`,
      ),
    );
  }

  console.log();
  console.log(chalk.bold('Description:'));
  console.log(chalk.white(template.description));
  console.log();
  console.log(chalk.bold('Template:'));
  console.log(chalk.white(template.template));
  console.log();
  console.log(chalk.dim(`Usage: rawi ask --act ${template.id} "{userInput}"`));

  if (isCustom) {
    console.log(chalk.dim(`Edit: rawi act --edit ${template.id}`));
    console.log(chalk.dim(`Delete: rawi act --delete ${template.id}`));
  }
};

export const applyActTemplate = async (
  templateId: string,
  userInput: string,
): Promise<string> => {
  const template = await findActTemplate(templateId);

  if (!template) {
    throw new Error(`Act template '${templateId}' not found`);
  }

  return template.template.replace('{userInput}', userInput);
};
