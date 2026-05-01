# 器件列表

器件列表在编辑器的底部面板中，快捷键<kbd>F</kbd> 或<kbd>shift</kbd>+<kbd>F</kbd>打开显示器件库。器件列表中将系统器件、个人的创建器件、团队创建的器件以及收藏的器件都会在列表中显示。

![image-20211221171707626](/storage/images/cn/device/side-panel-bottom-library-device-list/side-panel-bottom-library-device-list_20240621_172123.png)

## 预览区域

在器件列表的右边是器件的的预览区域，点击上面的按钮可以把对应的预览图显示或者隐藏。

-   **S**： Symbol，符号图
-   **F**：Footprint，封装图
-   **P**： Product，产品图，上传的图片
-   **3D**： 3D Model，3D 模型图

![image-20211221171241957](/storage/images/cn/device/side-panel-bottom-library-device-list/side-panel-bottom-library-device-list_20240621_172124.png)

## 列表表头

器件库列表是可以由用户自行自定义表头的。把鼠标放置在表头上<kbd>鼠标右键</kbd>选择自定义表头，

![图 0](/storage/images/cn/device/side-panel-bottom-library-device-list/side-panel-bottom-library-device-list_20240621_172125.png)

左侧是未添加到表头里面的属性，右侧是已添加到列表表头的属性。设置好的自定义的表头参数会保存到个人偏好中。

![image-20211221172629893](/storage/images/cn/device/side-panel-bottom-library-device-list/side-panel-bottom-library-device-list_20240621_172126.png)

**调整列宽**

-   在表头右键菜单中还有适应列宽、适应全部列宽、适应窗口3个功能用于调整列表的列宽度。

-   适应列宽：右键焦点列将根据该列内最长的值适应该值的宽度。

-   适应全部列宽：整个表格每一列都根据每一列内最长的属性值进行适应列宽。

-   适应窗口：根据窗口宽度调整列表内所有列的列宽，使得列宽保持原有比例，并且不会出现横向滚动条。

**注意**：

-   只有当前列表有对应的参数名出现时才会出现对应的列名。比如阻值列，如果当前列表的器件没有这个阻值属性，则阻值列不会显示在列表中。

## 参数过滤排序

当在系统的器件库时，点击具体的一级或者二级分类，可以进行参数选项。

**说明**：过滤排序功能只能在一级或二级分类目录下选择器件才能使用。

![image-20211221172853658](/storage/images/cn/device/side-panel-bottom-library-device-list/side-panel-bottom-library-device-list_20240621_172127.png)

点击顶部的“**过滤**”按钮可以选择需要过滤的参数名称，点击参数值输入框可以过滤具体的值，和直接在立创商城选型基本类似。

![image-20211221172954368](/storage/images/cn/device/side-panel-bottom-library-device-list/side-panel-bottom-library-device-list_20240621_172128.png)

点击表头的排序图标可以进行排序：默认，增序，倒序

![image-20211221173023942](/storage/images/cn/device/side-panel-bottom-library-device-list/side-panel-bottom-library-device-list_20240621_172129.png)

## 右键菜单

因为权限不同，所以不同归属的器件右键菜单会有所不同。没有编辑权限的库不会显示编辑菜单，可以另存后进行编辑。

设置-系统-通用设置中，符号库管理选项也会影响菜单的展示，选择简易模式时不会显示符号相关菜单。

![图 0](/storage/images/en/device/side-panel-bottom-library-device-list/side-panel-bottom-library-device-list_20240621_172129.png)

### 刷新

刷新当前器件列表。

### 编辑器件

编辑器件操作结果会受设置-系统-通用设置中的符号库管理选项影响。

-   简易模式下，点击编辑器件会打开符号编辑器并打开该器件所关联的符号，左侧属性显示器件属性，符号属性会隐藏，编辑保存后会同时保存符号和器件。如果器件未关联符号则会自动创建一个符号并打开。
    ![图 1](/storage/images/en/device/side-panel-bottom-library-device-list/side-panel-bottom-library-device-list_20240621_172130.png)

-   专业模式下，点击编辑器件会打开编辑器件弹窗，显示器件属性，如需编辑符号，需要右键操作编辑符号。
    ![图 2](/storage/images/en/device/side-panel-bottom-library-device-list/side-panel-bottom-library-device-list_20240621_172131.png)

