(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{306:function(t,a,s){t.exports=s.p+"assets/img/urpmore1.cfb7cf41.jpg"},307:function(t,a,s){t.exports=s.p+"assets/img/urpmore2.a41dbc41.jpg"},308:function(t,a,s){t.exports=s.p+"assets/img/urpmore3.146665d5.jpg"},309:function(t,a,s){t.exports=s.p+"assets/img/urpmore4.e93e1bb6.jpg"},333:function(t,a,s){"use strict";s.r(a);var n=s(14),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"urp-中srp跟gpu-instancing相关问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#urp-中srp跟gpu-instancing相关问题"}},[t._v("#")]),t._v(" URP 中SRP跟GPU Instancing相关问题")]),t._v(" "),a("ul",[a("li",[t._v("在URP中SRP默认是打开的，URP中SRP优先于GPUInstancing 所以常常我们在URP中需要GPU Instancing的物体会不成功,如下图")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(306),alt:"GPUInstancing"}})]),t._v(" "),a("ul",[a("li",[a("ul",[a("li",[t._v("此时我们的发现GPU Instancing是没有成功的是因为SRP优先级最高，但是SRP并不能帮我们将DrawCalls降下来，从Frame Debugger看，Draw Call 还是21个，此时要么考虑Static batching合并，这样又会造成打包后Unity的编译包体变大，接下来我们介绍一下如何在URP中打断一些物体我们不想要SRP合批的方法，或者别的工具Mesh Baker提前将这些东西合并成一个Mesh，下面只是单纯介绍Unity里面的简单一种做法。（不通过Shader跟Unity RenderFeafure的做法）")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:s(307),alt:"GPUInstancing"}})]),t._v(" "),a("h2",{attrs:{id:"通过materialpropertyblock-都知道materialpropertyblock可以打断srp具体如何操作呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过materialpropertyblock-都知道materialpropertyblock可以打断srp具体如何操作呢"}},[t._v("#")]),t._v(" 通过MaterialPropertyBlock（都知道MaterialPropertyBlock可以打断SRP具体如何操作呢）")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//需要GPUInstancing 合批的方法")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("MeshRenderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" m_NeedGPUIntance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("MeshRenderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Awake")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MaterialPropertyBlock")]),t._v(" materialPropertyBlock "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("MaterialPropertyBlock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")])]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" m_NeedGPUIntance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里我修改颜色，其实也可以Set其他的Property")]),t._v("\n            materialPropertyBlock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_Color"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("white"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            m_NeedGPUIntance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetPropertyBlock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("materialPropertyBlock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("我们再来看一下Frame Debug及Profiler（这边为啥是48个Draw Calls21个Cube不应该21个吗是因为我打开了SSAO，关闭就是正确了的SSAO又计算了一遍Cube）")]),t._v(" "),a("li",[t._v("此时我们就打断了SRP的合批，将指定的物体进行了GPUInstancing处理\n"),a("img",{attrs:{src:s(308),alt:"GPUInstancing"}})])]),t._v(" "),a("h2",{attrs:{id:"通过urp的renderfeature-处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过urp的renderfeature-处理"}},[t._v("#")]),t._v(" 通过URP的RenderFeature 处理")]),t._v(" "),a("ul",[a("li",[t._v("这个可以自己写RenderPass ，获取指定层级下的所有需要合批的Mesh，然后再进行打断SRP进行GPUInstancing处理")]),t._v(" "),a("li",[t._v("我这边就用的RenderObjects 介绍一下")]),t._v(" "),a("li",[a("ul",[a("li",[t._v("LayMask 是用来区分需要处理的层级物体，将需要SRP ，Static Batching ，GPUInstancing的物体分别渲染区分")])])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("Event 是执行的事件，这边是渲染不透明物体之前，自定义")])])]),t._v(" "),a("li",[a("ul",[a("li",[t._v("Overrides 中就是可以替换的Mat，这边可以使用自定shader 来选择是否支持SRP及GpuInstancing\n"),a("img",{attrs:{src:s(309),alt:"GPUInstancing"}})])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);