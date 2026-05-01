---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Panel](./pro-api.dmt_panel.md) &gt; [createPanel](./pro-api.dmt_panel.createpanel.md)

# DMT\_Panel.createPanel() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建面板

## 签名

```typescript
createPanel(): Promise<string | undefined>;
```

## 返回值

Promise&lt;string \| undefined&gt;

面板 UUID，如若为 `undefined` 则创建失败
