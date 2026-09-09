// @ts-check
import { defineConfig } from "astro/config";
import { locales } from "./src/const";
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en-us", // The default language used as a fallback
    locales: locales, // All supported languages on the site
    routing: {
      prefixDefaultLocale: true, // URL structure will be:
      // redirectToDefaultLocale: true
    },
  },
  integrations: [react()]
});
