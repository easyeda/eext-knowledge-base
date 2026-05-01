---
prev: false
next: false
---


[Home](./pro-api.md) &gt; [DMT\_Board](./pro-api.dmt_board.md) &gt; [modifyBoardName](./pro-api.dmt_board.modifyboardname.md)

# DMT\_Board.modifyBoardName() method

修改板子名称

## 签名

```typescript
modifyBoardName(originalBoardName: string, boardName: string): Promise<boolean>;
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

originalBoardName


</td><td>

string


</td><td>

原板子名称


</td></tr>
<tr><td>

boardName


</td><td>

string


</td><td>

新板子名称


</td></tr>
</tbody></table>



## 返回值

Promise&lt;boolean&gt;

是否修改成功
