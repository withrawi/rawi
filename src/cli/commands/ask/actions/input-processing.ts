const readStdin = (): Promise<string> => {
  return new Promise((resolve) => {
    let data = '';

    if (process.stdin.isTTY) {
      resolve('');
      return;
    }

    process.stdin.setEncoding('utf8');

    process.stdin.on('data', (chunk) => {
      data += chunk;
    });

    process.stdin.on('end', () => {
      resolve(data.trim());
    });
  });
};

export const assembleQuery = async (
  query: string,
  fileContent: string
): Promise<string> => {
  const stdinContent = await readStdin();
  const contentParts = [query, stdinContent, fileContent].filter(Boolean);

  if (contentParts.length === 0) {
    throw new Error('No input provided - query, stdin, or file content required');
  }

  return contentParts.join('\n\n');
};

export {readStdin};
