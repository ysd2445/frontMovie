import { defineConfig } from "vite";

export default defineConfig({
  base: "./", // Use relative paths

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'mui-vendor': ['@mui/material'],
        },
      },
    },
  },
});

