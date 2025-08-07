import {defineConfig} from 'tsup';
import {description} from './package.json';

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
    js: `/* ${description} */`,
  },
  banner: {
    js: `/* ${description} */`,
  },
});

export default tsupConfig;
