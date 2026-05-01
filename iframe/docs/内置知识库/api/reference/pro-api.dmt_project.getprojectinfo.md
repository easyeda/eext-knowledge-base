---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Project](./pro-api.dmt_project.md) &gt; [getProjectInfo](./pro-api.dmt_project.getprojectinfo.md)

# DMT\_Project.getProjectInfo() method

获取工程属性

## 签名

```typescript
getProjectInfo(projectUuid: string): Promise<IDMT_BriefProjectItem | undefined>;
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

Promise&lt;[IDMT\_BriefProjectItem](./pro-api.idmt_briefprojectitem.md) \| undefined&gt;

简略的工程属性，如若为 `undefined` 则获取失败

## 备注

本接口只能读取简略的工程属性，如需详细的工程树，请使用 [getCurrentProjectInfo](./pro-api.dmt_project.getcurrentprojectinfo.md) 接口
