---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Document](./pro-api.pcb_document.md) &gt; [getCanvasOrigin](./pro-api.pcb_document.getcanvasorigin.md)

# PCB\_Document.getCanvasOrigin() method

获取画布原点相对于数据原点的偏移坐标

## 签名

```typescript
getCanvasOrigin(): Promise<{
        offsetX: number;
        offsetY: number;
    }>;
```

## 返回值

Promise&lt;{ offsetX: number; offsetY: number; }&gt;

画布原点相对于数据原点的偏移坐标

## 备注

嘉立创 EDA 专业版前端显示的坐标均为画布原点；

嘉立创 EDA 专业版 API 使用的均为数据原点；

如果返回的数据为 `{ canvasOriginOffsetX: 100, canvasOriginOffsetY: 200 }`<!-- -->， 则代表画布原点在数据原点的向右 100 单位且向上 200 单位的位置；

此处的单位为数据层面单位，在跨度上等同于画布层面的 mil
