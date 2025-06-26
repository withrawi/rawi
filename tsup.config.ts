import {defineConfig} from 'tsup';

const tsupConfig = defineConfig({
  name: 'rawi',
  entry: [
    'src/**/*.ts',
    '!src/**/__tests__/**',
    '!src/**/*.test.*',
    '!src/types/**/*.d.ts',
  ],
  minify: true,
  minifyWhitespace: true,
  minifyIdentifiers: true,
  minifySyntax: true,
  outDir: 'dist',
  format: ['cjs', 'esm'],
  globalName: 'rawi',
  dts: true,
  sourcemap: true,
  splitting: true,
  clean: true,
  skipNodeModulesBundle: true,
  metafile: true,
  footer: {
    js: '/* Rawi (راوي): A developer-friendly AI-powered CLI tool that delivers clear answers, summaries, and analyses. It supports multiple AI providers, including OpenAI, Google, Amazon Bedrock, and more */',
  },
  banner: {
    js: '/* Rawi (راوي): A developer-friendly AI-powered CLI tool that delivers clear answers, summaries, and analyses. It supports multiple AI providers, including OpenAI, Google, Amazon Bedrock, and more */',
  },
});

export default tsupConfig;
