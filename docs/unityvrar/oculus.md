# Oculus
## 有关VR一体机的抗锯齿一些设置
    下面是相关设置
![设置DPI参数](./Image/Oculus.png)  


    1.如果是URP渲染管线下，请关闭Allow DynamicResolution
    2.请对应使用合适的抗锯齿算法如MSAA FXAA SMAA
    3.UI的字体使用TextPro
    4.修改RenderScale 的值（默认是1）

 以上的方法均有性能的开销，请根据个人的项目调整合适的数值

 ## 有关Oculus Quest中实测V47 Oculus intergration所遇到的一些问题总结

* UI射线触发大致流程
    (1)EventSystem 需要挂在CanvasModule
    (2)Cavas挂在在一个空物体的下方，该物体挂在RayInteractable脚本及Pointable Canvas
    (3)Canvas 同级创建两个空物体一个Collider，一个PlaneSurface,注意的是Collider挂在colliderSurface及BoxCollider,注意使用EditCollider调整碰撞器的大小与Canvas一致，PalneSurface只需要挂载PlaneSurface就行

        下面是引用关系图
![OculusIntergration](./Image/OculusIntergration.jpg)  