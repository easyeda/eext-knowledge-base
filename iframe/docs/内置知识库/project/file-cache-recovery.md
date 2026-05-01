# 缓存恢复

嘉立创EDA专业版提供了一个缓存恢复功能，可以很方便对误删或者编辑器奔溃等情况，进行工程恢复。

入口：顶部菜单 - 文件 - 缓存恢复。

![图 208](/storage/images/en/project/file-cache-recovery/file-cache-recovery_20240621_172123.png)

每个文档打开后都可以在文件菜单下打开缓存恢复。

![图 209](/storage/images/en/project/file-cache-recovery/file-cache-recovery_20240621_172124.png)

选择恢复后，会走导入工程逻辑，选择新建工程保存即可。

![图 210](/storage/images/en/project/file-cache-recovery/file-cache-recovery_20240621_172125.png)

你还可以把历史记录导出到本地，会作为一个工程压缩包导出。如果不需要保留，可以移除历史记录。
![图 0](/storage/images/cn/project/file-cache-recovery/file-cache-recovery_20241128_153215.png)
也可以在本地里面找回备份
![图 1](/storage/images/cn/project/file-cache-recovery/file-cache-recovery_20241128_153352.png)

**提示**：

-   有编辑权限的工程打开后都会进入缓存恢复，没有数量限制；每个工程的历史记录只会记录最近 15 次(当天的最近的9次，最近6天的则保存最后1次)，超出部分会自动移除旧的记录。
-   缓存恢复是以每 5 分钟一次，把当前的工程状态缓存到本地缓存，如果清理了本地缓存数据会把这个缓存恢复也会清空。
