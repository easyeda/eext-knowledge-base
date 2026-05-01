---
prev: false
next: false
---


[Home](./pro-api.md) &gt; [DMT\_Board](./pro-api.dmt_board.md) &gt; [deleteBoard](./pro-api.dmt_board.deleteboard.md)

# DMT\_Board.deleteBoard() method

删除板子

## 签名

```typescript
deleteBoard(boardName: string): Promise<boolean>;
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

Promise&lt;boolean&gt;

操作是否成功

## 备注

如若指定板子不存在，接口将返回 `false` 的结果，表示操作失败
