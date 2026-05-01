---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [LIB\_Symbol](./pro-api.lib_symbol.md) &gt; [getRenderImage](./pro-api.lib_symbol.getrenderimage.md)

# LIB\_Symbol.getRenderImage() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取符号渲染图

## 签名

```typescript
getRenderImage(source: {
        symbolUuid: string;
        libraryUuid: string;
        subPartName?: string;
    }): Promise<Blob | undefined>;
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

source

</td><td>

\{ symbolUuid: string; libraryUuid: string; subPartName?: string; \}

</td><td>

</td></tr>
</tbody></table>

## 返回值

Promise&lt;Blob \| undefined&gt;

符号渲染图
