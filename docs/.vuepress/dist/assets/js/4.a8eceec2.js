(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{282:function(t,s,a){t.exports=a.p+"assets/img/1.a24a1e83.jpg"},283:function(t,s,a){t.exports=a.p+"assets/img/2.ca10c6ff.png"},284:function(t,s,a){t.exports=a.p+"assets/img/3.f61b23fd.png"},285:function(t,s,a){t.exports=a.p+"assets/img/4.aa01cbeb.png"},286:function(t,s,a){t.exports=a.p+"assets/img/5.ef906589.jpeg"},287:function(t,s,a){t.exports=a.p+"assets/img/6.6315e1ab.png"},288:function(t,s,a){t.exports=a.p+"assets/img/7.1f7f5fee.jpeg"},301:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"移动端的图片上传相关问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移动端的图片上传相关问题"}},[t._v("#")]),t._v(" 移动端的图片上传相关问题")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("1.(Unity 移动端获取相册图片后，竖屏照片跟横屏照片的处理)\n    >类似于微博上传图片的处理方式\n(1).我们先搭建一个类似9宫格的上传界面\n")])])]),s("p",[s("img",{attrs:{src:a(282),alt:"在这里插入图片描述"}})]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("2.我们再从iPhone 导出两张照。照片一张为横屏拍摄，一张为竖屏拍摄\n")])])]),s("p",[s("img",{attrs:{src:a(283),alt:"在这里插入图片描述"}}),t._v(" "),s("img",{attrs:{src:a(284),alt:"在这里插入图片描述"}})]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("3.很明显我们看到了一张1072*1905跟1845*1038的照片我们先不做处理直接将图片赋值给RawImage\n")])])]),s("p",[s("img",{attrs:{src:a(285),alt:"在这里插入图片描述"}})]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("很明显竖屏的照片被拉伸后失真，我有过一篇文章用其他方式处理过这个问题\n")])])]),s("p",[t._v("[跳转链接]"),s("a",{attrs:{href:"https://blog.csdn.net/m0_37382999/article/details/109443871",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/m0_37382999/article/details/109443871"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("类似微博的处理方式\n1.微博的效果\n")])])]),s("p",[s("img",{attrs:{src:a(286),alt:"在这里插入图片描述"}})]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("Unity处理\n调整RawImage 下的UVRect 值为 X:0  Y:0.25f W:1 H:0.5f\n我们来看下PC上的效果\n")])])]),s("p",[s("img",{attrs:{src:a(287),alt:"在这里插入图片描述"}})]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("我们来看下移动端上的效果\n")])])]),s("p",[s("img",{attrs:{src:a(288),alt:"在这里插入图片描述"}})]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("完美还原微博上传图片的效果的效果，这边多一句，微博点开可以放大图片，其实也就是RawImage 的SetNativeSize 的事件，我们如果想要实现点击查看大图，或者原图的效果。即可调用该方法。\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);