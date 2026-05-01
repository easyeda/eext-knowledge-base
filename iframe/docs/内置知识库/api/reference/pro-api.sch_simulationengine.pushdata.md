---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_SimulationEngine](./pro-api.sch_simulationengine.md) &gt; [pushData](./pro-api.sch_simulationengine.pushdata.md)

# SCH\_SimulationEngine.pushData() method

向仿真内核发送数据

## 签名

```typescript
pushData(eventType: ESCH_DynamicSimulationEnginePushEventType | ESCH_SpiceSimulationEnginePushEventType, props: {
        [key: string]: any;
    }): void;
```

## 参数名

<table><thead><tr><th>

参数

</th><th>

类型

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

eventType

</td><td>

[ESCH\_DynamicSimulationEnginePushEventType](./pro-api.esch_dynamicsimulationenginepusheventtype.md) \| [ESCH\_SpiceSimulationEnginePushEventType](./pro-api.esch_spicesimulationenginepusheventtype.md)

</td><td>

事件类型

</td></tr>
<tr><td>

props

</td><td>

\{ \[key: string\]: any; \}

</td><td>

数据

</td></tr>
</tbody></table>

## 返回值

void
