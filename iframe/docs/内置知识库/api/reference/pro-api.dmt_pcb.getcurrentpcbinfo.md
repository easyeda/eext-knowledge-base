---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Pcb](./pro-api.dmt_pcb.md) &gt; [getCurrentPcbInfo](./pro-api.dmt_pcb.getcurrentpcbinfo.md)

# DMT\_Pcb.getCurrentPcbInfo() method

获取当前 PCB 的详细属性

## 签名

```typescript
getCurrentPcbInfo(): Promise<IDMT_PcbItem | undefined>;
```

## 返回值

Promise&lt;[IDMT\_PcbItem](./pro-api.idmt_pcbitem.md) \| undefined&gt;

PCB 的详细属性，如若为 `undefined` 则获取失败

## 备注

将会获取当前打开且拥有最后输入焦点的 PCB 的详细属性
