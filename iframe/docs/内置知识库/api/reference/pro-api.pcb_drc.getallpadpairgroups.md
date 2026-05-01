---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Drc](./pro-api.pcb_drc.md) &gt; [getAllPadPairGroups](./pro-api.pcb_drc.getallpadpairgroups.md)

# PCB\_Drc.getAllPadPairGroups() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有焊盘对组的详细属性

## 签名

```typescript
getAllPadPairGroups(): Promise<Array<IPCB_PadPairGroupItem>>;
```

## 返回值

Promise&lt;Array&lt;[IPCB\_PadPairGroupItem](./pro-api.ipcb_padpairgroupitem.md)<!-- -->&gt;&gt;

所有焊盘对组的详细属性
