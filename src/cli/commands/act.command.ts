import {confirm, input, select} from '@inquirer/prompts';
import chalk from 'chalk';
import Table from 'cli-table3';
import {Command} from 'commander';
import {actTemplates} from '../../core/templates/act.js';
import {ActTemplateManager} from '../../core/templates/act-manager.js';
import {
  listActTemplates,
  listBuiltInTemplates,
  listCustomTemplates,
  showActTemplate,
} from '../../core/templates/utils.js';

export const createActCommand = (): Command => {
  const actCommand = new Command('act');

  actCommand
    .description(
      [
        chalk.bold('Manage act templates for specialized prompts.'),
        '',
        chalk.gray('Create, edit, and use custom act templates.'),
        chalk.gray('View built-in templates and manage your own.'),
        '─'.repeat(80),
      ].join('\n'),
    )
    .option('-l, --list', chalk.white('List all available act templates'))
    .option('-b, --built-in', chalk.white('List only built-in act templates'))
    .option('-c, --custom', chalk.white('List only custom act templates'))
    .option(
      '-s, --show <template>',
      chalk.white('Show details of a specific act template'),
    )
    .option('--create', chalk.white('Create a new custom act template'))
    .option(
      '--edit <template>',
      chalk.white('Edit an existing custom template'),
    )
    .option('--delete <template>', chalk.white('Delete a custom template'))
    .addHelpText(
      'after',
      [
        chalk.bold.cyan('\nExamples:'),
        chalk.gray(
          '  rawi act --list                      # List all templates',
        ),
        chalk.gray(
          '  rawi act --built-in                  # List built-in templates',
        ),
        chalk.gray(
          '  rawi act --custom                    # List custom templates',
        ),
        chalk.gray(
          '  rawi act --show my-template          # Show template details',
        ),
        chalk.gray(
          '  rawi act --create                    # Create new template',
        ),
        chalk.gray(
          '  rawi act --edit my-template          # Edit custom template',
        ),
        chalk.gray(
          '  rawi act --delete my-template        # Delete custom template',
        ),
        '',
        chalk.bold.cyan('Usage with ask:'),
        chalk.gray('  rawi ask --act <template> "your question"'),
      ].join('\n'),
    )
    .action(async (options) => {
      if (options.list) {
        await listActTemplates();
        return;
      }

      if (options.builtIn) {
        await listBuiltInTemplates();
        return;
      }

      if (options.custom) {
        await listCustomTemplates();
        return;
      }

      if (options.show) {
        await showActTemplate(options.show);
        return;
      }

      if (options.create) {
        await createCustomTemplate();
        return;
      }

      if (options.edit) {
        await editCustomTemplate(options.edit);
        return;
      }

      if (options.delete) {
        await deleteCustomTemplate(options.delete);
        return;
      }

      await showActOverview();
    });

  return actCommand;
};

async function showActOverview(): Promise<void> {
  const manager = new ActTemplateManager();
  const customTemplates = await manager.listCustomTemplates();
  const builtInCount = actTemplates.length;
  const customCount = customTemplates.length;

  console.log(chalk.bold.cyan('\n🎭 Act Templates Overview'));
  console.log();

  const table = new Table({
    head: [chalk.cyan('Type'), chalk.cyan('Count'), chalk.cyan('Description')],
    style: {head: ['cyan']},
    colWidths: [12, 8, 50],
    wordWrap: true,
  });

  table.push([
    chalk.gray('Built-in'),
    chalk.white(builtInCount.toString()),
    'Ready-to-use professional templates for various scenarios',
  ]);

  table.push([
    chalk.yellow('Custom'),
    chalk.white(customCount.toString()),
    'Your personalized templates for specific needs',
  ]);

  console.log(table.toString());
  console.log();

  const choices = [
    {name: '📋 List all templates', value: 'list'},
    {name: '🔧 List built-in templates', value: 'builtin'},
    {name: '📝 List custom templates', value: 'custom'},
    {name: '✨ Create new template', value: 'create'},
    {name: '❌ Exit', value: 'exit'},
  ];

  const action = await select({
    message: 'What would you like to do?',
    choices,
  });

  switch (action) {
    case 'list':
      await listActTemplates();
      break;
    case 'builtin':
      await listBuiltInTemplates();
      break;
    case 'custom':
      await listCustomTemplates();
      break;
    case 'create':
      await createCustomTemplate();
      break;
    case 'exit':
      break;
  }
}

