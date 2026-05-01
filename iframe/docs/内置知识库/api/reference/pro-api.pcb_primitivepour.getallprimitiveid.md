---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitivePour](./pro-api.pcb_primitivepour.md) &gt; [getAllPrimitiveId](./pro-api.pcb_primitivepour.getallprimitiveid.md)

# PCB\_PrimitivePour.getAllPrimitiveId() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有覆铜边框的图元 ID

## 签名

```typescript
getAllPrimitiveId(net?: string, layer?: TPCB_LayersOfCopper, primitiveLock?: boolean): Promise<Array<string>>;
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

net

</td><td>

string

</td><td>

_（可选）_ 网络名称

</td></tr>
<tr><td>

layer

</td><td>

[TPCB\_LayersOfCopper](./pro-api.tpcb_layersofcopper.md)

</td><td>

_（可选）_ 层

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

Promise&lt;Array&lt;string&gt;&gt;

覆铜边框的图元 ID 数组
