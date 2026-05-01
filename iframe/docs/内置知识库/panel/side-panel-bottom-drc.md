# 检查DRC

## DRC检查

DRC检查的目的是为了在所有的面板画好后总体检查。设计完一个面板后，需要将面板进行规则检查DRC,DRC检查是依据特定的设计规则进行的，例如设计要求的板框图元最小间距是2mm，那么实际面板中，出现小于2mm的板框图元间距就会输出报错。

DRC检查提示分为"致命错误"、"错误"、"警告"、"消息"这几个等级。

并不是DRC有错误的面板就不能生产制作，只有级别为致命错误的才不允许输出面板制造文件，错误、警告和消息都是可以忽略的。

### 使用步骤

-   底部面板 - DRC ，单击检查DRC按钮即可进行设计规则检查。

![图 1](/storage/images/cn/panel/side-panel-bottom-drc/side-panel-bottom-drc_20240621_172123.png)

右侧的DRC结果输出窗口中，会显示对当前面板进行设计规则检查的所有相关信息。
输出的第一条信息提示开始设计规则检查，最后一条信息提示完成设计规则检查及统计的各等级数量，而这之间输出的就是该面板不符合设计规则的DRC错误。

![图 2](/storage/images/cn/panel/side-panel-bottom-drc/side-panel-bottom-drc_20240621_172124.png)

检查DRC后，DRC面板中展示了具体的时间信息，DRC错误的级别，以及具体的每个DRC错误的具体规则信息。

支持点击"去绘制"后，打开目标面板文档，并将当前编辑图层切换到对应的图层。

![图 3](/storage/images/cn/panel/side-panel-bottom-drc/side-panel-bottom-drc_20240621_172125.png)

![图 6](/storage/images/cn/panel/side-panel-bottom-drc/side-panel-bottom-drc_20240621_172126.png)

支持点击对象ID定位到画布，方便快速检查进行调整。

![图 4](/storage/images/cn/panel/side-panel-bottom-drc/side-panel-bottom-drc_20240621_172127.png)

### 面板导出 - 自动检查DRC

-   顶部菜单 - 导出 - 面板制造文件...

![图 7](/storage/images/cn/panel/side-panel-bottom-drc/side-panel-bottom-drc_20240621_172128.png)

弹出导出生产文件弹窗，2D预览当前面板文件，单击导出按钮。

![图 8](/storage/images/cn/panel/side-panel-bottom-drc/side-panel-bottom-drc_20240621_172129.png)

导出之前会自动进行一次设计规则检查。

-   存在**致命错误**时，不支持导出。
    导出弹窗会自动关闭，画布中央短提示致命错误数量，且底部DRC面板中可见相关的详细致命错误信息。
    ![图 9](/storage/images/cn/panel/side-panel-bottom-drc/side-panel-bottom-drc_20240621_172130.png)

注意：只有解决致命错误后，才能支持面板制造文件的导出。

-   存在**错误**或**警告**时(无致命错误)，会弹窗提示，但是不影响导出。
    ![图 10](/storage/images/cn/panel/side-panel-bottom-drc/side-panel-bottom-drc_20240621_172131.png)
    可以选择忽略警告提示，单击"否，继续操作"，将继续导出面板制造文件。
    也可以单击"是，去确认"，将关闭弹窗并打开底部DRC面板，可查看详细的错误或警告信息。(建议先检查输出的错误或警告级别的DRC后再操作导出)
    ![图 11](/storage/images/cn/panel/side-panel-bottom-drc/side-panel-bottom-drc_20240621_172132.png)
    右下角可勾选不再提示，后续进行设计规则检查发现错误或警告级别的RDC将不会再弹出该警告提示弹窗。
    顶部菜单 - 设置 - 面板/面板库 - 通用，可设置导出/下单时是否警告提示。
    ![图 12](/storage/images/cn/panel/side-panel-bottom-drc/side-panel-bottom-drc_20240621_172133.png)

-   仅有**信息**级别的DRC输出时，可直接导出。
    DRC面板中输出最后一条信息提示导出生产文件成功。
    ![图 13](/storage/images/cn/panel/side-panel-bottom-drc/side-panel-bottom-drc_20240621_172134.png)

### 面板下单 - 自动检查DRC

进行面板下单，同样需要导出面板制造文件，只是会自动跳转到下单页。
所以操作面板下单同样会自动进行一次设计规则检查，相关规则同理面板导出。

### 导出DRC、清空DRC

右侧可以点击导出按钮，将面板的设计规则检查结果导出为txt文件。

也可以点击清空按钮，清空输出的DRC错误信息。实际每次进行设计规则检查时会将上一次的输出清空。

![图 14](/storage/images/cn/panel/side-panel-bottom-drc/side-panel-bottom-drc_20240621_172135.png)

### 面板的设计规则

面板的设计规则同样也分为"致命错误"、"错误"、"警告"、"消息"这几个等级。

**致命错误**

目前面板只有1条设计规则等级为致命错误，即"需要有板框层"。
当实际面板中，没有绘制板框层的对象，那么检查DRC时就会输出对应的报错。
![图 15](/storage/images/cn/panel/side-panel-bottom-drc/side-panel-bottom-drc_20240621_172136.png)

**错误**

目前面板只有1条设计规则等级为错误，即"需要有打印层"。
当实际面板中，没有绘制打印层的对象，那么检查DRC时就会输出对应的报错。
![图 16](/storage/images/cn/panel/side-panel-bottom-drc/side-panel-bottom-drc_20240621_172137.png)

**警告**

目前面板总共有3条设计规则等级为警告，分别为："禁止在材料边界框四个顶角矩形内绘制对象"、"板框层对象间距不应小于2mm"、"仅辅助绘制层或板框层的对象允许独立存在于板框外"
当实际面板中

-   在红色材料边界框四个顶角矩形内绘制了对象，2D预览可见遮盖了材料框的4顶角时，那么检查DRC时就会输出对应的报错。
    ![图 17](/storage/images/cn/panel/side-panel-bottom-drc/side-panel-bottom-drc_20240621_172138.png)

-   绘制的板框层对象间距小于2mm时，那么检查DRC时就会输出对应的报错。
    ![图 18](/storage/images/cn/panel/side-panel-bottom-drc/side-panel-bottom-drc_20240621_172140.png)

-   绘制了非辅助绘制层或板框层的对象在板框图元之外时，那么检查DRC时就会输出对应的报错。
    ![图 19](/storage/images/cn/panel/side-panel-bottom-drc/side-panel-bottom-drc_20240621_172141.png)

**消息**

目前面板总共有4条设计规则等级为消息，分别为："需要有挖孔层"、"需要有透明控制层"、"需要有背胶挖空层"、"需要有仿真灯光层"

这些都是建议绘制的图层对象，实际面板中不需要可以不绘制，忽略对应的DRC消息提示即可。
![图 20](/storage/images/cn/panel/side-panel-bottom-drc/side-panel-bottom-drc_20240621_172142.png)
