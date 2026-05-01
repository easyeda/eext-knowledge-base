---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitiveObject](./pro-api.pcb_primitiveobject.md) &gt; [create](./pro-api.pcb_primitiveobject.create.md)

# PCB\_PrimitiveObject.create() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建二进制内嵌对象

## 签名

```typescript
create(layer: TPCB_LayersOfObject, topLeftX: number, topLeftY: number, binaryData: string, width: number, height: number, rotation?: number, mirror?: boolean, fileName?: string, primitiveLock?: boolean): Promise<IPCB_PrimitiveObject | undefined>;
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

layer

</td><td>

[TPCB\_LayersOfObject](./pro-api.tpcb_layersofobject.md)

</td><td>

层

</td></tr>
<tr><td>

topLeftX

</td><td>

number

</td><td>

左上点 X

</td></tr>
<tr><td>

topLeftY

</td><td>

number

</td><td>

左上点 Y

</td></tr>
<tr><td>

binaryData

</td><td>

string

</td><td>

二进制数据

</td></tr>
<tr><td>

width

</td><td>

number

</td><td>

宽

</td></tr>
<tr><td>

height

</td><td>

number

</td><td>

高

</td></tr>
<tr><td>

rotation

</td><td>

number

</td><td>

_（可选）_ 旋转角度

</td></tr>
<tr><td>

mirror

</td><td>

boolean

</td><td>

_（可选）_ 是否水平镜像

</td></tr>
<tr><td>

fileName

</td><td>

string

</td><td>

_（可选）_ 文件名

</td></tr>
<tr><td>

primitiveLock

</td><td>

boolean

</td><td>

_（可选）_ 是否锁定

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[IPCB\_PrimitiveObject](./pro-api.ipcb_primitiveobject.md) \| undefined&gt;

- 二进制内嵌对象图元对象
