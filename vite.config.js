// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/scalability/',
    server: {
        strictPort: "true",
        port: "5173",
        hmr: {
            host: "localhost",
            protocol: "ws",
        },
        allowedHosts: [
            '.planetinkgames.fun',
        ],
    },
});