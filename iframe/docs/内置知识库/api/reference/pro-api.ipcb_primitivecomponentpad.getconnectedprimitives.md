---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [IPCB\_PrimitiveComponentPad](./pro-api.ipcb_primitivecomponentpad.md) &gt; [getConnectedPrimitives](./pro-api.ipcb_primitivecomponentpad.getconnectedprimitives.md)

# IPCB\_PrimitiveComponentPad.getConnectedPrimitives() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取连接的图元

## 签名

```typescript
getConnectedPrimitives(onlyCentreConnection: true): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc | IPCB_PrimitiveVia>>;
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

onlyCentreConnection

</td><td>

true

</td><td>

是否仅中心连接，如若为 `true` 则仅获取中心连接的图元（直线、圆弧线、过孔），如若为 `false` 则获取所有接触的图元

</td></tr>
</tbody></table>

## 返回值

Promise&lt;Array&lt;[IPCB\_PrimitiveLine](./pro-api.ipcb_primitiveline.md) \| [IPCB\_PrimitiveArc](./pro-api.ipcb_primitivearc.md) \| [IPCB\_PrimitiveVia](./pro-api.ipcb_primitivevia.md)<!-- -->&gt;&gt;

## 备注

本接口可以获取到与焊盘直接接触的图元
