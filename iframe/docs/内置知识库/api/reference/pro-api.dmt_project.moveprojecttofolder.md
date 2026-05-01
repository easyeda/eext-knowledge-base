---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Project](./pro-api.dmt_project.md) &gt; [moveProjectToFolder](./pro-api.dmt_project.moveprojecttofolder.md)

# DMT\_Project.moveProjectToFolder() method

移动工程到文件夹

## 签名

```typescript
moveProjectToFolder(projectUuid: string, folderUuid?: string): Promise<boolean>;
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

projectUuid

</td><td>

string

</td><td>

工程 UUID

</td></tr>
<tr><td>

folderUuid

</td><td>

string

</td><td>

_（可选）_ 文件夹 UUID，只能为当前工程所在团队或个人下的文件夹，如若为 `undefined` 则移动到当前团队的根文件夹

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

是否移动成功
