// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/scalability/',
    server: {
        strictPort: "true",
        hmr: {
            host: "localhost",
            protocol: "ws",
        },
        allowedHosts: [
            '.planetinkgames.fun',
        ],
    },
});