module.exports = {
    base: "/WebBook/",
    title: "小郑的Unity小屋",
    description: "Unity技术手册",
    themeConfig: {
      sidebarDepth: 3,
      sidebar: [
        {
          title: 'Unity',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/unity/test',
          ]
        }
      ]
    }
  };