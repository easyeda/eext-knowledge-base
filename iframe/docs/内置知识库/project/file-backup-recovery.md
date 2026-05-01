# 创建/切换工程版本

## 自动创建版本

把工程备份到我们嘉立创EDA专业版的云端，备份可分为自动备份和手动备份两种。

自动备份需要在设置中先打开，勾选启用，即可开启自动备份，自动备份的备份次数最多为10份，超出10分会把旧的备份给覆盖。

自动备份的时间可设置为10-120分钟。

![image-20211227133348395](/storage/images/en/project/file-backup-recovery/file-backup-recovery_20240621_172123.png)

也可以在本地查找
![图 0](/storage/images/cn/project/file-backup-recovery/file-backup-recovery_20241128_153001.png)

## 手动创建版本

自动备份则需要手动的将工程备份到服务器中，手动备份的数量最多只能为15份。

**操作步骤**：

-   顶部菜单 - 文件 - 创建版本

![图 28](/storage/images/en/project/file-backup-recovery/file-backup-recovery_20240621_172124.png)

在弹窗中输入名称以及描述，点击确定即可备份在云端。

![image-20210107154242765](/storage/images/en/project/file-backup-recovery/file-backup-recovery_20240621_172125.png)

## 切换版本

目前嘉立创EDA专业版暂不支持直接在工程上切换版本，目前的切换版本是以新建工程的方式实现。

## 把在云端或之前设计的工程恢复

创建方法：

-   部菜单栏 - 文件 - 切换版本

弹窗中显示的是自动备份和手动备份的工程、创建时间和描述。

![image-20210107154835529](/storage/images/en/project/file-backup-recovery/file-backup-recovery_20240621_172126.png)

选择需要恢复的工程文件，点击恢复，即可把备份的工程重新导入到编辑器中，导入备份的工程与原工程不会冲突。

![image-20210107154927298](/storage/images/en/project/file-backup-recovery/file-backup-recovery_20240621_172127.png)

## 备份管理

在工作区打开工程详情页面，也可以看到工程的备份列表：

![图 14](/storage/images/en/project/file-backup-recovery/file-backup-recovery_20240621_172128.png)

可以进行删除操作。
