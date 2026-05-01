# 版本控制

嘉立创EDA支持工程版本控制功能，用户可以在当前工程新建分支和节点，帮助工程师高效处理设计迭代、方案验证及团队协作场景。通过分支和节点管理，可同时维护量产版本、实验版本及定制版本。

## 应用场景

- **设计安全**：保留关键节点（如DRC验证通过的PCB布局），避免误修改
- **并行开发**：在独立分支测试新器件（如替换高速接口的FPGA型号）
- **版本追溯**：快速回溯到任一历史状态（如量产前的最终原理图）
- **团队协同**：成员可在不同分支独立优化布局或电路

## 功能入口

【专业版编辑器】-【顶部菜单栏】-【文件】-【版本控制】

![图 0](/storage/images/cn/project/file-version-control/version-control_20250305_135113.jpg)

【工作区】-【工程】-【版本】

![图 17](/storage/images/cn/project/file-version-control/version-control_20250305_152010.jpg)

## 使用方法

在编辑器打开版本管理列表，可以查看版本树，包含版本名称、创建者、创建时间、描述、最近更新者、更新时间等信息。支持在版本管理列表搜索、打开、创建、修改和删除版本操作。

### **起点**

所有版本的初始点（`start`），标识符为实心十字，自工程创建时即存在，不可删除。

![图 2](/storage/images/cn/project/file-version-control/version-control_20250305_141448.jpg)

### **默认编辑分支**

默认编辑分支是打开工程时默认打开的可编辑版本，标识符为空心五角星，默认名称为 `main`，支持修改和替换。

![图 3](/storage/images/cn/project/file-version-control/version-control_20250305_142220.jpg)

### **节点**

节点表示工程的一个保存版本，用于线性记录修改。

![图 1](/storage/images/cn/project/file-version-control/version-control_20250305_140810.jpg)

当工程需要记录当前版本状态时，可以在版本管理列表单击分支右侧的创建节点图标创建节点。

![图 4](/storage/images/cn/project/file-version-control/version-control_20250305_142406.jpg)

输入节点名称和描述。节点名称只能由字母、数字、点组成。

![图 5](/storage/images/cn/project/file-version-control/version-control_20250305_142455.jpg)

点击 `确定` 后，将在版本树的该分支下新建一个节点，节点以实心圆标识，并支持在新窗口打开、创建分支、编辑名称、编辑描述以及删除操作。

![图 6](/storage/images/cn/project/file-version-control/version-control_20250305_142958.jpg)

节点支持在新窗口中打开并查看，但不支持编辑。左侧文档树中会在工程名旁显示当前打开的节点名称。

![图 7](/storage/images/cn/project/file-version-control/version-control_20250305_143112.jpg)

### **分支**

分支用于并行开发不同功能或进行迭代，允许独立于主分支进行修改。当工程需要进行重大变更和迭代时，用户可以在节点处创建分支，在不同的分支中分别维护工程版本。

![图 8](/storage/images/cn/project/file-version-control/version-control_20250305_143600.jpg)

单击创建分支图标创建分支，编辑分支名称和描述后单击确认。

![图 9](/storage/images/cn/project/file-version-control/version-control_20250305_144103.jpg)

分支创建成功后，将以不同颜色的空心圆标识显示在版本树中。

![图 10](/storage/images/cn/project/file-version-control/version-control_20250305_144504.jpg)

版本树中的节点和分支支持右键打开操作弹窗。

![图 11](/storage/images/cn/project/file-version-control/version-control_20250305_144641.jpg)

在分支右键弹窗中，用户可以选择`设为默认编辑分支`，点击后会将当前分支设置为默认编辑分支。

![图 12](/storage/images/cn/project/file-version-control/version-control_20250305_145004.gif)

### **搜索版本**

版本管理中支持通过搜索框查找特定的版本名称。

![图 13](/storage/images/cn/project/file-version-control/version-control_20250305_145247.jpg)

### **版本控制**

在版本控制列表中，用户可以快捷创建分支和节点。

![图 14](/storage/images/cn/project/file-version-control/version-control_20250305_151337.jpg)

当快捷创建分支时，如果当前版本为分支，则需先创建一个新节点。

![图 15](/storage/images/cn/project/file-version-control/version-control_20250305_151607.jpg)

版本控制中支持快捷切换最近打开过的节点和分支。

![图 16](/storage/images/cn/project/file-version-control/version-control_20250305_151725.jpg)
