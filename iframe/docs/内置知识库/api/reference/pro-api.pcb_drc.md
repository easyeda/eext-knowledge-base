[Home](./pro-api.md) &gt; [PCB\_Drc](./pro-api.pcb_drc.md)

# PCB\_Drc class

PCB &amp; 封装 / 设计规则检查（DRC）类

## 签名

```typescript
declare class PCB_Drc
```

## 备注

检查、设定 DRC 规则

## 方法

<table><thead><tr><th>

方法名

</th><th>

修饰符

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

[addNetToEqualLengthNetGroup(equalLengthNetGroupName, net)](./pro-api.pcb_drc.addnettoequallengthnetgroup.md)

</td><td>

</td><td>

**_(BETA)_** 将网络添加到等长网络组

</td></tr>
<tr><td>

[addNetToNetClass(netClassName, net)](./pro-api.pcb_drc.addnettonetclass.md)

</td><td>

</td><td>

**_(BETA)_** 将网络添加到网络类

</td></tr>
<tr><td>

[addPadPairToPadPairGroup(padPairGroupName, padPair)](./pro-api.pcb_drc.addpadpairtopadpairgroup.md)

</td><td>

</td><td>

**_(BETA)_** 将焊盘对添加到焊盘对组

</td></tr>
<tr><td>

[check(strict, userInterface, includeVerboseError)](./pro-api.pcb_drc.check.md)

</td><td>

</td><td>

**_(BETA)_** 检查 DRC

</td></tr>
<tr><td>

[check(strict, userInterface, includeVerboseError)](./pro-api.pcb_drc.check_1.md)

</td><td>

</td><td>

**_(BETA)_** 检查 DRC

</td></tr>
<tr><td>

[createDifferentialPair(differentialPairName, positiveNet, negativeNet)](./pro-api.pcb_drc.createdifferentialpair.md)

</td><td>

</td><td>

**_(BETA)_** 创建差分对

</td></tr>
<tr><td>

[createEqualLengthNetGroup(equalLengthNetGroupName, nets, color)](./pro-api.pcb_drc.createequallengthnetgroup.md)

</td><td>

</td><td>

**_(BETA)_** 创建等长网络组

</td></tr>
<tr><td>

[createNetClass(netClassName, nets, color)](./pro-api.pcb_drc.createnetclass.md)

</td><td>

</td><td>

**_(BETA)_** 创建网络类

</td></tr>
<tr><td>

[createPadPairGroup(padPairGroupName, padPairs)](./pro-api.pcb_drc.createpadpairgroup.md)

</td><td>

</td><td>

**_(BETA)_** 创建焊盘对组

</td></tr>
<tr><td>

[deleteDifferentialPair(differentialPairName)](./pro-api.pcb_drc.deletedifferentialpair.md)

</td><td>

</td><td>

**_(BETA)_** 删除差分对

</td></tr>
<tr><td>

[deleteEqualLengthNetGroup(equalLengthNetGroupName)](./pro-api.pcb_drc.deleteequallengthnetgroup.md)

</td><td>

</td><td>

**_(BETA)_** 删除等长网络组

</td></tr>
<tr><td>

[deleteNetClass(netClassName)](./pro-api.pcb_drc.deletenetclass.md)

</td><td>

</td><td>

**_(BETA)_** 删除网络类

</td></tr>
<tr><td>

[deletePadPairGroup(padPairGroupName)](./pro-api.pcb_drc.deletepadpairgroup.md)

</td><td>

</td><td>

**_(BETA)_** 删除焊盘对组

</td></tr>
<tr><td>

[deleteRuleConfiguration(configurationName)](./pro-api.pcb_drc.deleteruleconfiguration.md)

</td><td>

</td><td>

**_(BETA)_** 删除设计规则配置

</td></tr>
<tr><td>

[getAllDifferentialPairs()](./pro-api.pcb_drc.getalldifferentialpairs.md)

</td><td>

</td><td>

**_(BETA)_** 获取所有差分对的详细属性

</td></tr>
<tr><td>

[getAllEqualLengthNetGroups()](./pro-api.pcb_drc.getallequallengthnetgroups.md)

</td><td>

</td><td>

**_(BETA)_** 获取所有等长网络组的详细属性

</td></tr>
<tr><td>

[getAllNetClasses()](./pro-api.pcb_drc.getallnetclasses.md)

</td><td>

</td><td>

**_(BETA)_** 获取所有网络类的详细属性

</td></tr>
<tr><td>

[getAllPadPairGroups()](./pro-api.pcb_drc.getallpadpairgroups.md)

</td><td>

</td><td>

**_(BETA)_** 获取所有焊盘对组的详细属性

</td></tr>
<tr><td>

[getAllRuleConfigurations(includeSystem)](./pro-api.pcb_drc.getallruleconfigurations.md)

</td><td>

</td><td>

**_(BETA)_** 获取所有设计规则配置

</td></tr>
<tr><td>

[getCurrentRuleConfiguration()](./pro-api.pcb_drc.getcurrentruleconfiguration.md)

</td><td>

</td><td>

**_(BETA)_** 获取当前设计规则配置

</td></tr>
<tr><td>

[getCurrentRuleConfigurationName()](./pro-api.pcb_drc.getcurrentruleconfigurationname.md)

</td><td>

</td><td>

获取当前设计规则配置名称

</td></tr>
<tr><td>

