import node from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';

export default {
  input: "src/main.js",
  output: {
    file: "dist/index.js",
    format: "iife",
    sourcemap: true
  },
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        '@babel/react',
        '@babel/preset-env'
        ]
    }),
    node(),
    commonjs(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') })
  ]
}