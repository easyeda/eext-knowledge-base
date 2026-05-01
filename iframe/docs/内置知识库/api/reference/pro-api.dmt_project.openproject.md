---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Project](./pro-api.dmt_project.md) &gt; [openProject](./pro-api.dmt_project.openproject.md)

# DMT\_Project.openProject() method

打开工程

## 签名

```typescript
openProject(projectUuid: string): Promise<boolean>;
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
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

是否成功打开工程

## 备注

本操作将会在 EDA 前端打开指定工程，如若原先已打开其它工程且有未保存的变更，执行本操作将直接丢失所有未保存的数据
