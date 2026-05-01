---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Project](./pro-api.dmt_project.md) &gt; [getAllProjectsUuid](./pro-api.dmt_project.getallprojectsuuid.md)

# DMT\_Project.getAllProjectsUuid() method

获取所有工程的 UUID

## 签名

```typescript
getAllProjectsUuid(teamUuid?: string, folderUuid?: string, workspaceUuid?: string): Promise<Array<string>>;
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

_（可选）_ 团队 UUID

</td></tr>
<tr><td>

folderUuid

</td><td>

string

</td><td>

_（可选）_ 文件夹 UUID，如若不指定，则默认为团队的根文件夹

</td></tr>
<tr><td>

workspaceUuid

</td><td>

string

</td><td>

_（可选）_ 工作区 UUID

</td></tr>
</tbody></table>

## 返回值

Promise&lt;Array&lt;string&gt;&gt;

工程 UUID 数组

## 备注

如若指定 `teamUuid`<!-- -->，则获取指定团队下的所有工程；

如若指定 `folderUuid`<!-- -->，则获取指定文件夹下的所有工程；

`teamUuid`<!-- -->、`folderUuid` 需要且仅允许指定其一，如若都指定则只取 `folderUuid`<!-- -->；

如若指定 `workspaceUuid`<!-- -->，则在指定 Workspace 下获取指定团队/文件夹下的所有工程
