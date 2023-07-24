// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@vite-pwa/nuxt'],
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "My Awesome App",
      short_name: "CLC Mart",
      icons: [
        {
          src: "images/icon_72x72.png",
          type: "image/png",
          sizes: "72x72",
        },
        {
          src: "images/icon_96x96.png",
          type: "image/png",
          sizes: "96x96",
        },
        {
          src: "images/icon_144x144.png",
          type: "image/png",
          sizes: "144x144",
        }
      ],
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#ffffff",
    },
    workbox: {
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: "module",
    },
  },
})
