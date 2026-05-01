---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [IPCB\_PrimitiveArc](./pro-api.ipcb_primitivearc.md) &gt; [getEntireTrack](./pro-api.ipcb_primitivearc.getentiretrack.md)

# IPCB\_PrimitiveArc.getEntireTrack() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取整段导线

## 签名

```typescript
getEntireTrack(includeVias: false): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc>>;
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

includeVias

</td><td>

false

</td><td>

是否包含导线两端的过孔

</td></tr>
</tbody></table>

## 返回值

Promise&lt;Array&lt;[IPCB\_PrimitiveLine](./pro-api.ipcb_primitiveline.md) \| [IPCB\_PrimitiveArc](./pro-api.ipcb_primitivearc.md)<!-- -->&gt;&gt;

整段导线内的所有直线和圆弧线
