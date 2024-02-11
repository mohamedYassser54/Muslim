import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  // This changes the output dir from dist to build
  // comment this out if that isn't relevant for your project
  build: {
    outDir: "build",
  },
  plugins: [
    reactRefresh(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
  ],
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg','**/*.apk'], // Add more file extensions as needed, excluding .apk
});

export const rollupOutputOptions = () => ({
  output: {
    manualChunks: {
      apk: ['/src/component/Muslim.apk'],
    },
  },
});
