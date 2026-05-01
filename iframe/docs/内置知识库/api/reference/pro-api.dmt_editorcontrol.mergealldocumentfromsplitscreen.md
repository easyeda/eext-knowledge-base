---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_EditorControl](./pro-api.dmt_editorcontrol.md) &gt; [mergeAllDocumentFromSplitScreen](./pro-api.dmt_editorcontrol.mergealldocumentfromsplitscreen.md)

# DMT\_EditorControl.mergeAllDocumentFromSplitScreen() method

合并所有分屏

## 签名

```typescript
mergeAllDocumentFromSplitScreen(): Promise<boolean>;
```

## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

仅当存在子分屏时可用，将会取消所有子分屏，并将所有文档标签页合并到初始分屏内
