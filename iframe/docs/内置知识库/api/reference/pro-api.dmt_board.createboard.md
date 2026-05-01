---
prev: false
next: false
---


[Home](./pro-api.md) &gt; [DMT\_Board](./pro-api.dmt_board.md) &gt; [createBoard](./pro-api.dmt_board.createboard.md)

# DMT\_Board.createBoard() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建板子

## 签名

```typescript
createBoard(schematicUuid?: string, pcbUuid?: string): Promise<string | undefined>;
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

schematicUuid


</td><td>

string


</td><td>

_（可选）_ 关联原理图 UUID


</td></tr>
<tr><td>

pcbUuid


</td><td>

string


</td><td>

_（可选）_ 关联 PCB UUID


</td></tr>
</tbody></table>



## 返回值

Promise&lt;string \| undefined&gt;

板子名称，如若为 `undefined` 则创建失败
