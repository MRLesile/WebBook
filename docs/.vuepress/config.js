module.exports = {
  base: "/WebBook/",
  title: "小郑的Unity小屋",
  description: "Unity技术手册",
  themeConfig: {
    sidebarDepth: 3,
    nav: [
      { text: "GitHub", link: "https://github.com/MRLesile" },
    ],
    sidebar: [
      {
        title: '移动端',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          '/unitymobile/content',
        ]
      },
      {
        title: 'Editor',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          '/unityeditor/content',
        ]
      },
      {
        title: 'VR/AR',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          '/unityvrar/oculus',
          '/unityvrar/pico',
        ]
      },
      {
        title: '前沿技术探究',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          '/unityai/ai',
        ]
      }
    ]
  }
};