# 盲埋孔

嘉立创EDA专业版已支持放置盲埋孔，在操作之前先介绍一下什么是盲埋孔。

**盲孔**：在多层板的设计中，该孔有一边是在板子的表面，然后通至板子之内部为止。盲孔就是连接表层和内层而不贯通整版的导通孔。盲孔是指连接内层之间而在成品板表层不可见的导通孔。

**埋孔**：埋孔是指做在内层过孔，表底层是看不到的，用于内层信号互连。一般在手机、PDA板上用的比较多。埋孔可以减少信号受干扰的几率，保持传输线特性阻抗的连续性，并节约走线空间，适用于高密高速的电路板设计。

在放置盲埋孔前需要在规则设置里添加盲埋孔。设置盲埋孔的前提是必须在两层板以上才能添加。

![image-20211223145643405](/storage/images/cn/pcb/place-blind-buried-via/place-blind-buried-via_20240621_172124.png)

点击“+”添加盲埋孔，

![image-20211223145732170](/storage/images/cn/pcb/place-blind-buried-via/place-blind-buried-via_20240621_172125.png)

添后给盲埋孔命名，选取起始层和结束层。

**注意**：起始层为顶层时，结束层不能是底层。**添加完埋孔和埋孔**点击确定即可把盲埋孔的规则设置完成。

![image-20211223145852223](/storage/images/cn/pcb/place-blind-buried-via/place-blind-buried-via_20240621_172126.png)

在放置盲埋孔之前需要先放置一个过孔，在右侧面板找到过孔的属性，选择刚刚添加的盲埋孔。

![image-20210519101000228](/storage/images/cn/pcb/place-blind-buried-via/place-blind-buried-via_20240621_172127.png)

**盲孔**：顶层到内电1层

![image-20210519101012338](/storage/images/en/pcb/place-blind-buried-via/place-blind-buried-via_20240621_172126.png)

**埋孔**：内电层1到内电层2。

![image-20210519101029325](/storage/images/en/pcb/place-blind-buried-via/place-blind-buried-via_20240621_172127.png)

## 布线模式下放置盲埋孔

在布线模式下右键添加盲埋孔，放置盲埋的时，需要切换到相应的层才能放置。

![image-20210519101146873](/storage/images/cn/pcb/place-blind-buried-via/place-blind-buried-via_20240621_172128.png)

也可以在系统设置里把布线时切层时优先放置盲埋孔。

![image-20210519101333058](/storage/images/cn/pcb/place-blind-buried-via/place-blind-buried-via_20240621_172129.png)

操作演示视频：https://www.bilibili.com/video/BV1eD4y1B778/?spm_id_from=333.999.0.0
