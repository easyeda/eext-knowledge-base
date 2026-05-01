---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [ISYS\_ReactComponentizationDialogReactInstance](./pro-api.isys_reactcomponentizationdialogreactinstance.md) &gt; [createElement](./pro-api.isys_reactcomponentizationdialogreactinstance.createelement.md)

# ISYS\_ReactComponentizationDialogReactInstance.createElement property

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

创建并返回指定类型的新 React 元素

## 签名

```typescript
createElement: <P extends Record<string, unknown>>(type: React.ElementType<P>, props?: P | null, ...children: React.ReactNode[]) => React.ReactElement<P>;
```
