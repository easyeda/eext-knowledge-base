---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_SelectControl](./pro-api.dmt_selectcontrol.md) &gt; [getCurrentDocumentInfo](./pro-api.dmt_selectcontrol.getcurrentdocumentinfo.md)

# DMT\_SelectControl.getCurrentDocumentInfo() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取当前文档的属性

## 签名

```typescript
getCurrentDocumentInfo(): Promise<IDMT_EditorDocumentItem | undefined>;
```

## 返回值

Promise&lt;[IDMT\_EditorDocumentItem](./pro-api.idmt_editordocumentitem.md) \| undefined&gt;

文档类型、UUID、所属工程的 UUID、所属库的 UUID 组成的对象，如若为 `undefined` 则获取失败

## 备注

将会获取当前打开且拥有最后输入焦点的文档的文档类型、UUID、所属工程的 UUID 或所属库的 UUID
