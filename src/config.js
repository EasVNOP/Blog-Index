const SERVE = false; // 是否使用线上服务器

const HOST = ""; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "Eas Techedge主页"; // 个人网站名字

const BLOG_URL = "https://vnop.zeabur.app"; // 个人网站链接（请填写完整链接）

const GITHUB = "https://github.com/EasVNOP"; // 右上角 Github 图标链接，留空不显示

const BACKGROUND_IMG_URL = "https://api.dujin.org/bing/1920.php"; // 背景图片url，默认为必应每日图片（第三方接口）

const SORT_DATA = [
  { sortId: 1, title: "我的联系链接" },
  { sortId: 2, title: "项目应用" }
]; // 网站分类列表，请按照API.md中'/getSort'接口中返回的data格式填写

const RECORD_NUMBER = ""; // 网站备案号，留空不显示

const PAGES_DATA = [
  {
    pageId: 1,
    sortId: 1,
    title: "github",
    subtitle: "开源项目主页",
    url: "http://github.com/EasVNOP/",
    icon: "src/assets/noun-github-4289652.png"
  },
  {
    pageId: 2,
    sortId: 2,
    title: "主标题",
    subtitle: "副标题",
    url: "http://www.your-web-page.xyz/",
    icon: ""
  }
]; // 网站分类列表，请按照API.md中'/getPages'接口中返回的data格式填写

const SLOGAN = [
  "热爱创造，热爱生活",
  "当前粉丝数:99923 LOL~",
  "什么，这不是区块链，这是压缩服务端?"
]; // 在Logo下方显示的标题

const FOOTER_INFO = true; // 是否显示抽屉右下角的文字信息

export default {
  SERVE,
  HOST,
  BLOG_URL,
  BLOG_NAME,
  SORT_DATA,
  PAGES_DATA,
  SLOGAN,
  GITHUB,
  FOOTER_INFO,
  BACKGROUND_IMG_URL,
  RECORD_NUMBER
};
