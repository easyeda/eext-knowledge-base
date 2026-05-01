---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_Document](./pro-api.sch_document.md) &gt; [save](./pro-api.sch_document.save.md)

# SCH\_Document.save() method

保存文档

## 签名

```typescript
save(): Promise<boolean>;
```

## 返回值

Promise&lt;boolean&gt;

保存操作是否成功，保存失败、上传失败等错误均返回 `false`
