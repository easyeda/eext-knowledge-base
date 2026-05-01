---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Drc](./pro-api.pcb_drc.md) &gt; [getAllDifferentialPairs](./pro-api.pcb_drc.getalldifferentialpairs.md)

# PCB\_Drc.getAllDifferentialPairs() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有差分对的详细属性

## 签名

```typescript
getAllDifferentialPairs(): Promise<Array<IPCB_DifferentialPairItem> | {
        [key: string]: any;
    }>;
```

## 返回值

Promise&lt;Array&lt;[IPCB\_DifferentialPairItem](./pro-api.ipcb_differentialpairitem.md)<!-- -->&gt; \| { \[key: string\]: any; }&gt;

所有差分对的详细属性

## 备注

BREAKING CHANGE since EDA v3.4

- 返回值类型更改为对象
