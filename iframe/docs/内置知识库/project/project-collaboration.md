# 工程协作

## 工程成员管理

在工作区打开工程设置页，可以添加工程成员，并设置对应的权限，工程成员即可对工程进行读写等操作。

![图 5](/storage/images/en/project/project-collaboration/project-collaboration_20240621_172123.png)

通过输入对方用户名进行添加。

![图 6](/storage/images/en/project/project-collaboration/project-collaboration_20240621_172124.png)

如果不需要对方参与，将其移除成员即可。

注意：当工程进行团队协作时，不能多人同时编辑同一个文档，需要分别编辑不同文档，否则保存会相互覆盖。

## 角色权限

-   **工程负责人**：拥有工程管理所有权限。
-   **管理者**：可以对工程信息进行编辑，添加或移除成员，删除工程，删除文档等。
-   **开发者**：可以对文档进行创建与编辑保存。
-   **观察者**：可以对文档打开查看。目前观察者可以导出工程到本地和导出BOM等操作。
-   **自定义权限**：工程负责人可以创建自定义角色，给予角色对应的权限。

![图 0](/storage/images/cn/project/project-collaboration/project-collaboration_20240621_172124.png)

## 工程协作模式

提示：该功能暂提供给私有部署，公网版本暂未支持。

组织和团队层面可以预设工程的协作模式，如果预设为严格模式，则所属范围内的工程的协作模式均按照严格模式执行，如果预设为自由模式，则所属范围内的工程可以自定义协作模式。

新建工程时可以设置工程的协作模式。

-   自由模式：没有过多的限制，不需要签入签出操作即可编辑文档，多人编辑保存同一页会相互覆盖。

-   严格模式：需要签出获取编辑权限，不能多人同时签出同一页。

![图 1](/storage/images/cn/project/project-collaboration/project-collaboration_20240621_172125.png)

### 严格模式

在严格模式，需要编辑图页内容或属性时，协作者要签出对应图页才能编辑，编辑完成后需要签入图页，其他协作者才能操作签出后继续编辑。

在左侧-工程设计树上，会标注出图页的签出状态。

-   橘黄色的锁图标代表该页已被他人签出，无法编辑，鼠标悬浮在图标上会显示签出人信息。
-   绿色的铅笔图标代表该页被自己签出，可以编辑。

**操作**

-   可以在左侧-工程设计树中，右键签出、签入图页。

![图 2](/storage/images/cn/project/project-collaboration/project-collaboration_20240621_172126.jpg)

-   可以在图页上方提示语中操作签出。

![图 3](/storage/images/cn/project/project-collaboration/project-collaboration_20240621_172127.png)

-   可以在画布右键菜单中操作签出、签入图页。

![图 4](/storage/images/cn/project/project-collaboration/project-collaboration_20240621_172128.png)

工程所有者可以在工程设计树上清除签出，来收回图页的编辑权限。
