---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Panel](./pro-api.dmt_panel.md) &gt; [getCurrentPanelInfo](./pro-api.dmt_panel.getcurrentpanelinfo.md)

# DMT\_Panel.getCurrentPanelInfo() method

获取当前面板的详细属性

## 签名

```typescript
getCurrentPanelInfo(): Promise<IDMT_PanelItem | undefined>;
```

## 返回值

Promise&lt;[IDMT\_PanelItem](./pro-api.idmt_panelitem.md) \| undefined&gt;

面板的详细属性，如若为 `undefined` 则获取失败

## 备注

将会获取当前打开且拥有最后输入焦点的面板的详细属性
