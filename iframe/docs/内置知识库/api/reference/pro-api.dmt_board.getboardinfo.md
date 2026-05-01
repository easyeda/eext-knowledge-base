---
prev: false
next: false
---


[Home](./pro-api.md) &gt; [DMT\_Board](./pro-api.dmt_board.md) &gt; [getBoardInfo](./pro-api.dmt_board.getboardinfo.md)

# DMT\_Board.getBoardInfo() method

获取板子的详细属性

## 签名

```typescript
getBoardInfo(boardName: string): Promise<IDMT_BoardItem | undefined>;
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

boardName


</td><td>

string


</td><td>

板子名称


</td></tr>
</tbody></table>



## 返回值

Promise&lt;[IDMT\_BoardItem](./pro-api.idmt_boarditem.md) \| undefined&gt;

板子的详细属性，如若为 `undefined` 则获取失败
