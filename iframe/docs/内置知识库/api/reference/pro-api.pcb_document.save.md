---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Document](./pro-api.pcb_document.md) &gt; [save](./pro-api.pcb_document.save.md)

# PCB\_Document.save() method

保存文档

## 签名

```typescript
save(uuid: string): Promise<boolean>;
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

uuid

</td><td>

string

</td><td>

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

保存操作是否成功，保存失败、上传失败等错误均返回 `false`
