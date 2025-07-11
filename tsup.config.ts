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
    js: '/* Rawi (راوي) is the developer-friendly AI CLI that brings the power of 9 major AI providers directly to your terminal. With seamless shell integration, persistent conversations, and 200+ specialized prompt templates, Rawi transforms your command line into an intelligent development workspace */',
  },
  banner: {
    js: '/* Rawi (راوي) is the developer-friendly AI CLI that brings the power of 9 major AI providers directly to your terminal. With seamless shell integration, persistent conversations, and 200+ specialized prompt templates, Rawi transforms your command line into an intelligent development workspace */',
  },
});

export default tsupConfig;
