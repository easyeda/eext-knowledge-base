---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_PrimitiveComponent](./pro-api.sch_primitivecomponent.md) &gt; [create](./pro-api.sch_primitivecomponent.create.md)

# SCH\_PrimitiveComponent.create() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建器件

## 签名

```typescript
create(component: {
        libraryUuid: string;
        uuid: string;
    } | ILIB_DeviceItem | ILIB_DeviceSearchItem, x: number, y: number, subPartName?: string, rotation?: number, mirror?: boolean, addIntoBom?: boolean, addIntoPcb?: boolean): Promise<ISCH_PrimitiveComponent$1 | undefined>;
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

subPartName

</td><td>

string

</td><td>

_（可选）_ 子图块名称

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
<tr><td>

addIntoBom

</td><td>

boolean

</td><td>

_（可选）_ 是否加入 BOM

</td></tr>
<tr><td>

addIntoPcb

</td><td>

boolean

</td><td>

_（可选）_ 是否转到 PCB

</td></tr>
</tbody></table>

## 返回值

Promise&lt;ISCH\_PrimitiveComponent$1 \| undefined&gt;

器件图元对象
