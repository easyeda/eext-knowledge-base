---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Net](./pro-api.pcb_net.md) &gt; [getNet](./pro-api.pcb_net.getnet.md)

# PCB\_Net.getNet() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取指定网络的详细信息

## 签名

```typescript
getNet(net: string): Promise<IPCB_NetInfo | undefined>;
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

Promise&lt;[IPCB\_NetInfo](./pro-api.ipcb_netinfo.md) \| undefined&gt;

网络的详细信息, `undefined` 为不存在该网络
