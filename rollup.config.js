import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import autoPreprocess from 'svelte-preprocess';

const production = true;

export default {
	input: 'src/lib/main.ts',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'package-js/counter.js'
	},
	plugins: [
		svelte({
			compilerOptions: {
				dev: !production,
				customElement: false,
			},
			preprocess: autoPreprocess()
		}),

		css({ output: 'counter.css' }),

		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),

		production && terser()
	],
};
