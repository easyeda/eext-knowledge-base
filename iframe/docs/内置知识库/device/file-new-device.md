# 创建器件

嘉立创EDA专业创建器件的逻辑顺序为：器件 = 符号 + 封装 + 3D模型

## 新建器件

-   顶部菜单 - 新建 - 器件或元件库 - 符号 - <kbd>鼠标右键</kbd> - 关联到新器件

符号管理简易模式时：
![](/storage/images/cn/device/file-new-device/file-new-device_20240621_172123.jpg)

符号管理专业模式时：
![image-20211221173328642](/storage/images/cn/device/file-new-device/file-new-device_20240621_172124.png)

点击创建后弹出器件属性弹窗，这里填写器件的具体属性。

-   **归属**：器件归属用户或团队。
-   **名称**：器件的名称。
-   **符号**：点击可对器件绑定符合。
-   **封装**：点击对器件绑定封装。
-   **3D模型**：点击可选择对器件绑定模型。
-   **图片**：点击可对其器件绑定一个实物图片。
-   **分类**：点击可对当前绑定的器件进行一个分类。
-   **描述**：器件的描述。

![image-20210518134652246](/storage/images/cn/device/file-new-device/file-new-device_20240621_172125.png)

### 添加符号

点击符号的复选框或底下预览区，给器件添加符号库。

![image-20210518135751188](/storage/images/cn/device/file-new-device/file-new-device_20240621_172126.png)

点击后弹出弹窗，找到需要绑定器件的符号，点击确定，即可完成符号的绑定。

![image-20210518135845910](/storage/images/cn/device/file-new-device/file-new-device_20240621_172127.png)

![image-20210518135944633](/storage/images/cn/device/file-new-device/file-new-device_20240621_172128.png)

### 添加封装

点击封装复选框或封装的预览区。

![image-20210518140221959](/storage/images/cn/device/file-new-device/file-new-device_20240621_172129.png)

点击后弹出弹窗，这里可以找到用户创建的封装库和系统自带的封装库,找到相应的封装，点击更新，即可添加到器件库里。

![image-20210518140533986](/storage/images/cn/device/file-new-device/file-new-device_20240621_172130.png)

![image-20210518140629660](/storage/images/cn/device/file-new-device/file-new-device_20240621_172131.png)

### 添加3D模型

点击3D模型复选框或3D预览区，找到相应的3D模型，将模型调整好位置后点击更新即完成添加3D模型。

![image-20210518141939530](/storage/images/cn/device/file-new-device/file-new-device_20240621_172132.png)

![image-20210518142323577](/storage/images/cn/device/file-new-device/file-new-device_20240621_172133.png)

![image-20210518142435074](/storage/images/cn/device/file-new-device/file-new-device_20240621_172134.png)

### 添加图片

点击图片的复选框或图片预览区。

![image-20210518142617288](/storage/images/cn/device/file-new-device/file-new-device_20240621_172135.png)

弹出弹窗后点击“+”选择需要添加的图片,只支持图片格式的文件，不支持图片链接。

![image-20210518142652094](/storage/images/cn/device/file-new-device/file-new-device_20240621_172136.png)

选择完图片后可在弹窗内查看到图片的预览，点击上传，上传完成后点击确认，即可把图片添加到器件里。

![image-20210518142740623](/storage/images/cn/device/file-new-device/file-new-device_20240621_172137.png)

添加完成后在属性弹窗的预览。

![image-20210518142802777](/storage/images/cn/device/file-new-device/file-new-device_20240621_172138.png)

### 添加分类

对器件进行分类设置，方便管理和维护。

点击分类的的复选框

![image-20210518142943049](/storage/images/cn/device/file-new-device/file-new-device_20240621_172139.png)

选择相应的属性，点击确定即可添加到相应的分类目录下。

![image-20210518143009828](/storage/images/cn/device/file-new-device/file-new-device_20240621_172140.png)

### 添加属性

添加器件的属性，选择需要添加的属性，即可添加进入器件。

![image-20210518143039096](/storage/images/cn/device/file-new-device/file-new-device_20240621_172141.png)

添加完符号、封装和相应的属性之后点击确定，即可完成器件的创建。

![image-20210518143053979](/storage/images/cn/device/file-new-device/file-new-device_20240621_172142.png)

创建完成的器件会在底部面板的器件元件库列表中可以查看到。

嘉立创EDA支持多个链接属性的添加，添加后可以点击属性面板处直接打开链接，链接属性分别有：链接Link，产品链接Product Link，网址URL，数据手册Datasheet。
![图 0](/storage/images/cn/device/file-new-device/file-new-device_20240927_115416.png)

## 批量新建器件

支持通过一个xlsx表格进行批量创建器件库，这个功能可以非常方便进行大批量数据导入并且支持自动处理重名符号库。

入口：顶部菜单 - 文件 - 新建 - 元件，或开始页 - 快速开始 - 新建器件，在新建器件弹窗左下角，点击批量创建。

![picture 0](/storage/images/cn/device/file-new-device/file-new-device_20240621_172143.jpg)

使用方法：

1、打开批量创建器件弹窗后，点击导出模板按钮，下载模板

![picture 1](/storage/images/cn/device/file-new-device/file-new-device_20240621_172144.jpg)

2、打开导出的模板文件xlsx，根据里面的例子添加对应的器件名称，关联的符号，封装，3D模型，还有其他一些属性参数等

![picture 2](/storage/images/en/device/file-new-device/file-new-device_20240621_172148.jpg)

3、编辑完成后，在对话框加载，并且选择要导入的所有者。如果你的库所有者里面没有创建好表格关联需要的符号库和封装库，可以勾选自动创建不存在的符号和封装，将会自动创建同名空白的库，方便后续快速编辑。

![picture 3](/storage/images/cn/device/file-new-device/file-new-device_20240621_172145.jpg)

4、点击确认按钮会自动开始批量创建器件库。等创建完成后在底部库列表可以找到。自动创建的器件会根据表格设置的一级分类和二级分类自动创建不存在的分类名，并自动关联对应的器件。

**注意**：

-   1、请根据表格模板文件编辑好后再导入。
-   2、请先在对应的所有者库别中创建好符号/封装/3D模型库，批量创建器件时，将根据同名的符号/封装/3D模型库名进行自动关联绑定。
-   3、模板文件的 Device 列为必填项，内容不允许重复。列表头名不能出现字符 “.” 和 “$”。
-   4、建议每次导入不超过2000器件。
