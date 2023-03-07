import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../docs",
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: "src/index.html",
      },
      output: {
        chunkFileNames: "assets/[name].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == "style.css") {
            return "assets/style.css";
          }
          return "assets/[name][extname]";
        },
      },
    },
  },
  base: "/",
  server: {
    port: 3456,
  },
});
