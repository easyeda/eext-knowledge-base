[Home](./pro-api.md) &gt; [SCH\_Event](./pro-api.sch_event.md)

# SCH\_Event class

原理图 &amp; 符号 / 事件类

## 签名

```typescript
declare class SCH_Event
```

## 备注

注册事件回调

## 方法

<table><thead><tr><th>

方法名

</th><th>

修饰符

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

[addMouseEventListener(id, eventType, callFn, onlyOnce)](./pro-api.sch_event.addmouseeventlistener.md)

</td><td>

</td><td>

新增鼠标事件监听

</td></tr>
<tr><td>

[addPrimitiveEventListener(id, eventType, callFn, onlyOnce)](./pro-api.sch_event.addprimitiveeventlistener.md)

</td><td>

</td><td>

**_(BETA)_** 新增图元事件监听

</td></tr>
<tr><td>

[addSimulationEnginePullEventListener(id, eventType, callFn)](./pro-api.sch_event.addsimulationenginepulleventlistener.md)

</td><td>

</td><td>

**_(BETA)_** 注册仿真引擎拉取事件监听

</td></tr>
<tr><td>

[isEventListenerAlreadyExist(id)](./pro-api.sch_event.iseventlisteneralreadyexist.md)

</td><td>

</td><td>

查询事件监听是否存在

</td></tr>
<tr><td>

[removeEventListener(id)](./pro-api.sch_event.removeeventlistener.md)

</td><td>

</td><td>

移除事件监听

</td></tr>
</tbody></table>
