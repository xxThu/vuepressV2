import comp from "C:/Users/yang_x/2024/Vuepress/vuepress-starter/docs/.vuepress/.temp/pages/guide/examples.html.vue"
const data = JSON.parse("{\"path\":\"/guide/examples.html\",\"title\":\"Examples\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"guide/examples.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
