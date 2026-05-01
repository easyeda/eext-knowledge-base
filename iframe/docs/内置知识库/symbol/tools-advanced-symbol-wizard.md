# 高级符号向导

高级符号向导器用于快速创建IC类型芯片的符号，高级符号向导器对符号的类型没有区分，只需要用户在模板中填写相应的数据，系统就能按照填写的数据生成符号。

操作步骤：顶部菜单 - 工具 - 高级符号向导

![图 57](/storage/images/cn/symbol/tools-advanced-symbol-wizard/tools-advanced-symbol-wizard_20240621_172124.png)

操作后会弹出高级符号向导弹窗，根据画布已有引脚信息填入表格，如果画布没有引脚，则会显示几条默认数据。

![图 0](/storage/images/cn/symbol/tools-advanced-symbol-wizard/tools-advanced-symbol-wizard_20240621_172125.png)

在弹窗中可以导出模板，使用“office”“WPS”打开模板进行编辑。

![图 1](/storage/images/cn/symbol/tools-advanced-symbol-wizard/tools-advanced-symbol-wizard_20240621_172126.png)

-   **Part（部件）**：部件名。代表符号的子库图页，不是引脚的编号；相同的部件的引脚则会摆放在一起，支持同时创建多个部件的符号。
-   **Side（方向）**：引脚的方向，L代表左边，T代表上边，R代表右边，B是下边；
-   **Order（序号）**：确定引脚在不同方向上的位置关系；
-   **Pin Name（引脚名称）**：引脚的名称；
-   **Pin Type（引脚类型）**：设置引脚的类型：
    输入（IN）、
    输出（OUT）、
    双向（BI）、
    无源（Passive）、
    开集电集（Open Collector）、
    开发射集（Open Emitter）、
    电源（Power）、
    地（Ground）、
    高阻（HIZ）、
    信号终端（Terminator）、
    无定义（Undefined）
    ；
-   **Pin Number（引脚编号）**：引脚的编号；
-   **Pin Shape（引脚形状）**：引脚的附加形状：
    无（None）、
    反相（Inverted）、
    时钟（Clock）、
    反相时钟（Inverted Clock）

举个例子：MAX232CPE+

![图 60](/storage/images/en/symbol/tools-advanced-symbol-wizard/tools-advanced-symbol-wizard_20240621_172126.png)

在模板填好引脚信息后

![图 61](/storage/images/en/symbol/tools-advanced-symbol-wizard/tools-advanced-symbol-wizard_20240621_172127.png)

打开高级符号向导，导入表格

![图 62](/storage/images/cn/symbol/tools-advanced-symbol-wizard/tools-advanced-symbol-wizard_20240621_172127.png)

点击确定完成符号创建。

如果你分别设置了不同部件名，

![图 64](/storage/images/en/symbol/tools-advanced-symbol-wizard/tools-advanced-symbol-wizard_20240621_172129.png)

再导入会创建多个部件

![图 63](/storage/images/cn/symbol/tools-advanced-symbol-wizard/tools-advanced-symbol-wizard_20240621_172128.png)

在左侧的部件tab可以分别切换查看编辑不同的部件

![图 65](/storage/images/cn/symbol/tools-advanced-symbol-wizard/tools-advanced-symbol-wizard_20240621_172129.png)
