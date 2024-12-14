import { defineConfig } from "vitepress";
import { AnnouncementPlugin } from "vitepress-plugin-announcement";
// import { set_sidebar } from "./utils/auto-sidebar.mjs";
import { nav } from "./utils/nav"; // 导入 nav 配置
import { sidebar } from "./utils/sidebar"; // 导入 sidebar 配置
import { announcementPlugin } from "./utils/announcementPlugin"; // 导入 announcementPlugin 配置

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vitepress-md/", // 基路径，用于构建静态站点的路径
  lang: "zh-CN",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  title: "zhuanglei",
  description: "A VitePress Site",
  themeConfig: {
    logo: "/index.png", // 表示docs/public/index.png

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-bealei",
    },
    //显示的标题级别
    outline: {
      level: [2, 6],
      label: "目录",
    },
    // 设置搜索框的样式
    search: {
      provider: "local", //本地搜索
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },

    // https://vitepress.dev/reference/default-theme-config
    nav, // 使用导入的 nav 配置
    // nav: [
    //   { text: "主页", link: "/" },
    //   { text: "示例", link: "/markdown-examples" },
    //   { text: "web", link: "/md/web/" },
    //   { text: "vue3", link: "/md/web/vue3/README" },
    //   { text: "自动2", link: "/md/java/ee/" },
    //   { text: "se", link: "/md/java/se/ee-1" },
    //   { text: "关于", link: "/md/about/about" },
    // ],

    // sidebar: [
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Markdown Examples", link: "/markdown-examples" },
    //       { text: "Runtime API Examples", link: "/api-examples" },
    //     ],
    //   },
    // ],

    // sidebar: {
    //   "/md/about/": set_sidebar("/md/about/"),
    //   "/md/web/": set_sidebar("/md/web/"),
    // },
    sidebar,
    //社交链接
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
      { icon: "instagram", link: "https://github.com/vuejs/vitepress" },
      { icon: "twitter", link: "https://github.com/vuejs/vitepress" },
      { icon: "youtube", link: "https://github.com/vuejs/vitepress" },
    ],
  },

  vite: {
    // ↓↓↓↓↓
    plugins: [
      announcementPlugin, // 使用导入的 announcementPlugin 配置
      // AnnouncementPlugin({
      //   title: "公告",
      //   body: [
      //     { type: "text", content: "👇公众号👇 ---👇 赞赏 👇" },
      //     {
      //       type: "image",
      //       src: "https://cdn.upyun.sugarat.top/mdImg/sugar/85c9554d023be2fcc5aab94effeef033",
      //       style: "display: inline-block;width:46%;padding-right:6px",
      //     },
      //     {
      //       type: "image",
      //       src: "https://cdn.upyun.sugarat.top/mdImg/sugar/54eacf3e730af9c1e3542a4800a422ea",
      //       style: "display: inline-block;width:46%;padding-left:6px",
      //     },
      //   ],
      //   footer: [
      //     {
      //       type: "text",
      //       content: "footer content",
      //     },
      //     {
      //       type: "button",
      //       content: "作者博客",
      //       link: "https://sugarat.top",
      //     },
      //     {
      //       type: "button",
      //       content: "博客主题",
      //       link: "https://theme.sugarat.top",
      //       props: {
      //         type: "success",
      //       },
      //     },
      //   ],
      // }),
    ],
    // ↑↑↑↑↑
  },
});
