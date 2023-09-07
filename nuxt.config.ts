// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxtjs/tailwindcss'],
  content: {
    documentDriven: true,

    highlight: {
      // Theme used in all color schemes.
      // theme: 'one-dark-pro',
      preload: [
        'diff',
        'ts',
        'js',
        'css',
        'java',
        'groovy',
        'sql',
        'xml',
        'json',
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: true,
  tailwindcss: {
    // Options
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },
  css: ['~/assets/scss/app.scss'],
});
