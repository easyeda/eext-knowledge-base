---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_FileManager](./pro-api.sys_filemanager.md) &gt; [importProjectByProjectFile](./pro-api.sys_filemanager.importprojectbyprojectfile_1.md)

# SYS\_FileManager.importProjectByProjectFile() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

使用工程文件导入工程

## 签名

```typescript
importProjectByProjectFile(projectFile: File, fileType?: 'Altium Designer' | 'Protel', props?: {
        importOption?: ESYS_ImportProjectImportOption;
        viaSolderMaskExpansion?: ESYS_ImportProjectViaSolderMaskExpansion;
        boardOutlineSource?: ESYS_ImportProjectBoardOutlineSource;
        schematicObjectStyle?: ESYS_ImportProjectSchematicObjectStyle;
        associateFootprint?: boolean;
        associate3DModel?: boolean;
        importFootprintNotesLayer?: boolean;
    }, saveTo?: {
        operation: 'New Project';
        newProjectOwnerTeamUuid: IDMT_TeamItem['uuid'];
        newProjectOwnerFolderUuid?: IDMT_FolderItem['uuid'];
        newProjectName?: string;
        newProjectFriendlyName?: string;
        newProjectDescription?: string;
        newProjectCollaborationMode?: EDMT_ProjectCollaborationMode;
    } | {
        operation: 'Existing Project';
        existingProjectUuid: IDMT_BriefProjectItem['uuid'];
    }, librariesImportSetting?: {
        ownerTeamUuid: IDMT_TeamItem['uuid'];
        createDeviceForSingleSymbol?: boolean;
    }): Promise<IDMT_BriefProjectItem | undefined>;
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

projectFile

</td><td>

File

</td><td>

工程文件

</td></tr>
<tr><td>

fileType

</td><td>

'Altium Designer' \| 'Protel'

</td><td>

_（可选）_ 文件类型

</td></tr>
<tr><td>

props

</td><td>

{ importOption?: [ESYS\_ImportProjectImportOption](./pro-api.esys_importprojectimportoption.md)<!-- -->; viaSolderMaskExpansion?: [ESYS\_ImportProjectViaSolderMaskExpansion](./pro-api.esys_importprojectviasoldermaskexpansion.md)<!-- -->; boardOutlineSource?: [ESYS\_ImportProjectBoardOutlineSource](./pro-api.esys_importprojectboardoutlinesource.md)<!-- -->; schematicObjectStyle?: [ESYS\_ImportProjectSchematicObjectStyle](./pro-api.esys_importprojectschematicobjectstyle.md)<!-- -->; associateFootprint?: boolean; associate3DModel?: boolean; importFootprintNotesLayer?: boolean; }

</td><td>

_（可选）_ 导入参数，参考 EDA 前端 \*\*导入\*\* 窗口内的配置项

</td></tr>
<tr><td>

saveTo

</td><td>

{ operation: 'New Project'; newProjectOwnerTeamUuid: [IDMT\_TeamItem](./pro-api.idmt_teamitem.md)<!-- -->\['uuid'\]; newProjectOwnerFolderUuid?: [IDMT\_FolderItem](./pro-api.idmt_folderitem.md)<!-- -->\['uuid'\]; newProjectName?: string; newProjectFriendlyName?: string; newProjectDescription?: string; newProjectCollaborationMode?: [EDMT\_ProjectCollaborationMode](./pro-api.edmt_projectcollaborationmode.md)<!-- -->; } \| { operation: 'Existing Project'; existingProjectUuid: [IDMT\_BriefProjectItem](./pro-api.idmt_briefprojectitem.md)<!-- -->\['uuid'\]; }

</td><td>

_（可选）_ 保存到工程参数

</td></tr>
<tr><td>

librariesImportSetting

</td><td>

{ ownerTeamUuid: [IDMT\_TeamItem](./pro-api.idmt_teamitem.md)<!-- -->\['uuid'\]; createDeviceForSingleSymbol?: boolean; }

</td><td>

_(Optional)_

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[IDMT\_BriefProjectItem](./pro-api.idmt_briefprojectitem.md) \| undefined&gt;

导入的工程的简略工程属性

## 备注

暂不支持提取库的相关配置，如果需求提取库，将会按照默认配置提取
