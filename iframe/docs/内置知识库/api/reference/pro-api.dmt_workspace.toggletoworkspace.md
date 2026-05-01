---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Workspace](./pro-api.dmt_workspace.md) &gt; [toggleToWorkspace](./pro-api.dmt_workspace.toggletoworkspace.md)

# DMT\_Workspace.toggleToWorkspace() method

切换到工作区

## 签名

```typescript
toggleToWorkspace(workspaceUuid?: string): Promise<boolean>;
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

workspaceUuid

</td><td>

string

</td><td>

_（可选）_ 工作区 UUID，如若不指定，则将切换到个人工作区

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

切换操作是否成功
