---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_PrimitivePin](./pro-api.sch_primitivepin.md) &gt; [modify](./pro-api.sch_primitivepin.modify.md)

# SCH\_PrimitivePin.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改引脚

## 签名

```typescript
modify(primitiveId: string | ISCH_PrimitivePin | ISCH_PrimitiveComponentPin, property: {
        x?: number;
        y?: number;
        pinNumber?: string;
        pinName?: string;
        rotation?: number;
        pinLength?: number;
        pinColor?: string | null;
        pinShape?: ESCH_PrimitivePinShape;
        pinType?: ESCH_PrimitivePinType;
    }): Promise<ISCH_PrimitivePin | ISCH_PrimitiveComponentPin | undefined>;
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

primitiveId

</td><td>

string \| [ISCH\_PrimitivePin](./pro-api.isch_primitivepin.md) \| [ISCH\_PrimitiveComponentPin](./pro-api.isch_primitivecomponentpin.md)

</td><td>

图元 ID

</td></tr>
<tr><td>

property

</td><td>

{ x?: number; y?: number; pinNumber?: string; pinName?: string; rotation?: number; pinLength?: number; pinColor?: string \| null; pinShape?: [ESCH\_PrimitivePinShape](./pro-api.esch_primitivepinshape.md)<!-- -->; pinType?: [ESCH\_PrimitivePinType](./pro-api.esch_primitivepintype.md)<!-- -->; }

</td><td>

修改参数

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[ISCH\_PrimitivePin](./pro-api.isch_primitivepin.md) \| [ISCH\_PrimitiveComponentPin](./pro-api.isch_primitivecomponentpin.md) \| undefined&gt;

引脚图元对象
