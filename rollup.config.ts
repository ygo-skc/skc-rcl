import { babel } from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import { RollupOptions } from 'rollup'

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: 'dist/index.js',
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: 'dist/index.es.js',
				format: 'esm',
				exports: 'named',
				sourcemap: true,
			},
		],
		plugins: [
			postcss({
				plugins: [],
				minimize: true,
			}),
			typescript({ tsconfig: './tsconfig.json' }),
			babel({ exclude: 'node_modules/**', presets: ['@babel/preset-react'] }),
			resolve(),
			external(),
			terser(),
		],
		external: ['react', 'react-dom', 'styled-components', '@mui/material', '@nivo/pie', '@emotion/react', '@emotion/styled', 'react-visibility-sensor'],
	},
	// expose types
	{
		input: 'src/index.ts',
		output: [{ file: 'dist/index.d.ts', format: 'es' }],
		external: [/\.css$/], // omit css imports
		plugins: [dts()],
	},
] as RollupOptions
