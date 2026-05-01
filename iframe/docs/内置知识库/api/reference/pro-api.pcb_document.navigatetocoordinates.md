---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Document](./pro-api.pcb_document.md) &gt; [navigateToCoordinates](./pro-api.pcb_document.navigatetocoordinates.md)

# PCB\_Document.navigateToCoordinates() method

定位到画布坐标

## 签名

```typescript
navigateToCoordinates(x: number, y: number): Promise<boolean>;
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

x

</td><td>

number

</td><td>

坐标 X

</td></tr>
<tr><td>

y

</td><td>

number

</td><td>

坐标 Y

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

本接口在前端画布上定位到指定的数据层面坐标；

如果希望在进行本操作时前端画布坐标能与传入数据一致， 建议调用 [PCB\_Document.setCanvasOrigin()](./pro-api.pcb_document.setcanvasorigin.md) 方法并设置偏移量为零；

此处的单位为数据层面单位，在跨度上等同于画布层面的 mil
