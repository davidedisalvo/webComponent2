import { fileURLToPath, URL } from 'url'
import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			customElement: true,
			reactivityTransform: true,
			template: {
				compilerOptions: {
					isCustomElement: (tag) => tag.includes('-')
				}
			}
		}),
		Components({
			directoryAsNamespace: true,
			resolvers: [
				ElementPlusResolver()
			],
			dts: true
		}),
		AutoImport({
			imports: ['vue', 'vitest'],
			eslintrc: {
				enabled: true
			}
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/main.ts'),
			name: 'First',
			formats: ['es', 'cjs', 'umd', 'iife'],
			fileName: 'index'
		},
		// rollupOptions: {
		// 	external: ['vue'],
		// 	output: {
		// 		globals: {
		// 			vue: 'Vue'
		// 		}
		// 	}
		// }
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['src/test/setup.ts'],
		coverage: {
			all: true,
			include: ['src/**/*.vue'],
		},
		include: ['src/test/**/*.test.ts'],
	},
	// https://github.com/vitejs/vite/pull/8090#issuecomment-1184929037
	define: {
		"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
	},
})
