import buble from 'rollup-plugin-buble';

export default {
  entry: 'src/index.js',
  moduleName: 'human-date-range',
  plugins: [
    buble()
  ],
  format: process.env.format,
  dest: `dist/index.${process.env.format}.js`
};
