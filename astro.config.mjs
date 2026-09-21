import { defineConfig } from 'astro/config';
export default defineConfig({ site: 'https://jayden-park-portfolio.woolly-plume-2351.chatgpt.site', output: 'static', trailingSlash: 'always', devToolbar: {enabled: false}, vite: {server: {watch: {usePolling: true}}} });
