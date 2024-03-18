// vite.config.ts
import { defineConfig } from "file:///Users/m/Documents/2024/UN/sentence-2024/node_modules/.pnpm/vite@5.0.4_sass@1.69.5/node_modules/vite/dist/node/index.js";
import { svelte } from "file:///Users/m/Documents/2024/UN/sentence-2024/node_modules/.pnpm/@sveltejs+vite-plugin-svelte@3.0.1_svelte@4.2.7_vite@5.0.4/node_modules/@sveltejs/vite-plugin-svelte/src/index.js";
var vite_config_default = defineConfig({
  plugins: [svelte()],
  publicDir: "./src/svelte/public",
  server: {
    port: 5173,
    fs: {
      strict: false
    },
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin"
    }
  },
  optimizeDeps: {
    // exclude: ["lodash"],
    esbuildOptions: {
      target: "es2022"
    }
  },
  build: {
    target: "es2022",
    minify: true,
    sourcemap: true
  },
  define: {
    "process.env": {}
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbS9Eb2N1bWVudHMvMjAyNC9VTi9zZW50ZW5jZS0yMDI0L3BhY2thZ2VzL2NsaWVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL20vRG9jdW1lbnRzLzIwMjQvVU4vc2VudGVuY2UtMjAyNC9wYWNrYWdlcy9jbGllbnQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL20vRG9jdW1lbnRzLzIwMjQvVU4vc2VudGVuY2UtMjAyNC9wYWNrYWdlcy9jbGllbnQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiXG5pbXBvcnQgeyBzdmVsdGUgfSBmcm9tIFwiQHN2ZWx0ZWpzL3ZpdGUtcGx1Z2luLXN2ZWx0ZVwiXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbc3ZlbHRlKCldLFxuICBwdWJsaWNEaXI6IFwiLi9zcmMvc3ZlbHRlL3B1YmxpY1wiLFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiA1MTczLFxuICAgIGZzOiB7XG4gICAgICBzdHJpY3Q6IGZhbHNlLFxuICAgIH0sXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDcm9zcy1PcmlnaW4tRW1iZWRkZXItUG9saWN5XCI6IFwicmVxdWlyZS1jb3JwXCIsXG4gICAgICBcIkNyb3NzLU9yaWdpbi1PcGVuZXItUG9saWN5XCI6IFwic2FtZS1vcmlnaW5cIixcbiAgICB9LFxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICAvLyBleGNsdWRlOiBbXCJsb2Rhc2hcIl0sXG4gICAgZXNidWlsZE9wdGlvbnM6IHtcbiAgICAgIHRhcmdldDogXCJlczIwMjJcIixcbiAgICB9LFxuICB9LFxuICBidWlsZDoge1xuICAgIHRhcmdldDogXCJlczIwMjJcIixcbiAgICBtaW5pZnk6IHRydWUsXG4gICAgc291cmNlbWFwOiB0cnVlLFxuICB9LFxuICBkZWZpbmU6IHtcbiAgICBcInByb2Nlc3MuZW52XCI6IHt9LFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFYsU0FBUyxvQkFBb0I7QUFDdlgsU0FBUyxjQUFjO0FBR3ZCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxPQUFPLENBQUM7QUFBQSxFQUNsQixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixJQUFJO0FBQUEsTUFDRixRQUFRO0FBQUEsSUFDVjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsZ0NBQWdDO0FBQUEsTUFDaEMsOEJBQThCO0FBQUEsSUFDaEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxjQUFjO0FBQUE7QUFBQSxJQUVaLGdCQUFnQjtBQUFBLE1BQ2QsUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixXQUFXO0FBQUEsRUFDYjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sZUFBZSxDQUFDO0FBQUEsRUFDbEI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
