import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { federation } from '@module-federation/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: 'vite_provider',
      manifest: true,
    })
  ],
})
