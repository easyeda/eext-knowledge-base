---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_ManufactureData](./pro-api.sch_manufacturedata.md) &gt; [getAssemblyVariantsConfigs](./pro-api.sch_manufacturedata.getassemblyvariantsconfigs.md)

# SCH\_ManufactureData.getAssemblyVariantsConfigs() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取装配体变量配置列表

## 签名

```typescript
getAssemblyVariantsConfigs(): Promise<Array<{
        text: string;
        value: string;
    }>>;
```

## 返回值

Promise&lt;Array&lt;{ text: string; value: string; }&gt;&gt;

装配体变量配置列表
