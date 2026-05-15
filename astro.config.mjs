import { defineConfig } from 'astro/config';
import pwa from '@astrojs/pwa';

export default defineConfig({
  integrations: [pwa()],
  site: 'https://queerobjectarchive.com',
  base: '/',
});


//export default defineConfig({
//  site: 'https://izandrews.github.io',
//  base: '/Queer_Object_Archive/',
//});
