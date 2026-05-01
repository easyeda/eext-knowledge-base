[Home](./pro-api.md) &gt; [TPCB\_LayersOfCopper](./pro-api.tpcb_layersofcopper.md)

# TPCB\_LayersOfCopper type

铜箔所属层

## 签名

```typescript
type TPCB_LayersOfCopper = TPCB_LayersOfInner | EPCB_LayerId.TOP | EPCB_LayerId.BOTTOM;
```
## 引用

[TPCB\_LayersOfInner](./pro-api.tpcb_layersofinner.md)<!-- -->, [EPCB\_LayerId.TOP](./pro-api.epcb_layerid.md)<!-- -->, [EPCB\_LayerId.BOTTOM](./pro-api.epcb_layerid.md)

## 备注

此处为方便单层铜箔层设计，不包含 [EPCB\_LayerId.MULTI](./pro-api.epcb_layerid.md)
