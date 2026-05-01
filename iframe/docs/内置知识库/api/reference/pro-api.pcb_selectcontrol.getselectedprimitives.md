---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_SelectControl](./pro-api.pcb_selectcontrol.md) &gt; [getSelectedPrimitives](./pro-api.pcb_selectcontrol.getselectedprimitives.md)

# PCB\_SelectControl.getSelectedPrimitives() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

> 警告：此 API 现已弃用。
>
> 请使用 [getAllSelectedPrimitives](./pro-api.pcb_selectcontrol.getallselectedprimitives.md) 替代

查询选中图元的所有参数

## 签名

```typescript
getSelectedPrimitives(): Promise<Array<Object>>;
```

## 返回值

Promise&lt;Array&lt;Object&gt;&gt;

选中图元的所有参数
