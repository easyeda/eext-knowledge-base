---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitiveObject](./pro-api.pcb_primitiveobject.md) &gt; [modify](./pro-api.pcb_primitiveobject.modify.md)

# PCB\_PrimitiveObject.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改二进制内嵌对象

## 签名

```typescript
modify(primitiveId: string | IPCB_PrimitiveObject, property: {
        layer?: TPCB_LayersOfObject;
        topLeftX?: number;
        topLeftY?: number;
        binaryData?: string;
        width?: number;
        height?: number;
        rotation?: number;
        mirror?: boolean;
        fileName?: string;
        primitiveLock?: boolean;
    }): Promise<IPCB_PrimitiveObject | undefined>;
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

string \| [IPCB\_PrimitiveObject](./pro-api.ipcb_primitiveobject.md)

</td><td>

图元 ID

</td></tr>
<tr><td>

property

</td><td>

{ layer?: [TPCB\_LayersOfObject](./pro-api.tpcb_layersofobject.md)<!-- -->; topLeftX?: number; topLeftY?: number; binaryData?: string; width?: number; height?: number; rotation?: number; mirror?: boolean; fileName?: string; primitiveLock?: boolean; }

</td><td>

修改参数

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[IPCB\_PrimitiveObject](./pro-api.ipcb_primitiveobject.md) \| undefined&gt;

二进制内嵌对象图元对象，`undefined` 表示修改失败
