[Home](./pro-api.md) &gt; [IDMT\_ProjectItem](./pro-api.idmt_projectitem.md)

# IDMT\_ProjectItem interface

工程属性

## 签名

```typescript
interface IDMT_ProjectItem extends IDMT_BriefProjectItem
```
**扩展自：**[IDMT\_BriefProjectItem](./pro-api.idmt_briefprojectitem.md)

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

[collaborationMode?](./pro-api.idmt_projectitem.collaborationmode.md)

</td><td>

</td><td>

[EDMT\_ProjectCollaborationMode](./pro-api.edmt_projectcollaborationmode.md)

</td><td>

_（可选）_ 工程协作模式

</td></tr>
<tr><td>

[data](./pro-api.idmt_projectitem.data.md)

</td><td>

</td><td>

Array&lt;[IDMT\_BoardItem](./pro-api.idmt_boarditem.md) \| [IDMT\_SchematicItem](./pro-api.idmt_schematicitem.md) \| [IDMT\_PcbItem](./pro-api.idmt_pcbitem.md) \| [IDMT\_PanelItem](./pro-api.idmt_panelitem.md)<!-- -->&gt;

</td><td>

工程内文档数据

</td></tr>
<tr><td>

[description?](./pro-api.idmt_projectitem.description.md)

</td><td>

</td><td>

string

</td><td>

_（可选）_ 描述

</td></tr>
<tr><td>

[name](./pro-api.idmt_projectitem.name.md)

</td><td>

</td><td>

string

</td><td>

工程链接名称

</td></tr>
</tbody></table>
