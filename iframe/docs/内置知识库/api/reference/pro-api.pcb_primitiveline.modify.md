---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitiveLine](./pro-api.pcb_primitiveline.md) &gt; [modify](./pro-api.pcb_primitiveline.modify.md)

# PCB\_PrimitiveLine.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改直线

## 签名

```typescript
modify(primitiveId: string | IPCB_PrimitiveLine, property: {
        net?: string;
        layer?: TPCB_LayersOfLine;
        startX?: number;
        startY?: number;
        endX?: number;
        endY?: number;
        lineWidth?: number;
        primitiveLock?: boolean;
    }): Promise<IPCB_PrimitiveLine | undefined>;
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

string \| [IPCB\_PrimitiveLine](./pro-api.ipcb_primitiveline.md)

</td><td>

图元 ID

</td></tr>
<tr><td>

property

</td><td>

{ net?: string; layer?: [TPCB\_LayersOfLine](./pro-api.tpcb_layersofline.md)<!-- -->; startX?: number; startY?: number; endX?: number; endY?: number; lineWidth?: number; primitiveLock?: boolean; }

</td><td>

修改参数

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[IPCB\_PrimitiveLine](./pro-api.ipcb_primitiveline.md) \| undefined&gt;

直线图元对象
