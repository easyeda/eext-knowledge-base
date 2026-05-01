---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_Document](./pro-api.sch_document.md) &gt; [importChanges](./pro-api.sch_document.importchanges.md)

# SCH\_Document.importChanges() method

从 PCB 导入变更

## 签名

```typescript
importChanges(): Promise<boolean>;
```

## 返回值

Promise&lt;boolean&gt;

导入操作是否成功，导入失败或游离原理图返回 `false`
