// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/scalability/',
    server: {
        strictPort: "true",
        port: "5173",
        allowedHosts: [
            '.planetinkgames.fun',
        ],
    },
});