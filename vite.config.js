// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/scalability',
    server: {
        allowedHosts: [
            '.planetinkgames.fun',
        ],
    },
});