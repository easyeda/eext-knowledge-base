---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_PrimitiveComponent](./pro-api.sch_primitivecomponent.md) &gt; [setNetFlagComponentUuid\_AnalogGround](./pro-api.sch_primitivecomponent.setnetflagcomponentuuid_analogground.md)

# SCH\_PrimitiveComponent.setNetFlagComponentUuid\_AnalogGround() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置在扩展 API 中 AnalogGround 网络标识关联的器件 UUID

## 签名

```typescript
setNetFlagComponentUuid_AnalogGround(component: {
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

操作是否成功
