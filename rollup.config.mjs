import sass from "rollup-plugin-sass";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/priority-nav.js",
  output: [
    {
      file: "dist/priority-nav.js",
    },
    {
      file: "dist/priority-nav.min.js",
      plugins: [terser()],
    },
  ],
  plugins: [
    sass({
      output: "dist/priority-nav-core.css",
    }),
  ],
};
