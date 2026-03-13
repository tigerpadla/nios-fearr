import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://niosfearr.ie",
  vite: {
    plugins: [tailwindcss()],
  },
});
