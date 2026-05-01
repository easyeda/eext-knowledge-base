---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitiveComponent](./pro-api.pcb_primitivecomponent.md) &gt; [placeComponentWithMouse](./pro-api.pcb_primitivecomponent.placecomponentwithmouse.md)

# PCB\_PrimitiveComponent.placeComponentWithMouse() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

使用鼠标放置器件

## 签名

```typescript
placeComponentWithMouse(component: {
        libraryUuid: string;
        uuid: string;
    } | ILIB_DeviceItem | ILIB_DeviceSearchItem): Promise<boolean>;
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

component

</td><td>

{ libraryUuid: string; uuid: string; } \| [ILIB\_DeviceItem](./pro-api.ilib_deviceitem.md) \| [ILIB\_DeviceSearchItem](./pro-api.ilib_devicesearchitem.md)

</td><td>

关联库器件

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

是否找到器件

## 备注

本接口模拟前端点击放置按钮，指定的器件将绑定到当前鼠标，并在用户后续点击时放置于画布

本接口的返回时机并不会等待用户的放置操作，一旦器件被绑定到鼠标，本接口将立即返回 `true` 的结果
