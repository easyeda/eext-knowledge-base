---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitivePolyline](./pro-api.pcb_primitivepolyline.md) &gt; [modify](./pro-api.pcb_primitivepolyline.modify.md)

# PCB\_PrimitivePolyline.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改折线

## 签名

```typescript
modify(primitiveId: string | IPCB_PrimitivePolyline, property: {
        net?: string;
        layer?: TPCB_LayersOfLine;
        polygon?: IPCB_Polygon;
        lineWidth?: number;
        primitiveLock?: boolean;
    }): Promise<IPCB_PrimitivePolyline | undefined>;
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

string \| [IPCB\_PrimitivePolyline](./pro-api.ipcb_primitivepolyline.md)

</td><td>

图元 ID

</td></tr>
<tr><td>

property

</td><td>

{ net?: string; layer?: [TPCB\_LayersOfLine](./pro-api.tpcb_layersofline.md)<!-- -->; polygon?: [IPCB\_Polygon](./pro-api.ipcb_polygon.md)<!-- -->; lineWidth?: number; primitiveLock?: boolean; }

</td><td>

修改参数

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[IPCB\_PrimitivePolyline](./pro-api.ipcb_primitivepolyline.md) \| undefined&gt;

折线图元对象
