(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{293:function(a,t,e){a.exports=e.p+"assets/img/Oculus.43872ce6.png"},294:function(a,t,e){a.exports=e.p+"assets/img/OculusIntergration.aeb64aeb.jpg"},312:function(a,t,e){"use strict";e.r(t);var s=e(14),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"oculus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oculus"}},[a._v("#")]),a._v(" Oculus "),t("Badge",{attrs:{text:"Oculus主题"}})],1),a._v(" "),t("h2",{attrs:{id:"有关vr一体机的抗锯齿一些设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有关vr一体机的抗锯齿一些设置"}},[a._v("#")]),a._v(" 有关VR一体机的抗锯齿一些设置 "),t("Badge",{attrs:{text:"抗锯齿",type:"warning"}})],1),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("下面是相关设置\n")])])]),t("p",[t("img",{attrs:{src:e(293),alt:"设置DPI参数"}})]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("1.如果是URP渲染管线下，请关闭Allow DynamicResolution，并且设置DPI的每英寸的像素点如上图\n2.请对应使用合适的抗锯齿算法如MSAA FXAA SMAA\n3.UI的字体使用TextPro\n4.修改RenderScale 的值（默认是1，注意URP渲染管线下在universal render pipeline asset中设置）\n5.使用MeshBaker工具将物体合并纹理Mesh合并，不动的物体走静态，带动画及移动的物体看项目需求走Dynamic Bactching.(带动画的Mesh Baker合并注意使用SkinMeshRender)\n")])])]),t("p",[a._v("以上的方法均有性能的开销，请根据个人的项目调整合适的数值")]),a._v(" "),t("h2",{attrs:{id:"有关oculus-quest中实测v47-oculus-intergration所遇到的一些问题总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有关oculus-quest中实测v47-oculus-intergration所遇到的一些问题总结"}},[a._v("#")]),a._v(" 有关Oculus Quest中实测V47 Oculus intergration所遇到的一些问题总结 "),t("Badge",{attrs:{text:"Oculus intergration v47",type:"warning"}})],1),a._v(" "),t("ul",[t("li",[t("p",[a._v("UI射线触发大致流程\n(1)EventSystem 需要挂在CanvasModule\n(2)Cavas挂在在一个空物体的下方，该物体挂在RayInteractable脚本及Pointable Canvas\n(3)Canvas 同级创建两个空物体一个Collider，一个PlaneSurface,注意的是Collider挂在colliderSurface及BoxCollider,注意使用EditCollider调整碰撞器的大小与Canvas一致，PalneSurface只需要挂载PlaneSurface就行")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("  下面是引用关系图\n")])])])])]),a._v(" "),t("p",[t("img",{attrs:{src:e(294),alt:"OculusIntergration"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);