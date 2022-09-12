import rollupPluginVue from "rollup-plugin-vue"
import rollupPluginPeerDepsExternalModule from "rollup-plugin-peer-deps-external";

export default [
    {
        input: "src/index.js",
        output: [
            {
                format: "esm",
                file: "dist/index.mjs",
            },
            {
                format: "cjs",
                file: "dist/index.js",
            },
        ],
        plugins: [
            rollupPluginVue(), rollupPluginPeerDepsExternalModule(),
        ]
    }
]
