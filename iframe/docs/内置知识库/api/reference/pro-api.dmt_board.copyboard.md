---
prev: false
next: false
---


[Home](./pro-api.md) &gt; [DMT\_Board](./pro-api.dmt_board.md) &gt; [copyBoard](./pro-api.dmt_board.copyboard.md)

# DMT\_Board.copyBoard() method

复制板子

## 签名

```typescript
copyBoard(sourceBoardName: string): Promise<string | undefined>;
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

sourceBoardName


</td><td>

string


</td><td>

源板子名称


</td></tr>
</tbody></table>



## 返回值

Promise&lt;string \| undefined&gt;

新板子名称，如若为 `undefined` 则复制失败
