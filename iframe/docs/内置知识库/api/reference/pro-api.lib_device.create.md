---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [LIB\_Device](./pro-api.lib_device.md) &gt; [create](./pro-api.lib_device.create.md)

# LIB\_Device.create() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建器件

## 签名

```typescript
create(libraryUuid: string, deviceName: string, classification?: ILIB_ClassificationIndex | Array<string>, association?: {
        symbolType?: ELIB_SymbolType;
        symbolUuid?: string;
        symbol?: {
            uuid: string;
            libraryUuid: string;
        };
        footprintUuid?: string;
        footprint?: {
            uuid: string;
            libraryUuid: string;
        };
        model3D?: {
            uuid: string;
            libraryUuid: string;
        };
        imageData?: File | Blob;
    }, description?: string, property?: ILIB_DeviceExtendPropertyItem): Promise<string | undefined>;
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

libraryUuid

</td><td>

string

</td><td>

库 UUID，可以使用 [LIB\_LibrariesList](./pro-api.lib_librarieslist.md) 内的接口获取

</td></tr>
<tr><td>

deviceName

</td><td>

string

</td><td>

器件名称

</td></tr>
<tr><td>

classification

</td><td>

[ILIB\_ClassificationIndex](./pro-api.ilib_classificationindex.md) \| Array&lt;string&gt;

</td><td>

_（可选）_ 分类

</td></tr>
<tr><td>

association

</td><td>

{ symbolType?: [ELIB\_SymbolType](./pro-api.elib_symboltype.md)<!-- -->; symbolUuid?: string; symbol?: { uuid: string; libraryUuid: string; }; footprintUuid?: string; footprint?: { uuid: string; libraryUuid: string; }; model3D?: { uuid: string; libraryUuid: string; }; imageData?: File \| Blob; }

</td><td>

_（可选）_ 关联符号、封装、图像，指定 `symbolType` 则创建新符号，无需新建符号则无需指定 `symbolType`<!-- -->，但请注意，如若不新建符号也不指定符号的关联信息将无法创建器件

</td></tr>
<tr><td>

description

</td><td>

string

</td><td>

_（可选）_ 描述

</td></tr>
<tr><td>

property

</td><td>

[ILIB\_DeviceExtendPropertyItem](./pro-api.ilib_deviceextendpropertyitem.md)

</td><td>

_（可选）_ 其它属性，仅 `designator`<!-- -->、`addIntoBom`<!-- -->、`addIntoPcb` 存在默认值

</td></tr>
</tbody></table>

## 返回值

Promise&lt;string \| undefined&gt;

器件 UUID
