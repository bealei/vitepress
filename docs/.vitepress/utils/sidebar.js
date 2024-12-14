// docs/.vitepress/sidebar.js
import { set_sidebar } from "./auto-sidebar.mjs";

export const sidebar = {
  "/md/about/": set_sidebar("/md/about/"),
  "/md/web/": set_sidebar("/md/web/"),
  "/md/java/": set_sidebar("/md/java/"),
};
