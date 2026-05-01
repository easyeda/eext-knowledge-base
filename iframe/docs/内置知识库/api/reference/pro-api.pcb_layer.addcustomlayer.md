---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Layer](./pro-api.pcb_layer.md) &gt; [addCustomLayer](./pro-api.pcb_layer.addcustomlayer.md)

# PCB\_Layer.addCustomLayer() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

新增自定义层

## 签名

```typescript
addCustomLayer(): Promise<TPCB_LayersOfCustom | undefined>;
```

## 返回值

Promise&lt;[TPCB\_LayersOfCustom](./pro-api.tpcb_layersofcustom.md) \| undefined&gt;

新增的自定义层的图层 ID，如若为 `undefined` 则为新增失败，可能是自定义层数量已达到上限
