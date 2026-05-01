---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_Document](./pro-api.sch_document.md) &gt; [autoRouting](./pro-api.sch_document.autorouting.md)

# SCH\_Document.autoRouting() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

自动布线

## 签名

```typescript
autoRouting(props?: {
        uuids?: Array<string>;
        netlist?: {
            component: {
                [uniqueId: string]: {
                    pinInfoMap: {
                        [key: string]: {
                            name: string;
                            number: string;
                            net: string;
                            props: {
                                'Pin Number': string;
                            };
                        };
                    };
                };
            };
        };
        designatorDeviceTypeMap?: {
            [designator: string]: 'resistor' | 'capacitor' | 'inductive' | 'diode' | 'triode' | 'oscillator' | 'chip' | 'otherDevice';
        };
    }): Promise<any>;
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

props

</td><td>

{ uuids?: Array&lt;string&gt;; netlist?: { component: { \[uniqueId: string\]: { pinInfoMap: { \[key: string\]: { name: string; number: string; net: string; props: { 'Pin Number': string; }; }; }; }; }; }; designatorDeviceTypeMap?: { \[designator: string\]: 'resistor' \| 'capacitor' \| 'inductive' \| 'diode' \| 'triode' \| 'oscillator' \| 'chip' \| 'otherDevice'; }; }

</td><td>

_（可选）_ 自动布线参数

</td></tr>
</tbody></table>

## 返回值

Promise&lt;any&gt;

结果
