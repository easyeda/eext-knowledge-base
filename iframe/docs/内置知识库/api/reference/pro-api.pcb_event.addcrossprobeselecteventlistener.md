---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Event](./pro-api.pcb_event.md) &gt; [addCrossProbeSelectEventListener](./pro-api.pcb_event.addcrossprobeselecteventlistener.md)

# PCB\_Event.addCrossProbeSelectEventListener() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

新增交叉选择事件监听

## 签名

```typescript
addCrossProbeSelectEventListener(id: string, callFn: (props: any) => void | Promise<void>): void;
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

id

</td><td>

string

</td><td>

事件 ID，用以防止重复注册事件

</td></tr>
<tr><td>

callFn

</td><td>

(props: any) =&gt; void \| Promise&lt;void&gt;

</td><td>

事件触发时的回调函数

</td></tr>
</tbody></table>

## 返回值

void

## 备注

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`
