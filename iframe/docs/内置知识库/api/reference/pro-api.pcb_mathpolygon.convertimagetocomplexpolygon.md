---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_MathPolygon](./pro-api.pcb_mathpolygon.md) &gt; [convertImageToComplexPolygon](./pro-api.pcb_mathpolygon.convertimagetocomplexpolygon.md)

# PCB\_MathPolygon.convertImageToComplexPolygon() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

将图像转换为复杂多边形对象

## 签名

```typescript
convertImageToComplexPolygon(imageBlob: Blob, imageWidth: number, imageHeight: number, tolerance?: number, simplification?: number, smoothing?: number, despeckling?: number, whiteAsBackgroundColor?: boolean, inversion?: boolean): Promise<IPCB_ComplexPolygon | undefined>;
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

imageBlob

</td><td>

Blob

</td><td>

图像 Blob 文件，可以使用  方法从文件系统读取文件

</td></tr>
<tr><td>

imageWidth

</td><td>

number

</td><td>

图像宽度

</td></tr>
<tr><td>

imageHeight

</td><td>

number

</td><td>

图像高度

</td></tr>
<tr><td>

tolerance

</td><td>

number

</td><td>

_（可选）_ 容差，取值范围 `0`<!-- -->-`1`

</td></tr>
<tr><td>

simplification

</td><td>

number

</td><td>

_（可选）_ 简化，取值范围 `0`<!-- -->-`1`

</td></tr>
<tr><td>

smoothing

</td><td>

number

</td><td>

_（可选）_ 平滑，取值范围 `0`<!-- -->-`1.33`

</td></tr>
<tr><td>

despeckling

</td><td>

number

</td><td>

_（可选）_ 去斑，取值范围 `0`<!-- -->-`5`

</td></tr>
<tr><td>

whiteAsBackgroundColor

</td><td>

boolean

</td><td>

_（可选）_ 是否白色作为背景色

</td></tr>
<tr><td>

inversion

</td><td>

boolean

</td><td>

_（可选）_ 是否反相

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[IPCB\_ComplexPolygon](./pro-api.ipcb_complexpolygon.md) \| undefined&gt;

复杂多边形对象