### 编辑符号

只有设置-系统-通用设置中的符号库管理选项为专业模式时才会显示。

操作后会打开符号编辑器，左侧属性显示符号+器件属性，编辑保存会同时保存符号和器件。
![图 3](/storage/images/en/device/side-panel-bottom-library-device-list/side-panel-bottom-library-device-list_20240621_172132.png)

### 编辑封装

操作后会打开封装编辑器。

![图 4](/storage/images/en/device/side-panel-bottom-library-device-list/side-panel-bottom-library-device-list_20240621_172133.png)

### 删除

操作后，会弹出删除确认弹窗，需要勾选“我已知悉，继续删除。”删除按钮才能操作，确认后则会删除所选内容，删除后不可恢复。

如果删除的器件有关联符号或封装，则在弹窗中会显示出关联项，方便用户同时删除关联项。

如果符号或封装被其他器件复用，则其他器件也会丢失关联的符号或封装，所以关联的符号和封装被复用时，同时删除关联项需要谨慎操作。

![图 5](/storage/images/en/device/side-panel-bottom-library-device-list/side-panel-bottom-library-device-list_20240621_172134.png)

### 另存为

操作后会将所选器件另存。

设置-系统-通用设置中的符号库管理选项为简易模式时，另存为弹窗是简易模式的器件弹窗。
![图 7](/storage/images/en/device/side-panel-bottom-library-device-list/side-panel-bottom-library-device-list_20240621_172135.png)

设置-系统-通用设置中的符号库管理选项为专业模式时，另存为弹窗是完整模式的器件弹窗。
![图 6](/storage/images/en/device/side-panel-bottom-library-device-list/side-panel-bottom-library-device-list_20240621_172136.png)

### 符号另存为

只有设置-系统-通用设置中的符号库管理选项为专业模式时才会显示。

如果当前器件未关联符号，则不会显示这个菜单。

操作后会将所选器件关联的符号进行另存，确认后会打开另存的符号。

![图 8](/storage/images/en/device/side-panel-bottom-library-device-list/side-panel-bottom-library-device-list_20240621_172137.png)

### 封装另存为

如果当前器件未关联封装，则不会显示这个菜单。

操作后会将所选器件关联的封装进行另存，确认后会打开另存的封装。

![图 9](/storage/images/en/device/side-panel-bottom-library-device-list/side-panel-bottom-library-device-list_20240621_172138.png)

### 另存为本地

操作后会将所选器件下载到本地，后续可以通过顶部菜单-文件-导入-专业版进行导入。

### 3D模型另存为

如果当前器件为3D模型，则不会显示这个菜单。

操作后会将所选器件关联的3D模型进行另存。

![图 10](/storage/images/en/device/side-panel-bottom-library-device-list/side-panel-bottom-library-device-list_20240621_172139.png)

### 查看产品详情

操作后会打开立创商城搜索该器件，如果所选器件有供应商编号，则会按照供应商编号进行搜索，没有则按器件名称搜索。

### 查看规格书

如果所选器件有添加数据手册属性，则操作后会新建页打开数据手册字段所填写的链接。如果没有添加数据手册属性或属性值为空，则会打开立创商城搜索该器件。

### 添加收藏/取消收藏

操作后会将所选器件加入收藏库或移出收藏库。收藏库可以选择归属列表中的“收藏”进行查看。

![图 11](/storage/images/en/device/side-panel-bottom-library-device-list/side-panel-bottom-library-device-list_20240621_172140.png)

### 加入常用库/移出常用库

操作后会将所选器件加入常用库或移出常用库。常用库可以在左侧-常用库面板查看放置，在设置-系统-常用库中进行管理。

**说明**

修改完成器件后，如果列表没有及时更新，可以需要点击器件库<kbd>刷新</kbd> 按钮后看到最新修改的信息。

![image-20211221170640081](/storage/images/en/device/side-panel-bottom-library-device-list/side-panel-bottom-library-device-list_20240621_172141.png)

### 重建搜索索引

在客户端全离线模式下，当大批量自动创建索引出现错误时，用户可以通过手动重建搜索索引来修复数据库。

![图 0](/storage/images/cn/device/side-panel-bottom-library-device-list/side-panel-bottom-library-device-list_20241227_153410.jpg)
