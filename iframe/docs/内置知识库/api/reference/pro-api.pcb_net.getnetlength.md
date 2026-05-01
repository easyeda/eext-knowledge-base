---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Net](./pro-api.pcb_net.md) &gt; [getNetLength](./pro-api.pcb_net.getnetlength.md)

# PCB\_Net.getNetLength() method

获取指定网络的长度

## 签名

```typescript
getNetLength(net: string): Promise<number | undefined>;
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

net

</td><td>

string

</td><td>

网络名称

</td></tr>
</tbody></table>

## 返回值

Promise&lt;number \| undefined&gt;

网络长度，`undefined` 为不存在该网络，`0` 为网络无长度
