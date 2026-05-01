---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_EditorControl](./pro-api.dmt_editorcontrol.md) &gt; [openDocument](./pro-api.dmt_editorcontrol.opendocument.md)

# DMT\_EditorControl.openDocument() method

打开文档

## 签名

```typescript
openDocument(documentUuid: string, splitScreenId?: string): Promise<string | undefined>;
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

documentUuid

</td><td>

string

</td><td>

文档 UUID，此处支持 [IDMT\_SchematicItem.uuid](./pro-api.idmt_schematicitem.uuid.md)<!-- -->、[IDMT\_SchematicPageItem.uuid](./pro-api.idmt_schematicpageitem.uuid.md)<!-- -->、[IDMT\_PcbItem.uuid](./pro-api.idmt_pcbitem.uuid.md)<!-- -->、[IDMT\_PanelItem.uuid](./pro-api.idmt_panelitem.uuid.md) 作为输入

</td></tr>
<tr><td>

splitScreenId

</td><td>

string

</td><td>

_（可选）_ 分屏 ID，即 [DMT\_EditorControl.getSplitScreenTree()](./pro-api.dmt_editorcontrol.getsplitscreentree.md) 方法获取到的 [IDMT\_EditorSplitScreenItem.id](./pro-api.idmt_editorsplitscreenitem.id.md)

</td></tr>
</tbody></table>

## 返回值

Promise&lt;string \| undefined&gt;

标签页 ID，如若为 `undefined`<!-- -->，则打开文档失败
