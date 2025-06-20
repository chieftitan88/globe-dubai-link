import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize chunk splitting for better performance
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          ui: ['@radix-ui/react-slot', 'lucide-react'],
        },
      },
    },
    // Enable source maps for debugging while keeping bundle size optimized
    sourcemap: mode === 'development',
    // Optimize minification
    minify: 'esbuild',
    // Set target for modern browsers to enable more optimizations
    target: 'esnext',
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['framer-motion', 'react', 'react-dom'],
  },
}));
