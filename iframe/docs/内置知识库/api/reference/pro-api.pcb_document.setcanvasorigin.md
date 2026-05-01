---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Document](./pro-api.pcb_document.md) &gt; [setCanvasOrigin](./pro-api.pcb_document.setcanvasorigin.md)

# PCB\_Document.setCanvasOrigin() method

设置画布原点相对于数据原点的偏移坐标

## 签名

```typescript
setCanvasOrigin(offsetX: number, offsetY: number): Promise<boolean>;
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

offsetX

</td><td>

number

</td><td>

画布原点相对于数据原点的 X 坐标偏移

</td></tr>
<tr><td>

offsetY

</td><td>

number

</td><td>

画布原点相对于数据原点的 Y 坐标偏移

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

嘉立创 EDA 专业版前端显示的坐标均为画布原点；

嘉立创 EDA 专业版 API 使用的均为数据原点；

如果希望在 API 操作时前端画布坐标能与数据一致， 建议调用本方法并设置偏移量为零， 即 `setCanvasOrigin(0, 0)`<!-- -->；

此处的单位为数据层面单位，在跨度上等同于画布层面的 mil
