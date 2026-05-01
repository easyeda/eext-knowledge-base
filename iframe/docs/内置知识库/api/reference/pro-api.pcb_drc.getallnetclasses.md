---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Drc](./pro-api.pcb_drc.md) &gt; [getAllNetClasses](./pro-api.pcb_drc.getallnetclasses.md)

# PCB\_Drc.getAllNetClasses() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有网络类的详细属性

## 签名

```typescript
getAllNetClasses(): Promise<Array<IPCB_NetClassItem>>;
```

## 返回值

Promise&lt;Array&lt;[IPCB\_NetClassItem](./pro-api.ipcb_netclassitem.md)<!-- -->&gt;&gt;

所有网络类的详细属性