[getDefaultRuleConfigurationName()](./pro-api.pcb_drc.getdefaultruleconfigurationname.md)

</td><td>

</td><td>

**_(BETA)_** 获取新建 PCB 默认设计规则配置的名称

</td></tr>
<tr><td>

[getNetByNetRules()](./pro-api.pcb_drc.getnetbynetrules.md)

</td><td>

</td><td>

**_(BETA)_** 获取网络-网络规则

</td></tr>
<tr><td>

[getNetRules()](./pro-api.pcb_drc.getnetrules.md)

</td><td>

</td><td>

**_(BETA)_** 获取网络规则

</td></tr>
<tr><td>

[getPadPairGroupMinWireLength(padPairGroupName)](./pro-api.pcb_drc.getpadpairgroupminwirelength.md)

</td><td>

</td><td>

**_(BETA)_** 获取焊盘对组最短导线长度

</td></tr>
<tr><td>

[getRegionRules()](./pro-api.pcb_drc.getregionrules.md)

</td><td>

</td><td>

**_(BETA)_** 获取区域规则

</td></tr>
<tr><td>

[getRuleConfiguration(configurationName)](./pro-api.pcb_drc.getruleconfiguration.md)

</td><td>

</td><td>

获取指定设计规则配置

</td></tr>
<tr><td>

[modifyDifferentialPairName(originalDifferentialPairName, differentialPairName)](./pro-api.pcb_drc.modifydifferentialpairname.md)

</td><td>

</td><td>

**_(BETA)_** 修改差分对的名称

</td></tr>
<tr><td>

[modifyDifferentialPairNegativeNet(differentialPairName, negativeNet)](./pro-api.pcb_drc.modifydifferentialpairnegativenet.md)

</td><td>

</td><td>

**_(BETA)_** 修改差分对负网络

</td></tr>
<tr><td>

[modifyDifferentialPairPositiveNet(differentialPairName, positiveNet)](./pro-api.pcb_drc.modifydifferentialpairpositivenet.md)

</td><td>

</td><td>

**_(BETA)_** 修改差分对正网络

</td></tr>
<tr><td>

[modifyEqualLengthNetGroupName(originalEqualLengthNetGroupName, equalLengthNetGroupName)](./pro-api.pcb_drc.modifyequallengthnetgroupname.md)

</td><td>

</td><td>

**_(BETA)_** 修改等长网络组的名称

</td></tr>
<tr><td>

[modifyNetClassName(originalNetClassName, netClassName)](./pro-api.pcb_drc.modifynetclassname.md)

</td><td>

</td><td>

**_(BETA)_** 修改网络类的名称

</td></tr>
<tr><td>

[modifyPadPairGroupName(originalPadPairGroupName, padPairGroupName)](./pro-api.pcb_drc.modifypadpairgroupname.md)

</td><td>

</td><td>

**_(BETA)_** 修改焊盘对组的名称

</td></tr>
<tr><td>

[overwriteCurrentRuleConfiguration(ruleConfiguration)](./pro-api.pcb_drc.overwritecurrentruleconfiguration.md)

</td><td>

</td><td>

**_(BETA)_** 覆写目前规则配置

</td></tr>
<tr><td>

[overwriteNetByNetRules(netByNetRules)](./pro-api.pcb_drc.overwritenetbynetrules.md)

</td><td>

</td><td>

**_(BETA)_** 覆写网络-网络规则

</td></tr>
<tr><td>

[overwriteNetRules(netRules)](./pro-api.pcb_drc.overwritenetrules.md)

</td><td>

</td><td>

**_(BETA)_** 覆写网络规则

</td></tr>
<tr><td>

[overwriteRegionRules(regionRules)](./pro-api.pcb_drc.overwriteregionrules.md)

</td><td>

</td><td>

**_(BETA)_** 覆写区域规则

</td></tr>
<tr><td>

[removeNetFromEqualLengthNetGroup(equalLengthNetGroupName, net)](./pro-api.pcb_drc.removenetfromequallengthnetgroup.md)

</td><td>

</td><td>

**_(BETA)_** 从等长网络组中移除网络

</td></tr>
<tr><td>

[removeNetFromNetClass(netClassName, net)](./pro-api.pcb_drc.removenetfromnetclass.md)

</td><td>

</td><td>

**_(BETA)_** 从网络类中移除网络

</td></tr>
<tr><td>

[removePadPairFromPadPairGroup(padPairGroupName, padPair)](./pro-api.pcb_drc.removepadpairfrompadpairgroup.md)

</td><td>

</td><td>

**_(BETA)_** 从焊盘对组中移除焊盘对

</td></tr>
<tr><td>

[renameRuleConfiguration(originalConfigurationName, configurationName)](./pro-api.pcb_drc.renameruleconfiguration.md)

</td><td>

</td><td>

**_(BETA)_** 重命名设计规则配置

</td></tr>
<tr><td>

[saveRuleConfiguration(ruleConfiguration, configurationName, allowOverwrite)](./pro-api.pcb_drc.saveruleconfiguration.md)

</td><td>

</td><td>

**_(BETA)_** 保存设计规则配置

</td></tr>
<tr><td>

[setAsDefaultRuleConfiguration(configurationName)](./pro-api.pcb_drc.setasdefaultruleconfiguration.md)

</td><td>

</td><td>

**_(BETA)_** 设置为新建 PCB 默认设计规则配置

</td></tr>
</tbody></table>
