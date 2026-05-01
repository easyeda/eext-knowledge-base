---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Workspace](./pro-api.dmt_workspace.md) &gt; [getCurrentWorkspaceInfo](./pro-api.dmt_workspace.getcurrentworkspaceinfo.md)

# DMT\_Workspace.getCurrentWorkspaceInfo() method

获取当前工作区的详细属性

## 签名

```typescript
getCurrentWorkspaceInfo(): Promise<IDMT_WorkspaceItem | undefined>;
```

## 返回值

Promise&lt;[IDMT\_WorkspaceItem](./pro-api.idmt_workspaceitem.md) \| undefined&gt;

工作区的详细属性，如若为 `undefined` 则获取失败

## 备注

将会获取当前工作区的详细属性
