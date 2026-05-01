---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_EditorControl](./pro-api.dmt_editorcontrol.md) &gt; [activateDocument](./pro-api.dmt_editorcontrol.activatedocument.md)

# DMT\_EditorControl.activateDocument() method

激活文档

## 签名

```typescript
activateDocument(tabId: string): Promise<boolean>;
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

标签页 ID

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

切换到指定文档的标签页，并将输入焦点置于其中
