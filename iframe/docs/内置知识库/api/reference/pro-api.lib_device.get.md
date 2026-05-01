---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [LIB\_Device](./pro-api.lib_device.md) &gt; [get](./pro-api.lib_device.get.md)

# LIB\_Device.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取器件的所有属性

## 签名

```typescript
get(deviceUuid: string, libraryUuid?: string): Promise<ILIB_DeviceItem | undefined>;
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

deviceUuid

</td><td>

string

</td><td>

器件 UUID

</td></tr>
<tr><td>

libraryUuid

</td><td>

string

</td><td>

_（可选）_ 库 UUID，默认为系统库，可以使用 [LIB\_LibrariesList](./pro-api.lib_librarieslist.md) 内的接口获取

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[ILIB\_DeviceItem](./pro-api.ilib_deviceitem.md) \| undefined&gt;

器件属性
