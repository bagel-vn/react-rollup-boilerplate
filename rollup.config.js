import { uglify } from "rollup-plugin-uglify";
import node from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "src/main.js",
  output: {
    file: "www/index.js",
    format: "iife",
    sourcemap: true
  },
  plugins: [
    node(),
    commonjs(),
    uglify()
  ]
}