---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitiveVia](./pro-api.pcb_primitivevia.md) &gt; [getAllPrimitiveId](./pro-api.pcb_primitivevia.getallprimitiveid.md)

# PCB\_PrimitiveVia.getAllPrimitiveId() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有过孔图元 ID

## 签名

```typescript
getAllPrimitiveId(net?: string, primitiveLock?: boolean): Promise<Array<string>>;
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

primitiveLock

</td><td>

boolean

</td><td>

_（可选）_ 是否锁定

</td></tr>
</tbody></table>

## 返回值

Promise&lt;Array&lt;string&gt;&gt;

过孔的图元 ID 数组
