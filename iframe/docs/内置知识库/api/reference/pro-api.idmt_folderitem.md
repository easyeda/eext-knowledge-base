[Home](./pro-api.md) &gt; [IDMT\_FolderItem](./pro-api.idmt_folderitem.md)

# IDMT\_FolderItem interface

文件夹属性

## 签名

```typescript
interface IDMT_FolderItem
```

## 属性

<table><thead><tr><th>

属性名

</th><th>

修饰符

</th><th>

类型

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

[childrenFoldersUuid?](./pro-api.idmt_folderitem.childrenfoldersuuid.md)

</td><td>

</td><td>

Array&lt;string&gt;

</td><td>

_（可选）_ 子文件夹 UUID 列表

</td></tr>
<tr><td>

[description?](./pro-api.idmt_folderitem.description.md)

</td><td>

</td><td>

string

</td><td>

_（可选）_ 文件夹描述

</td></tr>
<tr><td>

[itemType](./pro-api.idmt_folderitem.itemtype.md)

</td><td>

`readonly`

</td><td>

[EDMT\_ItemType.FOLDER](./pro-api.edmt_itemtype.md)

</td><td>

项目类型

</td></tr>
<tr><td>

[name](./pro-api.idmt_folderitem.name.md)

</td><td>

</td><td>

string

</td><td>

文件夹名称

</td></tr>
<tr><td>

[parentFolderUuid](./pro-api.idmt_folderitem.parentfolderuuid.md)

</td><td>

</td><td>

string

</td><td>

父文件夹 UUID

</td></tr>
<tr><td>

[teamUuid](./pro-api.idmt_folderitem.teamuuid.md)

</td><td>

</td><td>

string

</td><td>

所属团队 UUID

</td></tr>
<tr><td>

[uuid](./pro-api.idmt_folderitem.uuid.md)

</td><td>

</td><td>

string

</td><td>

文件夹 UUID

</td></tr>
</tbody></table>
