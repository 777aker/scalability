// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/scalability/',
    server: {
        port: "5173",
        hmr: {
            host: "localhost",
            protocol: "ws",
            port: "5174",
        },
        allowedHosts: [
            '.planetinkgames.fun',
        ],
    },
});