---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [IPCB\_PrimitiveComponent](./pro-api.ipcb_primitivecomponent.md) &gt; [getAllPins](./pro-api.ipcb_primitivecomponent.getallpins.md)

# IPCB\_PrimitiveComponent.getAllPins() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取器件关联的所有焊盘

## 签名

```typescript
getAllPins(): Promise<Array<IPCB_PrimitiveComponentPad>>;
```

## 返回值

Promise&lt;Array&lt;[IPCB\_PrimitiveComponentPad](./pro-api.ipcb_primitivecomponentpad.md)<!-- -->&gt;&gt;

器件焊盘图元数组
