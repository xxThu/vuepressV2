export const themeData = JSON.parse("{\"logo\":\"https://vuejs.press/images/hero.png\",\"socialLinks\":[{\"icon\":\"github\",\"link\":\"https://github.com/vuejs/vitepress\"}],\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"Get Started\",\"link\":\"/get-started\"},{\"text\":\"Examples\",\"link\":\"/examples/examples\"},{\"text\":\"Dropdown\",\"children\":[{\"text\":\"SubGroup1\",\"prefix\":\"sub1/\",\"children\":[\"foo.md\",\"bar.md\",{\"text\":\"Example\",\"link\":\"https://example.com\"}]},{\"text\":\"SubGroup2\",\"prefix\":\"sub2/\",\"children\":[\"foo\",\"bar\",\"/baz/\"]}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
