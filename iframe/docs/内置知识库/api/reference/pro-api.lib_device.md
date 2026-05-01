[Home](./pro-api.md) &gt; [LIB\_Device](./pro-api.lib_device.md)

# LIB\_Device class

综合库 / 器件类

## 签名

```typescript
declare class LIB_Device
```

## 方法

<table><thead><tr><th>

方法名

</th><th>

修饰符

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

[copy(deviceUuid, libraryUuid, targetLibraryUuid, targetClassification, newDeviceName)](./pro-api.lib_device.copy.md)

</td><td>

</td><td>

**_(BETA)_** 复制器件

</td></tr>
<tr><td>

[create(libraryUuid, deviceName, classification, association, description, property)](./pro-api.lib_device.create.md)

</td><td>

</td><td>

**_(BETA)_** 创建器件

</td></tr>
<tr><td>

[delete(deviceUuid, libraryUuid)](./pro-api.lib_device.delete.md)

</td><td>

</td><td>

**_(BETA)_** 删除器件

</td></tr>
<tr><td>

[get(deviceUuid, libraryUuid)](./pro-api.lib_device.get.md)

</td><td>

</td><td>

**_(BETA)_** 获取器件的所有属性

</td></tr>
<tr><td>

[getByLcscIds(lcscIds, libraryUuid, allowMultiMatch)](./pro-api.lib_device.getbylcscids.md)

</td><td>

</td><td>

**_(BETA)_** 使用立创 C 编号获取器件

</td></tr>
<tr><td>

[getByLcscIds(lcscIds, libraryUuid, allowMultiMatch)](./pro-api.lib_device.getbylcscids_1.md)

</td><td>

</td><td>

**_(BETA)_** 使用立创 C 编号批量获取器件

</td></tr>
<tr><td>

[modify(deviceUuid, libraryUuid, deviceName, classification, association, description, property)](./pro-api.lib_device.modify.md)

</td><td>

</td><td>

**_(BETA)_** 修改器件

</td></tr>
<tr><td>

[search(key, libraryUuid, classification, symbolType, itemsOfPage, page)](./pro-api.lib_device.search.md)

</td><td>

</td><td>

**_(BETA)_** 搜索器件

</td></tr>
</tbody></table>
