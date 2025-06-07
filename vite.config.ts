import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { Connect } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    {
      name: "spa-fallback",
      configureServer(server) {
        server.middlewares.use((req: Connect.IncomingMessage, res: any, next: Connect.NextFunction) => {
          if (req.url!.includes('.')) {
            // If the URL contains a dot, assume it's a file request and let Vite handle it
            next();
          } else {
            // For all other requests, redirect to index.html
            req.url = '/index.html';
            next();
          }
        });
      },
      configurePreviewServer(server) {
        server.middlewares.use((req: Connect.IncomingMessage, res: any, next: Connect.NextFunction) => {
          if (req.url!.includes('.')) {
            next();
          } else {
            req.url = '/index.html';
            next();
          }
        });
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/',
  server: {
    port: 12000,
    strictPort: true,
    host: true
  },
  preview: {
    port: 12000,
    strictPort: true,
    host: true
  }
}));