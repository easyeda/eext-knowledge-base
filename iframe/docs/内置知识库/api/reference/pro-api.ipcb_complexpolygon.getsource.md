---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [IPCB\_ComplexPolygon](./pro-api.ipcb_complexpolygon.md) &gt; [getSource](./pro-api.ipcb_complexpolygon.getsource.md)

# IPCB\_ComplexPolygon.getSource() method

获取多边形数据

## 签名

```typescript
getSource(): TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>;
```

## 返回值

[TPCB\_PolygonSourceArray](./pro-api.tpcb_polygonsourcearray.md) \| Array&lt;[TPCB\_PolygonSourceArray](./pro-api.tpcb_polygonsourcearray.md)<!-- -->&gt;

单多边形或复杂多边形数据

## 备注

如遇仅包含单一的单多边形，将会化简最外层的数组
