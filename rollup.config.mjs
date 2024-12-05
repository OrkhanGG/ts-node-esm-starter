import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { readdirSync } from "fs";

export default {
    input: readdirSync("src").map((file) => `src/${file}`), // Include all files in `src` as inputs
    output: {
        dir: "dist", // Output everything into `dist`
        format: "esm", // Use ESM format
        entryFileNames: "[name].mjs", // Flat structure with `.mjs` extensions
        chunkFileNames: "[name]-[hash].mjs", // For dynamic imports (if any)
    },
    plugins: [
        peerDepsExternal(), // Exclude peer dependencies
        resolve({ preferBuiltins: true }), // Resolve Node.js modules
        commonjs(), // Convert CommonJS dependencies to ESM
        typescript({
            tsconfig: "./tsconfig.json", // Use your existing TypeScript config
            declaration: false, // Disable `.d.ts` file generation
        }),
    ],
};
