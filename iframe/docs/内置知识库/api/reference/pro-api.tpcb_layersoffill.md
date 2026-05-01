[Home](./pro-api.md) &gt; [TPCB\_LayersOfFill](./pro-api.tpcb_layersoffill.md)

# TPCB\_LayersOfFill type

填充所属层

## 签名

```typescript
type TPCB_LayersOfFill = TPCB_LayersOfCopper | TPCB_LayersOfCustom | EPCB_LayerId.TOP_SILKSCREEN | EPCB_LayerId.TOP_SOLDER_MASK | EPCB_LayerId.TOP_PASTE_MASK | EPCB_LayerId.TOP_ASSEMBLY | EPCB_LayerId.BOTTOM_SILKSCREEN | EPCB_LayerId.BOTTOM_SOLDER_MASK | EPCB_LayerId.BOTTOM_PASTE_MASK | EPCB_LayerId.BOTTOM_ASSEMBLY | EPCB_LayerId.DOCUMENT | EPCB_LayerId.MECHANICAL | EPCB_LayerId.MULTI;
```
## 引用

[TPCB\_LayersOfCopper](./pro-api.tpcb_layersofcopper.md)<!-- -->, [TPCB\_LayersOfCustom](./pro-api.tpcb_layersofcustom.md)<!-- -->, [EPCB\_LayerId.TOP\_SILKSCREEN](./pro-api.epcb_layerid.md)<!-- -->, [EPCB\_LayerId.TOP\_SOLDER\_MASK](./pro-api.epcb_layerid.md)<!-- -->, [EPCB\_LayerId.TOP\_PASTE\_MASK](./pro-api.epcb_layerid.md)<!-- -->, [EPCB\_LayerId.TOP\_ASSEMBLY](./pro-api.epcb_layerid.md)<!-- -->, [EPCB\_LayerId.BOTTOM\_SILKSCREEN](./pro-api.epcb_layerid.md)<!-- -->, [EPCB\_LayerId.BOTTOM\_SOLDER\_MASK](./pro-api.epcb_layerid.md)<!-- -->, [EPCB\_LayerId.BOTTOM\_PASTE\_MASK](./pro-api.epcb_layerid.md)<!-- -->, [EPCB\_LayerId.BOTTOM\_ASSEMBLY](./pro-api.epcb_layerid.md)<!-- -->, [EPCB\_LayerId.DOCUMENT](./pro-api.epcb_layerid.md)<!-- -->, [EPCB\_LayerId.MECHANICAL](./pro-api.epcb_layerid.md)<!-- -->, [EPCB\_LayerId.MULTI](./pro-api.epcb_layerid.md)

## 备注

填充所属层为 [EPCB\_LayerId.MULTI](./pro-api.epcb_layerid.md) 时代表挖槽区域
