import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: './src/index.tsx',
  output: {
    file: './dist/bundle.js',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    production && terser(), // minify, but only in production
    typescript({
      typescript: require('typescript'),
    }),
    postcss({
      extract: true,
    }),
  ],
};
