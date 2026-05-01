[Home](./pro-api.md) &gt; [ILIB\_DeviceSearchItem](./pro-api.ilib_devicesearchitem.md)

# ILIB\_DeviceSearchItem interface

搜索到的器件属性

## 签名

```typescript
interface ILIB_DeviceSearchItem
```

## 属性

<table><thead><tr><th>

属性名

</th><th>

修饰符

</th><th>

类型

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

[classification?](./pro-api.ilib_devicesearchitem.classification.md)

</td><td>

</td><td>

[ILIB\_ClassificationIndex](./pro-api.ilib_classificationindex.md) \| Array&lt;string&gt;

</td><td>

_（可选）_ 器件分类

</td></tr>
<tr><td>

[description?](./pro-api.ilib_devicesearchitem.description.md)

</td><td>

</td><td>

string

</td><td>

_（可选）_ 描述

</td></tr>
<tr><td>

[footprint?](./pro-api.ilib_devicesearchitem.footprint.md)

</td><td>

</td><td>

\{ name: string; uuid: string; libraryUuid: string; \}

</td><td>

_（可选）_ 关联封装

</td></tr>
<tr><td>

[footprintName?](./pro-api.ilib_devicesearchitem.footprintname.md)

</td><td>

</td><td>

string

</td><td>

_（可选）_ 关联封装名称

</td></tr>
<tr><td>

[footprintUuid](./pro-api.ilib_devicesearchitem.footprintuuid.md)

</td><td>

</td><td>

string

</td><td>

关联封装 UUID

</td></tr>
<tr><td>

[imageUuid?](./pro-api.ilib_devicesearchitem.imageuuid.md)

</td><td>

</td><td>

string

</td><td>

_（可选）_ 关联图片 UUID

</td></tr>
<tr><td>

[jlcInventory?](./pro-api.ilib_devicesearchitem.jlcinventory.md)

</td><td>

</td><td>

number

</td><td>

_（可选）_ 嘉立创库存

</td></tr>
<tr><td>

[jlcLibraryCategory?](./pro-api.ilib_devicesearchitem.jlclibrarycategory.md)

</td><td>

</td><td>

[ELIB\_DeviceJlcLibraryCategory](./pro-api.elib_devicejlclibrarycategory.md)

</td><td>

_（可选）_ 嘉立创库类别

</td></tr>
<tr><td>

[jlcPrice?](./pro-api.ilib_devicesearchitem.jlcprice.md)

</td><td>

</td><td>

number

</td><td>

_（可选）_ 嘉立创价格

</td></tr>
<tr><td>

[lcscInventory?](./pro-api.ilib_devicesearchitem.lcscinventory.md)

</td><td>

</td><td>

number

</td><td>

_（可选）_ 立创商城库存

</td></tr>
<tr><td>

[lcscPrice?](./pro-api.ilib_devicesearchitem.lcscprice.md)

</td><td>

</td><td>

number

</td><td>

_（可选）_ 立创商城价格

</td></tr>
<tr><td>

[libraryUuid](./pro-api.ilib_devicesearchitem.libraryuuid.md)

</td><td>

</td><td>

string

</td><td>

所属库 UUID

</td></tr>
<tr><td>

[manufacturer?](./pro-api.ilib_devicesearchitem.manufacturer.md)

</td><td>

</td><td>

string

</td><td>

_（可选）_ 制造商

</td></tr>
<tr><td>

[manufacturerId?](./pro-api.ilib_devicesearchitem.manufacturerid.md)

</td><td>

</td><td>

string

</td><td>

_（可选）_ 制造商编号

</td></tr>
<tr><td>

[model3D?](./pro-api.ilib_devicesearchitem.model3d.md)

</td><td>

</td><td>

\{ name: string; uuid: string; libraryUuid: string; \}

</td><td>

_（可选）_ 关联 3D 模型

</td></tr>
<tr><td>

[model3DName?](./pro-api.ilib_devicesearchitem.model3dname.md)

</td><td>

</td><td>

string

</td><td>

_（可选）_ 关联 3D 模型名称

</td></tr>
<tr><td>

[model3DUuid](./pro-api.ilib_devicesearchitem.model3duuid.md)

</td><td>

</td><td>

string

</td><td>

关联 3D 模型 UUID

</td></tr>
<tr><td>

[name](./pro-api.ilib_devicesearchitem.name.md)

</td><td>

</td><td>

string

</td><td>

器件名称

</td></tr>
<tr><td>

[ordinal](./pro-api.ilib_devicesearchitem.ordinal.md)

</td><td>

</td><td>

number

</td><td>

排序

</td></tr>
<tr><td>

[otherProperty?](./pro-api.ilib_devicesearchitem.otherproperty.md)

</td><td>

</td><td>

\{ \[key: string\]: boolean \| number \| string \| undefined; \}

</td><td>

_（可选）_ 其它属性

</td></tr>
<tr><td>

[supplier?](./pro-api.ilib_devicesearchitem.supplier.md)

</td><td>

</td><td>

string

</td><td>

_（可选）_ 供应商

</td></tr>
<tr><td>

[supplierId?](./pro-api.ilib_devicesearchitem.supplierid.md)

</td><td>

</td><td>

string

</td><td>

_（可选）_ 供应商编号

</td></tr>
<tr><td>

[symbol](./pro-api.ilib_devicesearchitem.symbol.md)

</td><td>

</td><td>

\{ name: string; uuid: string; libraryUuid: string; \}

</td><td>

关联符号

</td></tr>
<tr><td>

[symbolName](./pro-api.ilib_devicesearchitem.symbolname.md)

</td><td>

</td><td>

string

</td><td>

关联符号名称

</td></tr>
<tr><td>

[symbolUuid](./pro-api.ilib_devicesearchitem.symboluuid.md)

</td><td>

</td><td>

string

</td><td>

关联符号 UUID

</td></tr>
<tr><td>

[uuid](./pro-api.ilib_devicesearchitem.uuid.md)

</td><td>

</td><td>

string

</td><td>

器件 UUID

</td></tr>
</tbody></table>
