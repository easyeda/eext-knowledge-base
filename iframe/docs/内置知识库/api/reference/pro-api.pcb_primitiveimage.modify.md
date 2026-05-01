---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitiveImage](./pro-api.pcb_primitiveimage.md) &gt; [modify](./pro-api.pcb_primitiveimage.modify.md)

# PCB\_PrimitiveImage.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改图像

## 签名

```typescript
modify(primitiveId: string | IPCB_PrimitiveImage, property: {
        x?: number;
        y?: number;
        layer?: TPCB_LayersOfImage;
        width?: number;
        height?: number;
        rotation?: number;
        horizonMirror?: boolean;
        primitiveLock?: boolean;
    }): Promise<IPCB_PrimitiveImage | undefined>;
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

string \| [IPCB\_PrimitiveImage](./pro-api.ipcb_primitiveimage.md)

</td><td>

图元 ID

</td></tr>
<tr><td>

property

</td><td>

{ x?: number; y?: number; layer?: [TPCB\_LayersOfImage](./pro-api.tpcb_layersofimage.md)<!-- -->; width?: number; height?: number; rotation?: number; horizonMirror?: boolean; primitiveLock?: boolean; }

</td><td>

修改参数

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[IPCB\_PrimitiveImage](./pro-api.ipcb_primitiveimage.md) \| undefined&gt;

图像图元对象
