module.exports = {
  base: "/WebBook/",
  title: "小郑的Unity小屋",
  description: "Unity技术手册",
  themeConfig: {
    sidebarDepth: 3,
    nav: [
      {
        text: '联系方式',
        items: [
          { text: 'QQ:3528755239',link: '/'},
          { text: 'VX:SZUnityDevelop',link: '/'}
        ]
      },
      { text: "GitHub", link: "https://github.com/MRLesile" },
    ],
    sidebar: [
      {
        title: '移动端',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          '/unitymobile/content',
          '/unitymobile/mobileoptimize',
          '/unitymobile/urpfeature',
          '/unitymobile/urpmore',
        ]
      },
      {
        title: 'Editor',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          '/unityeditor/content',
          '/unityeditor/sdkuse',
          '/unityeditor/addressable',
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
        title: 'UnityWebGL',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          '/unitywebgl/content',
        ]
      },
      {
        title: '前沿技术探究',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          '/unityai/ai',
          '/unityai/chatgpt',
          // '/unityai/showdemo',
          '/unityai/git',
          '/unityai/shadergraph',
          '/unityai/eventmanager',
        ]
      },
      {
        title: '疑难杂症',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          '/unityerror/error',
        ]
      }
    ]
  }
};