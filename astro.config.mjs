import { defineConfig } from 'astro/config';
export default defineConfig({ site: 'https://jaydenjoony05.github.io', output: 'static', trailingSlash: 'always', devToolbar: {enabled: false}, vite: {server: {watch: {usePolling: true}}} });
