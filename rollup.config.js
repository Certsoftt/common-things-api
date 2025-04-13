import {babel} from "@rollup/plugin-babel"
import postcss from "rollup-plugin-postcss"
// import filesize from "rollup-plugin-filesize"
import external from "rollup-plugin-peer-deps-external"
import resolve from "@rollup/plugin-node-resolve"
// import {terser} from "@rollup/plugin-terser"

const config={
    input: "src/index.jsx",
    output:[
        {
            file: 'dist/index.esm.js',
            format: 'esm'
        },
        {
            file: "dist/index.js",
            format: "cjs"
        },
        {
            file: "dist/index.es.js",
            format: "es",
            exports: "named"
        }
    ],
    external: [/@babel\/runtime/,'react'],
    plugins:[
        babel({
            babelHelpers:"runtime",
            plugins:["@babel/plugin-transform-runtime"],
            exclude: 'node_modules/*',
            presets: ['@babel/preset-react']
        }),
        external(),
        resolve(),
        // terser(),
        postcss({
            plugins:[],
            minimize:true
        })
    ],
    // filesize(),
}

export default config