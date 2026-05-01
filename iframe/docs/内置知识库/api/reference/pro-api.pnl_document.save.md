---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PNL\_Document](./pro-api.pnl_document.md) &gt; [save](./pro-api.pnl_document.save.md)

# PNL\_Document.save() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

保存文档

## 签名

```typescript
save(): Promise<boolean>;
```

## 返回值

Promise&lt;boolean&gt;

保存操作是否成功，保存失败、上传失败等错误均返回 `false`
