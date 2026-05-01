---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_PrimitivePin](./pro-api.sch_primitivepin.md) &gt; [create](./pro-api.sch_primitivepin.create.md)

# SCH\_PrimitivePin.create() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建引脚

## 签名

```typescript
create(x: number, y: number, pinNumber: string, pinName?: string, rotation?: number, pinLength?: number, pinColor?: string | null, pinShape?: ESCH_PrimitivePinShape, pinType?: ESCH_PrimitivePinType): Promise<ISCH_PrimitivePin | undefined>;
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
<tr><td>

pinNumber

</td><td>

string

</td><td>

引脚编号

</td></tr>
<tr><td>

pinName

</td><td>

string

</td><td>

_（可选）_ 引脚名称

</td></tr>
<tr><td>

rotation

</td><td>

number

</td><td>

_（可选）_ 旋转角度，可选 `0` `90` `180` `270`

</td></tr>
<tr><td>

pinLength

</td><td>

number

</td><td>

_（可选）_ 引脚长度

</td></tr>
<tr><td>

pinColor

</td><td>

string \| null

</td><td>

_（可选）_ 引脚颜色，`null` 表示默认

</td></tr>
<tr><td>

pinShape

</td><td>

[ESCH\_PrimitivePinShape](./pro-api.esch_primitivepinshape.md)

</td><td>

_（可选）_ 引脚形状

</td></tr>
<tr><td>

pinType

</td><td>

[ESCH\_PrimitivePinType](./pro-api.esch_primitivepintype.md)

</td><td>

_（可选）_ 引脚类型

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[ISCH\_PrimitivePin](./pro-api.isch_primitivepin.md) \| undefined&gt;

引脚图元对象
