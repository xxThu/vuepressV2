export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/yang_x/2024/Vuepress/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/yang_x/2024/Vuepress/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home Page"} }],
  ["/examples/examples.html", { loader: () => import(/* webpackChunkName: "examples_examples.html" */"C:/Users/yang_x/2024/Vuepress/vuepress-starter/docs/.vuepress/.temp/pages/examples/examples.html.js"), meta: {"title":"Markdown Extension Examples"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"C:/Users/yang_x/2024/Vuepress/vuepress-starter/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"Guide"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/yang_x/2024/Vuepress/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
