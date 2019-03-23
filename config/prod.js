// Rollup plugins
import { uglify } from "rollup-plugin-uglify";
import replace from 'rollup-plugin-replace';

// Import the development configuration
import config from './dev';

config.output.file = 'dist/index.min.js';
config.plugins[3] = replace({ 'process.env.NODE_ENV': JSON.stringify('production') })
config.plugins.push(uglify())

export default config