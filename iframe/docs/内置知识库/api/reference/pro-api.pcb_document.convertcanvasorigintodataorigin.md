---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Document](./pro-api.pcb_document.md) &gt; [convertCanvasOriginToDataOrigin](./pro-api.pcb_document.convertcanvasorigintodataorigin.md)

# PCB\_Document.convertCanvasOriginToDataOrigin() method

输入画布坐标返回该坐标对应的数据坐标

## 签名

```typescript
convertCanvasOriginToDataOrigin(x: number, y: number): Promise<{
        x: number;
        y: number;
    }>;
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

</td></tr>
<tr><td>

y

</td><td>

number

</td><td>

</td></tr>
</tbody></table>

## 返回值

Promise&lt;{ x: number; y: number; }&gt;

数据原点坐标

## 备注

嘉立创 EDA 前端显示的坐标均为画布原点；嘉立创 EDA API 使用的均为数据原点；在创建 PCB 时，默认画布原点等于数据原点
