---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_EditorControl](./pro-api.dmt_editorcontrol.md) &gt; [getCurrentRenderedAreaImage](./pro-api.dmt_editorcontrol.getcurrentrenderedareaimage.md)

# DMT\_EditorControl.getCurrentRenderedAreaImage() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取画布渲染区域图像

## 签名

```typescript
getCurrentRenderedAreaImage(tabId?: string): Promise<Blob | undefined>;
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

_（可选）_ 标签页 ID，如若未传入，则获取最后输入焦点的画布

</td></tr>
</tbody></table>

## 返回值

Promise&lt;Blob \| undefined&gt;

- 画布渲染区域的 Blob 格式图像数据
