[Home](./pro-api.md) &gt; [ILIB\_DeviceAssociationItem](./pro-api.ilib_deviceassociationitem.md)

# ILIB\_DeviceAssociationItem interface

器件关联符号、封装属性

## 签名

```typescript
interface ILIB_DeviceAssociationItem
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

[footprint?](./pro-api.ilib_deviceassociationitem.footprint.md)

</td><td>

</td><td>

\{ uuid: string; libraryUuid: string; \}

</td><td>

_（可选）_ 封装

</td></tr>
<tr><td>

[footprintUuid](./pro-api.ilib_deviceassociationitem.footprintuuid.md)

</td><td>

</td><td>

string

</td><td>

封装 UUID

</td></tr>
<tr><td>

[images?](./pro-api.ilib_deviceassociationitem.images.md)

</td><td>

</td><td>

Array&lt;string&gt;

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[symbol](./pro-api.ilib_deviceassociationitem.symbol.md)

</td><td>

</td><td>

{ type: [ELIB\_SymbolType](./pro-api.elib_symboltype.md)<!-- -->; uuid: string; libraryUuid: string; }

</td><td>

符号

</td></tr>
<tr><td>

[symbolType](./pro-api.ilib_deviceassociationitem.symboltype.md)

</td><td>

</td><td>

[ELIB\_SymbolType](./pro-api.elib_symboltype.md)

</td><td>

符号类型

</td></tr>
<tr><td>

[symbolUuid](./pro-api.ilib_deviceassociationitem.symboluuid.md)

</td><td>

</td><td>

string

</td><td>

符号 UUID

</td></tr>
</tbody></table>
