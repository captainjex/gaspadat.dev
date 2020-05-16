import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";

import "@/assets/code-highlight.css"
import "@/assets/main.css"

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Playfair+Display:wght@400;500;700&display=swap'
  })
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
}
