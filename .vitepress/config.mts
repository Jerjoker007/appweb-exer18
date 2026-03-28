import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Exercice 18",
  description: "Revue de code documentée",
  base: "/appweb-exer18/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Revue de code", link: "/jeremie-paquin" },
    ],

    sidebar: [
      {
        text: "Revue de code",
        items: [
          { text: "Jérémie Paquin", link: "/jeremie-paquin" },
          { text: "Xavier Lepage", link: "/xavier-lepage" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
