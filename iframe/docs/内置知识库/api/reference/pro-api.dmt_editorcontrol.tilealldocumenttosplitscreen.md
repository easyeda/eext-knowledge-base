---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_EditorControl](./pro-api.dmt_editorcontrol.md) &gt; [tileAllDocumentToSplitScreen](./pro-api.dmt_editorcontrol.tilealldocumenttosplitscreen.md)

# DMT\_EditorControl.tileAllDocumentToSplitScreen() method

平铺所有文档

## 签名

```typescript
tileAllDocumentToSplitScreen(): Promise<boolean>;
```

## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

仅当不存在子分屏时可用，将会自动为所有已打开的文档标签页创建分屏
