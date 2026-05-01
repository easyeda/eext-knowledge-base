[Home](./pro-api.md) &gt; [TPCB\_PrimitivePadHole](./pro-api.tpcb_primitivepadhole.md)

# TPCB\_PrimitivePadHole type

焊盘钻孔

## 签名

```typescript
type TPCB_PrimitivePadHole = [EPCB_PrimitivePadHoleType.ROUND, number] | [EPCB_PrimitivePadHoleType.SLOT, number, number];
```
## 引用

[EPCB\_PrimitivePadHoleType.ROUND](./pro-api.epcb_primitivepadholetype.md)<!-- -->, [EPCB\_PrimitivePadHoleType.SLOT](./pro-api.epcb_primitivepadholetype.md)

## 备注

焊盘钻孔当前存在以下两种 [类型](./pro-api.epcb_primitivepadholetype.md)<!-- -->：

① 圆形

`[EPCB_PrimitivePadHoleType.ROUND, diameter]`

- `{number}` `diameter` - 直径

② 插槽

`[EPCB_PrimitivePadHoleType.SLOT, diameter, length]`

- `{number}` `length` - 长度，长度不能小于直径,长度小于直径的话长度的值跟随直径

- `{number}` `diameter` - 直径
