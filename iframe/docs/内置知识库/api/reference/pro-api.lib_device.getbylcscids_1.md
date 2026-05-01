---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [LIB\_Device](./pro-api.lib_device.md) &gt; [getByLcscIds](./pro-api.lib_device.getbylcscids_1.md)

# LIB\_Device.getByLcscIds() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

使用立创 C 编号批量获取器件

## 签名

```typescript
getByLcscIds(lcscIds: Array<string>, libraryUuid?: string, allowMultiMatch?: boolean): Promise<Array<ILIB_DeviceSearchItem>>;
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

lcscIds

</td><td>

Array&lt;string&gt;

</td><td>

立创 C 编号数组

</td></tr>
<tr><td>

libraryUuid

</td><td>

string

</td><td>

_（可选）_ 库 UUID，默认为系统库，可以使用 [LIB\_LibrariesList](./pro-api.lib_librarieslist.md) 内的接口获取

</td></tr>
<tr><td>

allowMultiMatch

</td><td>

boolean

</td><td>

_（可选）_ 是否允许单个立创 C 编号匹配多个结果

</td></tr>
</tbody></table>

## 返回值

Promise&lt;Array&lt;[ILIB\_DeviceSearchItem](./pro-api.ilib_devicesearchitem.md)<!-- -->&gt;&gt;

搜索到的器件属性的列表

## 备注

默认情况下，如果在同一个库内匹配到多个相同 C 编号的器件，将只会返回第一个结果；

如果希望返回多个结果，请将 `allowMultiMatch` 置为 `true`<!-- -->；

私有化部署环境暂无法使用本接口
