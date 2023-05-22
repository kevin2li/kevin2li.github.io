import { defineUserConfig } from "vuepress";
import { redirectPlugin } from "vuepress-plugin-redirect";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { getDirname, path } from "@vuepress/utils";
import theme from "./theme.js";
const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Kevin2li's Blog",
  description: "Kevin2li's Blog 的官方网站",
  plugins: [searchProPlugin({ indexContent: true }), redirectPlugin()],

  theme,
  pagePatterns: ["**/*.md", "!**/*.snippet.md", "!.vuepress", "!node_modules"],
  alias: {
    "@theme-hope/modules/info/components/TOC": path.resolve(
      __dirname,
      "./component/TOC.vue"
    ),
    // "@theme-hope/modules/sidebar/components/Sidebar": path.resolve(
    //   __dirname,
    //   "./component/Sidebar.vue"
    // ),
  }
  // Enable it with pwa
  // shouldPrefetch: false,
});
