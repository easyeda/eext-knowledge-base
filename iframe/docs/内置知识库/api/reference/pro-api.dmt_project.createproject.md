---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Project](./pro-api.dmt_project.md) &gt; [createProject](./pro-api.dmt_project.createproject.md)

# DMT\_Project.createProject() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建工程

## 签名

```typescript
createProject(projectFriendlyName: string, projectName?: string, teamUuid?: string, folderUuid?: string, description?: string, collaborationMode?: EDMT_ProjectCollaborationMode): Promise<string | undefined>;
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

projectFriendlyName

</td><td>

string

</td><td>

工程友好名称

</td></tr>
<tr><td>

projectName

</td><td>

string

</td><td>

_（可选）_ 工程名称，不可重复，仅支持字母 `a-zA-Z`<!-- -->、数字 `0-9`<!-- -->、中划线 `-`<!-- -->，如若不指定，则根据工程友好名称自动生成

</td></tr>
<tr><td>

teamUuid

</td><td>

string

</td><td>

_（可选）_ 团队 UUID，如若不指定，则默认为个人；在不存在个人工程的环境下必须指定团队 UUID

</td></tr>
<tr><td>

folderUuid

</td><td>

string

</td><td>

_（可选）_ 文件夹 UUID，如若不指定，则为根文件夹

</td></tr>
<tr><td>

description

</td><td>

string

</td><td>

_（可选）_ 工程描述

</td></tr>
<tr><td>

collaborationMode

</td><td>

[EDMT\_ProjectCollaborationMode](./pro-api.edmt_projectcollaborationmode.md)

</td><td>

_（可选）_ 工程协作模式，如若团队权限无需工程设置协作模式，则该参数将被忽略

</td></tr>
</tbody></table>

## 返回值

Promise&lt;string \| undefined&gt;

工程 UUID，如若为 `undefined` 则创建失败
