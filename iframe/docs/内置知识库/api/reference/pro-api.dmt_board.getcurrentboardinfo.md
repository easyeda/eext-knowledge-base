---
prev: false
next: false
---


[Home](./pro-api.md) &gt; [DMT\_Board](./pro-api.dmt_board.md) &gt; [getCurrentBoardInfo](./pro-api.dmt_board.getcurrentboardinfo.md)

# DMT\_Board.getCurrentBoardInfo() method

获取当前板子的详细属性

## 签名

```typescript
getCurrentBoardInfo(): Promise<IDMT_BoardItem | undefined>;
```


## 返回值

Promise&lt;[IDMT\_BoardItem](./pro-api.idmt_boarditem.md) \| undefined&gt;

板子的详细属性，如若为 `undefined` 则获取失败

## 备注

将会获取当前打开且拥有最后输入焦点的原理图、PCB 所关联的板子的详细属性
