---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Drc](./pro-api.pcb_drc.md) &gt; [getNetByNetRules](./pro-api.pcb_drc.getnetbynetrules.md)

# PCB\_Drc.getNetByNetRules() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取网络-网络规则

## 签名

```typescript
getNetByNetRules(): Promise<{
        [key: string]: any;
    }>;
```

## 返回值

Promise&lt;{ \[key: string\]: any; }&gt;

当前 PCB 的所有网络-网络规则
