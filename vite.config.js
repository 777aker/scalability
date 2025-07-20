// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/scalability/',
    server: {
        hmr: {
            host: "localhost",
            protocol: "ws",
        },
        allowedHosts: [
            '.planetinkgames.fun',
        ],
    },
});