// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  vite: {
    optimizeDeps: {
      include: ["@vueuse/core"],
    },
  },
  alias: {
    "problematic-library":
      "problematic-library/dist/problematic-library.cjs.js",
  },
  build: {
    transpile: ["@vueuse/core", "problematic-library"],
  },
  modules: [
    // "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils/module",
    "shadcn-nuxt",
    "@nuxtjs/tailwindcss",
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./app/features/_shared/components/elements/ui"
     */
    componentDir: "./app/features/_shared/components/elements/ui",
  },
  components: [
    { path: "~/features/_shared/components", pathPrefix: false },

    // It's important that this comes last if you have overrides you wish to apply
    // to sub-directories of `~/components`.
    //
    // ~/components/Btn.vue => <Btn />
    // ~/components/base/Btn.vue => <BaseBtn />
    "~/components",
  ],
  imports: {
    dirs: ["~/app/features/_shared/composables/**"],
  },
});
