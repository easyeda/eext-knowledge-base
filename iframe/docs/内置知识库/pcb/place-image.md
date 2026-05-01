# 图片

在PCB和PCB库画布下，嘉立创EDA支持添加图片。你可以很方便插入丝印logo等标识图案。

**操作入口：**

-   顶部菜单 - 放置 - 图片
-   顶部工具栏 - 图片(需要手动开启)
-   顶部菜单 - 文件 - 导入 - 图片

![image-20210519111630123](/storage/images/cn/pcb/place-image/place-image_20240621_172124.png)

点击插入图片功能，会打开一个窗口，你可以添加你需要的图片，支持图片格式有：SVGZ、SVG、PNG、PIP、JPG、PJPEG、JPEG、JFIF格式。

-   **容差**：数值越大，图像损失也就也大
-   **简化**：数值越大，图像边沿会更圆润
-   **平滑**：数值越大，导入的图片更加平滑，需要开启质量优先比较明显
-   **反相**：选择后，原本高亮区域会被挖图
-   **图片尺寸**：设置你要插入的大小，修改单数值会等比例缩放
-   **单位**：系统只支持两种单位，mm和mil

![image-20210519111642391](/storage/images/cn/pcb/place-image/place-image_20240621_172125.png)

图片放置会在当前编辑的图层里，点击插入的图片，在右侧面板修改图层、宽、高和镜像。

![image-20210519111700981](/storage/images/cn/pcb/place-image/place-image_20240621_172126.png)

## 导入彩色图片

嘉立创EDA支持导入彩色图片，需要先在 PCB 设置里面开启“使用嘉立创彩色丝印工艺”选项。

![图 24](/storage/images/cn/pcb/other-draw-colorful-silkscreen/other-draw-colorful-silkscreen_20240621_172124.png)

预览图片时，选择放置原图

![图 25](/storage/images/cn/pcb/other-draw-colorful-silkscreen/other-draw-colorful-silkscreen_20240621_172125.png)

将会自动放在顶层丝印层，你也可以切换到文档层或底层丝印层。

![图 26](/storage/images/cn/pcb/other-draw-colorful-silkscreen/other-draw-colorful-silkscreen_20240621_172126.png)

导入彩色图片，你可以：

-   作为板子背景图，方便线路等细节对比
-   放置在顶层或底层丝印层，后续导出Gerber在嘉立创生产彩色丝印的板子

在2D和3D预览时，也可以同时预览彩色图片。

更多关于彩色丝印的说明请查看：[绘制彩色丝印](https://prodocs.lceda.cn/cn/pcb/other-draw-colorful-silkscreen/index.html)

操作演示视频：https://www.bilibili.com/video/BV1qP4y1f7pk/?spm_id_from=333.999.0.0
