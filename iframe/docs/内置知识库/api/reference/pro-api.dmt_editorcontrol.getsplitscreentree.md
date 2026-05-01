---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_EditorControl](./pro-api.dmt_editorcontrol.md) &gt; [getSplitScreenTree](./pro-api.dmt_editorcontrol.getsplitscreentree.md)

# DMT\_EditorControl.getSplitScreenTree() method

获取编辑器分屏属性树

## 签名

```typescript
getSplitScreenTree(): Promise<IDMT_EditorSplitScreenItem | undefined>;
```

## 返回值

Promise&lt;[IDMT\_EditorSplitScreenItem](./pro-api.idmt_editorsplitscreenitem.md) \| undefined&gt;

编辑器分屏属性树，如若为 `undefined`<!-- -->，则数据获取失败
