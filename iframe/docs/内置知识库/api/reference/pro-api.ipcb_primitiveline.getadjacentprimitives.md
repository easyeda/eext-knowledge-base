---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [IPCB\_PrimitiveLine](./pro-api.ipcb_primitiveline.md) &gt; [getAdjacentPrimitives](./pro-api.ipcb_primitiveline.getadjacentprimitives.md)

# IPCB\_PrimitiveLine.getAdjacentPrimitives() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取相邻的图元对象

## 签名

```typescript
getAdjacentPrimitives(): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveVia | IPCB_PrimitiveArc>>;
```

## 返回值

Promise&lt;Array&lt;[IPCB\_PrimitiveLine](./pro-api.ipcb_primitiveline.md) \| [IPCB\_PrimitiveVia](./pro-api.ipcb_primitivevia.md) \| [IPCB\_PrimitiveArc](./pro-api.ipcb_primitivearc.md)<!-- -->&gt;&gt;

相邻的直线、过孔、圆弧线图元对象

## 备注

将会获取与直线两端直接相连的直线、过孔、圆弧线图元对象
