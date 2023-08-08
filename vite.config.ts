import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import path from "path";

const config = defineConfig((command) => {
  console.log(command);
  return {
    plugins: [solidPlugin()],
    server: {
      port: 3004,
    },
    build: {
      target: "esnext",
    },
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
    },
  };
});

export default config;
