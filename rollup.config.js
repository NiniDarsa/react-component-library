import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts", // Adjust this to your entry file
  output: [
    {
      file: "dist/index.js",
      format: "cjs", // CommonJS output
    },
    {
      file: "dist/index.es.js",
      format: "esm", // ES module output
    },
  ],
  ///
  plugins: [
    peerDepsExternal(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    postcss({
      plugins: [],
    }),
  ],
  external: ["react", "react-dom"], // Make sure React and React-Dom are not bundled
};
