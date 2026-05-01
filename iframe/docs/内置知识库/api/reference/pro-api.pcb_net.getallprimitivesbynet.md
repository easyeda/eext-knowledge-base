---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Net](./pro-api.pcb_net.md) &gt; [getAllPrimitivesByNet](./pro-api.pcb_net.getallprimitivesbynet.md)

# PCB\_Net.getAllPrimitivesByNet() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取关联指定网络的所有图元

## 签名

```typescript
getAllPrimitivesByNet(net: string, primitiveTypes?: Array<EPCB_PrimitiveType>): Promise<Array<IPCB_Primitive>>;
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

网络名称

</td></tr>
<tr><td>

primitiveTypes

</td><td>

Array&lt;[EPCB\_PrimitiveType](./pro-api.epcb_primitivetype.md)<!-- -->&gt;

</td><td>

_（可选）_ 图元类型数组，如若指定图元类型不存在网络属性，返回的数据将恒为空

</td></tr>
</tbody></table>

## 返回值

Promise&lt;Array&lt;[IPCB\_Primitive](./pro-api.ipcb_primitive.md)<!-- -->&gt;&gt;

图元对象数组
