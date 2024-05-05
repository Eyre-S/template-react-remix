import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import stylusAlias from "vite-plugin-stylus-alias-next";
import path from "node:path";

installGlobals();

const stylusMixins = `
@import "${path.resolve(__dirname,'./app/styles/mixins')}"
`
const stylusConfig = {
	additionalData: stylusMixins
}

export default defineConfig({
	
	plugins: [
		remix({
			ignoredRouteFiles: [
				"**/*.css",
				"**/*.styl",
				"**/*.stylus",
			]
		}),
		tsconfigPaths(),
		stylusAlias(),
	],
	
	resolve: {
		alias: {
			"~": path.resolve(__dirname, "./app"),
		}
	},
	css: {
		preprocessorOptions: {
			stylus: stylusConfig,
			styl: stylusConfig
		},
		modules: {
			localsConvention: "camelCase"
		}
	}
	
});
