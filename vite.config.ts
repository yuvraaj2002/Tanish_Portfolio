import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginInjectDataLocator from "./plugins/vite-plugin-inject-data-locator";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginInjectDataLocator()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@heroui/react', '@heroui/use-theme'],
          animation: ['framer-motion'],
          icons: ['@iconify/react']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@heroui/react', '@heroui/use-theme', 'framer-motion', '@iconify/react']
  }
});