async function createCustomTemplate(): Promise<void> {
  console.log(chalk.bold.cyan('\n✨ Create Custom Act Template'));
  console.log(
    chalk.gray('Create a personalized template for your specific needs.\n'),
  );

  try {
    const id = await input({
      message: 'Template ID (unique identifier):',
      validate: (value) => {
        if (!value.trim()) return 'ID is required';
        if (!/^[a-z0-9-]+$/.test(value.trim())) {
          return 'ID must contain only lowercase letters, numbers, and hyphens';
        }
        return true;
      },
    });

    const label = await input({
      message: 'Template label (display name):',
      validate: (value) => (value.trim() ? true : 'Label is required'),
    });

    const category = await input({
      message: 'Category:',
      validate: (value) => (value.trim() ? true : 'Category is required'),
    });

    const description = await input({
      message: 'Description:',
      validate: (value) => (value.trim() ? true : 'Description is required'),
    });

    console.log(chalk.yellow('\nTemplate content:'));
    console.log(chalk.dim('Use {userInput} as a placeholder for user input'));
    console.log(chalk.dim('Example: "Act as a {role}. {userInput}"\n'));

    const template = await input({
      message: 'Template content:',
      validate: (value) => {
        if (!value.trim()) return 'Template content is required';
        if (!value.includes('{userInput}')) {
          return 'Template must include {userInput} placeholder';
        }
        return true;
      },
    });

    const manager = new ActTemplateManager();
    await manager.createTemplate({
      id: id.trim(),
      label: label.trim(),
      category: category.trim(),
      description: description.trim(),
      template: template.trim(),
    });

    console.log(chalk.green(`\n✅ Template '${id}' created successfully!`));
    console.log(chalk.dim(`Usage: rawi ask --act ${id} "your question"`));
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    console.error(chalk.red(`\n❌ Error creating template: ${errorMessage}`));
  }
}

async function editCustomTemplate(templateId: string): Promise<void> {
  console.log(chalk.bold.cyan(`\n✏️  Edit Template: ${templateId}`));

  try {
    const manager = new ActTemplateManager();
    const existing = await manager.getTemplate(templateId);

    if (!existing) {
      console.error(chalk.red(`❌ Template '${templateId}' not found.`));
      return;
    }

    if (existing.isBuiltIn) {
      console.error(
        chalk.red(`❌ Cannot edit built-in template '${templateId}'.`),
      );
      console.log(
        chalk.yellow(
          '💡 Create a custom template instead with: rawi act --create',
        ),
      );
      return;
    }

    console.log(chalk.gray(`Current values for '${templateId}':\n`));

    const label = await input({
      message: 'Template label:',
      default: existing.label,
      validate: (value) => (value.trim() ? true : 'Label is required'),
    });

    const category = await input({
      message: 'Category:',
      default: existing.category,
      validate: (value) => (value.trim() ? true : 'Category is required'),
    });

    const description = await input({
      message: 'Description:',
      default: existing.description,
      validate: (value) => (value.trim() ? true : 'Description is required'),
    });

    const template = await input({
      message: 'Template content:',
      default: existing.template,
      validate: (value) => {
        if (!value.trim()) return 'Template content is required';
        if (!value.includes('{userInput}')) {
          return 'Template must include {userInput} placeholder';
        }
        return true;
      },
    });

    await manager.updateTemplate(templateId, {
      label: label.trim(),
      category: category.trim(),
      description: description.trim(),
      template: template.trim(),
    });

    console.log(
      chalk.green(`\n✅ Template '${templateId}' updated successfully!`),
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    console.error(chalk.red(`\n❌ Error editing template: ${errorMessage}`));
  }
}

async function deleteCustomTemplate(templateId: string): Promise<void> {
  console.log(chalk.bold.red(`\n🗑️  Delete Template: ${templateId}`));

  try {
    const manager = new ActTemplateManager();
    const existing = await manager.getTemplate(templateId);

    if (!existing) {
      console.error(chalk.red(`❌ Template '${templateId}' not found.`));
      return;
    }

    if (existing.isBuiltIn) {
      console.error(
        chalk.red(`❌ Cannot delete built-in template '${templateId}'.`),
      );
      return;
    }

    console.log(chalk.yellow(`About to delete template '${templateId}':`));
    console.log(chalk.gray(`Label: ${existing.label}`));
    console.log(chalk.gray(`Category: ${existing.category}`));
    console.log();

    const confirmed = await confirm({
      message: 'Are you sure you want to delete this template?',
      default: false,
    });

    if (!confirmed) {
      console.log(chalk.gray('Delete cancelled.'));
      return;
    }

    await manager.deleteTemplate(templateId);
    console.log(
      chalk.green(`\n✅ Template '${templateId}' deleted successfully!`),
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    console.error(chalk.red(`\n❌ Error deleting template: ${errorMessage}`));
  }
}
