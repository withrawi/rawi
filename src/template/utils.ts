import chalk from 'chalk';
import {type ActTemplate, actTemplates} from './act.js';

export const findActTemplate = (id: string): ActTemplate | undefined => {
  return actTemplates.find((template) => template.id === id);
};

export const listActTemplates = (): void => {
  console.log(chalk.bold.cyan('\n🎭 Available Act Templates:'));
  console.log();

  const categories = new Map<string, ActTemplate[]>();

  for (const template of actTemplates) {
    if (!categories.has(template.category)) {
      categories.set(template.category, []);
    }
    categories.get(template.category)!.push(template);
  }

  const sortedCategories = Array.from(categories.keys()).sort();

  for (const category of sortedCategories) {
    console.log(chalk.bold.blue(`📁 ${category}:`));

    const sortedTemplates = categories
      .get(category)!
      .sort((a, b) => a.label.localeCompare(b.label));

    for (const template of sortedTemplates) {
      console.log(
        chalk.green(`  • ${template.id}`) + chalk.dim(` - ${template.label}`),
      );
    }
    console.log();
  }

  console.log(chalk.dim('Usage: rawi ask --act <template-id> "your question"'));
  console.log(chalk.dim('Show template: rawi ask --act <template-id> --show'));
};

export const showActTemplate = (id: string): void => {
  const template = findActTemplate(id);

  if (!template) {
    console.error(chalk.red(`❌ Act template '${id}' not found.`));
    console.log(
      chalk.yellow('💡 Use "rawi ask --list-acts" to see available templates.'),
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
