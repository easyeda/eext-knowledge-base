---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Schematic](./pro-api.dmt_schematic.md) &gt; [modifySchematicPageTitleBlock](./pro-api.dmt_schematic.modifyschematicpagetitleblock.md)

# DMT\_Schematic.modifySchematicPageTitleBlock() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改原理图图页明细表

## 签名

```typescript
modifySchematicPageTitleBlock(showTitleBlock?: boolean, titleBlockData?: {
        [key: string]: {
            showTitle?: boolean;
            showValue?: boolean;
            value?: any;
        };
    }): Promise<boolean>;
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

showTitleBlock

</td><td>

boolean

</td><td>

_（可选）_ 是否显示明细表，不定义将保持当前状态

</td></tr>
<tr><td>

titleBlockData

</td><td>

\{ \[key: string\]: \{ showTitle?: boolean; showValue?: boolean; value?: any; \}; \}

</td><td>

_（可选）_ 需要修改的明细项及其修改的值

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

修改操作是否成功，如若未传入 `showTitleBlock` 和 `titleBlockData` 将返回 `false`<!-- -->；请注意，如若存在无法识别的明细项但程序并未出错，将返回 `true` 的结果，因为无法识别的明细项被忽略

## 备注

`titleBlockData` 仅需要传入任何需要修改的明细项作为 `key`<!-- -->，并传入其需要修改的值，任何无法识别的明细项将被忽略，任何未传入的项和值将保持默认状态
