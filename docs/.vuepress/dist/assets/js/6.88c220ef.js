(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{273:function(t,a,s){t.exports=s.p+"assets/img/Oculus.43872ce6.png"},274:function(t,a,s){t.exports=s.p+"assets/img/OculusIntergration.aeb64aeb.jpg"},287:function(t,a,s){"use strict";s.r(a);var e=s(14),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"oculus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oculus"}},[t._v("#")]),t._v(" Oculus")]),t._v(" "),a("h2",{attrs:{id:"有关vr一体机的抗锯齿一些设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有关vr一体机的抗锯齿一些设置"}},[t._v("#")]),t._v(" 有关VR一体机的抗锯齿一些设置")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("下面是相关设置\n")])])]),a("p",[a("img",{attrs:{src:s(273),alt:"设置DPI参数"}})]),t._v(" "),a("blockquote",[a("p",[t._v("1.如果是URP渲染管线下，请关闭Allow DynamicResolution\n2.请对应使用合适的抗锯齿算法如MSAA FXAA SMAA\n3.UI的字体使用TextPro\n4.修改RenderScale 的值（默认是1）")])]),t._v(" "),a("p",[t._v("以上的方法均有性能的开销，请根据个人的项目调整合适的数值")]),t._v(" "),a("h2",{attrs:{id:"有关oculus-quest中实测v47-oculus-intergration所遇到的一些问题总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有关oculus-quest中实测v47-oculus-intergration所遇到的一些问题总结"}},[t._v("#")]),t._v(" 有关Oculus Quest中实测V47 Oculus intergration所遇到的一些问题总结")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("UI射线触发大致流程")]),t._v(" "),a("blockquote",[a("p",[t._v("(1)EventSystem 需要挂在CanvasModule\n(2)Cavas挂在在一个空物体的下方，该物体挂在RayInteractable脚本及Pointable Canvas\n(3)Canvas 同级创建两个空物体一个Collider，一个PlaneSurface,注意的是Collider挂在colliderSurface及BoxCollider,注意使用EditCollider调整碰撞器的大小与Canvas一致，PalneSurface只需要挂载PlaneSurface就行")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("  下面是引用关系图\n")])])])])]),t._v(" "),a("p",[a("img",{attrs:{src:s(274),alt:"OculusIntergration"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);