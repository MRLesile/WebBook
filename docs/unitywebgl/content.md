# Unity WebGL <Badge text="WebGL主题Unity 2022.2.15"/>
## Unity WebGL发布基本设置
+ PlayerSetting
+ + Resolution 中 RunInBakcground一般关闭，后台时是否运行
+ + Other Settings->Strip Engine Code 勾选上这是剥离引擎代码把Managed stripping level>等级设成高这能尽可能剥离不使用的引擎代码,Optimize mesh Data勾选上优化网格数据,Texture MipMap Stripping 勾选贴图边缘模糊进行抗锯齿,Stack Trace 全部选择None 发布正式版堆栈跟踪全部不需要.Lightmap Encoding 选择Low光照贴图选低可以牺牲质量换速度
+ + Publishing Setting Enable Excptions 选择None,Compression Format选 Gzip,Data Caching 数据缓存,Decompression Fallback 压缩回退，勾选

#抗锯齿
[Unity Weg抗锯齿FXAA](https://raw.githubusercontent.com/MRLesile/WebBook/main/docs/unitywebgl/Package/fxaa.zip)