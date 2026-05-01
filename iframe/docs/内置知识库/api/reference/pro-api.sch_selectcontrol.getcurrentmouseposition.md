---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_SelectControl](./pro-api.sch_selectcontrol.md) &gt; [getCurrentMousePosition](./pro-api.sch_selectcontrol.getcurrentmouseposition.md)

# SCH\_SelectControl.getCurrentMousePosition() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取当前鼠标在画布上的位置

## 签名

```typescript
getCurrentMousePosition(): Promise<{
        x: number;
        y: number;
    } | undefined>;
```

## 返回值

Promise&lt;{ x: number; y: number; } \| undefined&gt;

鼠标在画布上的位置，`undefined` 代表当前鼠标不在画布上
