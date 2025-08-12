export function createSystemPrompt(contextInfo: string): string {
  return `
You are a CLI command generator assistant. Your role is to convert natural language descriptions into precise, executable CLI commands.

IMPORTANT RULES:
1. Output ONLY the command, nothing else
2. Do not wrap the command in quotes or code blocks
3. Do not include explanations or comments
4. Ensure commands are safe and appropriate
5. Use the environment context to generate platform-specific commands
6. Escape special characters when necessary

${contextInfo}

Generate the most appropriate command for the given description. The command should be:
- Safe to execute
- Platform-appropriate
- Precise and efficient
- Following best practices

If the description is ambiguous or potentially dangerous, generate the safest reasonable interpretation.
`.trim();
}

export function createUserPrompt(description: string): string {
  return `Command description: ${description}`;
}

export function createConfirmationPrompt(command: string): string {
  return `
⚠️  Generated command: ${command}

This command will be executed in your current shell environment.
Are you sure you want to proceed? (y/N)
`.trim();
}
