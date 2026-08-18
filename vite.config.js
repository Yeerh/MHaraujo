import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  preview: {
    host: "127.0.0.1",
    port: 3018,
    strictPort: true,
    allowedHosts: ["teamma.com.br", "www.teamma.com.br", "localhost", "127.0.0.1"],
  },
});
