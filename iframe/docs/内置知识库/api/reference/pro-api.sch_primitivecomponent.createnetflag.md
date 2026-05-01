---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_PrimitiveComponent](./pro-api.sch_primitivecomponent.md) &gt; [createNetFlag](./pro-api.sch_primitivecomponent.createnetflag.md)

# SCH\_PrimitiveComponent.createNetFlag() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建网络标识

## 签名

```typescript
createNetFlag(identification: 'Power' | 'Ground' | 'AnalogGround' | 'ProtectGround', net: string, x: number, y: number, rotation?: number, mirror?: boolean): Promise<ISCH_PrimitiveComponent$1 | undefined>;
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

identification

</td><td>

'Power' \| 'Ground' \| 'AnalogGround' \| 'ProtectGround'

</td><td>

标识类型

</td></tr>
<tr><td>

net

</td><td>

string

</td><td>

网络名称

</td></tr>
<tr><td>

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

_（可选）_ 是否镜像

</td></tr>
</tbody></table>

## 返回值

Promise&lt;ISCH\_PrimitiveComponent$1 \| undefined&gt;

器件图元对象
