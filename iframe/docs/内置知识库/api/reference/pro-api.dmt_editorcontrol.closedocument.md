---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_EditorControl](./pro-api.dmt_editorcontrol.md) &gt; [closeDocument](./pro-api.dmt_editorcontrol.closedocument.md)

# DMT\_EditorControl.closeDocument() method

关闭文档

## 签名

```typescript
closeDocument(tabId: string): Promise<boolean>;
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

tabId

</td><td>

string

</td><td>

标签页 ID，此处支持 [IDMT\_SchematicPageItem.uuid](./pro-api.idmt_schematicpageitem.uuid.md)<!-- -->、[IDMT\_PcbItem.uuid](./pro-api.idmt_pcbitem.uuid.md)<!-- -->、[IDMT\_PanelItem.uuid](./pro-api.idmt_panelitem.uuid.md) 作为输入

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

如若文档尚未保存，执行此操作将会直接丢失所有未保存的数据，请在修改操作完成后首先执行 [SCH\_Document.save()](./pro-api.sch_document.save.md)<!-- -->、[PCB\_Document.save()](./pro-api.pcb_document.save.md)<!-- -->、[PNL\_Document.save()](./pro-api.pnl_document.save.md) 保存数据
