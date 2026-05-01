---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Team](./pro-api.dmt_team.md) &gt; [getCurrentTeamInfo](./pro-api.dmt_team.getcurrentteaminfo.md)

# DMT\_Team.getCurrentTeamInfo() method

获取当前团队的详细属性

## 签名

```typescript
getCurrentTeamInfo(): Promise<IDMT_TeamItem | undefined>;
```

## 返回值

Promise&lt;[IDMT\_TeamItem](./pro-api.idmt_teamitem.md) \| undefined&gt;

团队的详细属性，如若为 `undefined` 则获取失败

## 备注

将会获取当前打开且拥有最后输入焦点的原理图、PCB、面板所关联的工程的所属团队的详细属性
