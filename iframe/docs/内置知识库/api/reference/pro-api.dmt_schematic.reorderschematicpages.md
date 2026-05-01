---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Schematic](./pro-api.dmt_schematic.md) &gt; [reorderSchematicPages](./pro-api.dmt_schematic.reorderschematicpages.md)

# DMT\_Schematic.reorderSchematicPages() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

重新排序原理图图页

## 签名

```typescript
reorderSchematicPages(schematicUuid: string, schematicPageItemsArray: Array<IDMT_SchematicPageItem>): Promise<boolean>;
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

schematicUuid

</td><td>

string

</td><td>

执行排序的图页所关联的原理图 UUID

</td></tr>
<tr><td>

schematicPageItemsArray

</td><td>

Array&lt;[IDMT\_SchematicPageItem](./pro-api.idmt_schematicpageitem.md)<!-- -->&gt;

</td><td>

所有原理图图页属性的数组

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

排序操作是否成功

## 备注

此处源原理图图页属性的数组需要通过 [DMT\_Schematic.getAllSchematicPagesInfo()](./pro-api.dmt_schematic.getallschematicpagesinfo.md) 或其它上游方法取得，完成数组排序后传入
