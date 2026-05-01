---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [LIB\_Device](./pro-api.lib_device.md) &gt; [modify](./pro-api.lib_device.modify.md)

# LIB\_Device.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改器件

## 签名

```typescript
modify(deviceUuid: string, libraryUuid: string, deviceName?: string, classification?: ILIB_ClassificationIndex | Array<string> | null, association?: {
        symbolUuid?: string;
        symbol?: {
            uuid: string;
            libraryUuid: string;
        };
        footprintUuid?: string | null;
        footprint?: {
            uuid: string;
            libraryUuid: string;
        } | null;
        model3D?: {
            uuid: string;
            libraryUuid: string;
        } | null;
        imageData?: File | Blob | null;
    }, description?: string | null, property?: {
        name?: string | null;
        designator?: string;
        addIntoBom?: boolean;
        addIntoPcb?: boolean;
        net?: string;
        manufacturer?: string | null;
        manufacturerId?: string | null;
        supplier?: string | null;
        supplierId?: string | null;
        otherProperty?: {
            [key: string]: boolean | number | string | undefined | null;
        };
    }): Promise<boolean>;
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

库 UUID，可以使用 [LIB\_LibrariesList](./pro-api.lib_librarieslist.md) 内的接口获取

</td></tr>
<tr><td>

deviceName

</td><td>

string

</td><td>

_（可选）_ 器件名称

</td></tr>
<tr><td>

classification

</td><td>

[ILIB\_ClassificationIndex](./pro-api.ilib_classificationindex.md) \| Array&lt;string&gt; \| null

</td><td>

_（可选）_ 分类

</td></tr>
<tr><td>

association

</td><td>

\{ symbolUuid?: string; symbol?: \{ uuid: string; libraryUuid: string; \}; footprintUuid?: string \| null; footprint?: \{ uuid: string; libraryUuid: string; \} \| null; model3D?: \{ uuid: string; libraryUuid: string; \} \| null; imageData?: File \| Blob \| null; \}

</td><td>

_（可选）_ 关联符号、封装、图像

</td></tr>
<tr><td>

description

</td><td>

string \| null

</td><td>

_（可选）_ 描述

</td></tr>
<tr><td>

property

</td><td>

\{ name?: string \| null; designator?: string; addIntoBom?: boolean; addIntoPcb?: boolean; net?: string; manufacturer?: string \| null; manufacturerId?: string \| null; supplier?: string \| null; supplierId?: string \| null; otherProperty?: \{ \[key: string\]: boolean \| number \| string \| undefined \| null; \}; \}

</td><td>

_（可选）_ 其它属性

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

如希望清除某些属性，则将其的值设置为 `null`
