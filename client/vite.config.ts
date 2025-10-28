import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';


export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  // resolve: {
  //   alias: {
  //     '@store': path.resolve(__dirname, 'src/store'),
  //     '@shared': path.resolve(__dirname, 'src/shared'),
  //     '@components': path.resolve(__dirname, 'src/components'),
  //     '@modules': path.resolve(__dirname, 'src/modules'),
  //     '@assets': path.resolve(__dirname, 'src/assets'),
  //     '@utils': path.resolve(__dirname, 'src/utils'),
  //   },
  // },
  server: {
    port: 3000,
    host: true, 
  },
  build: {
    outDir: 'dist',
  },
});