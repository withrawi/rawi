export function parseCommandFromResponse(response: string): string {
  let cleaned = response.replace(/<think>[\s\S]*?<\/think>/gi, '');

  cleaned = cleaned.replace(/```[\s\S]*?```/g, '');
  cleaned = cleaned.replace(/`([^`]+)`/g, '$1');

  const lines = cleaned
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  for (const line of lines) {
    if (
      line.toLowerCase().includes('to ') &&
      line.toLowerCase().includes(' command')
    ) {
      continue;
    }
    if (
      line.toLowerCase().includes('here') &&
      line.toLowerCase().includes('command')
    ) {
      continue;
    }
    if (
      line.toLowerCase().includes('you can') &&
      line.toLowerCase().includes('use')
    ) {
      continue;
    }

    if (/^[a-zA-Z][a-zA-Z0-9_-]*(\s|$)/.test(line)) {
      return line;
    }
  }

  for (const line of lines) {
    if (
      !line.includes('To ') &&
      !line.includes('Here') &&
      !line.includes('You can') &&
      !line.includes('This command') &&
      !line.includes('The command') &&
      line.length > 0
    ) {
      return line;
    }
  }

  return cleaned.trim();
}
