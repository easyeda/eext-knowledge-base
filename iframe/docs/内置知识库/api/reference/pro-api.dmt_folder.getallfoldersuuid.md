---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Folder](./pro-api.dmt_folder.md) &gt; [getAllFoldersUuid](./pro-api.dmt_folder.getallfoldersuuid.md)

# DMT\_Folder.getAllFoldersUuid() method

获取所有文件夹的 UUID

## 签名

```typescript
getAllFoldersUuid(teamUuid: string): Promise<Array<string>>;
```

## 参数名

<table><thead><tr><th>

参数

</th><th>

类型

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

teamUuid

</td><td>

string

</td><td>

团队 UUID

</td></tr>
</tbody></table>

## 返回值

Promise&lt;Array&lt;string&gt;&gt;

文件夹 UUID 数组

## 备注

本接口忽略层级信息，将会返回所有层级的文件夹的 UUID 并放置于一维数组中
