// docs/.vitepress/plugins.js
import { AnnouncementPlugin } from "vitepress-plugin-announcement";

export const announcementPlugin = AnnouncementPlugin({
  title: "公告",
  body: [
    { type: "text", content: "👇公众号👇 ---👇 赞赏 👇" },
    {
      type: "image",
      src: "https://cdn.upyun.sugarat.top/mdImg/sugar/85c9554d023be2fcc5aab94effeef033",
      style: "display: inline-block;width:46%;padding-right:6px",
    },
    {
      type: "image",
      src: "https://cdn.upyun.sugarat.top/mdImg/sugar/54eacf3e730af9c1e3542a4800a422ea",
      style: "display: inline-block;width:46%;padding-left:6px",
    },
  ],
  footer: [
    {
      type: "text",
      content: "footer content",
    },
    {
      type: "button",
      content: "作者博客",
      link: "https://sugarat.top",
    },
    {
      type: "button",
      content: "博客主题",
      link: "https://theme.sugarat.top",
      props: {
        type: "success",
      },
    },
  ],
});
