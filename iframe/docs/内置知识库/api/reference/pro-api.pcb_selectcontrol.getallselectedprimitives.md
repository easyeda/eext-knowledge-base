---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_SelectControl](./pro-api.pcb_selectcontrol.md) &gt; [getAllSelectedPrimitives](./pro-api.pcb_selectcontrol.getallselectedprimitives.md)

# PCB\_SelectControl.getAllSelectedPrimitives() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

查询所有已选中图元的图元对象

## 签名

```typescript
getAllSelectedPrimitives(): Promise<Array<IPCB_Primitive>>;
```

## 返回值

Promise&lt;Array&lt;[IPCB\_Primitive](./pro-api.ipcb_primitive.md)<!-- -->&gt;&gt;

所有已选中图元的图元对象
