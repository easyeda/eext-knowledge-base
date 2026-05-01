# 差分对标识

嘉立创EDA专业版支持在原理图设计阶段对差分对进行标记与定义。

### 功能入口

1. **顶部菜单栏**：选择“放置” > “差分对标识”。

   ![图 0](/storage/images/cn/schematic/place-differential-pairs-flag/place-differential-pairs-flag_20251201_094418.png)

2. **顶部工具栏**：点击“差分对标识”图标。

   ![图 1](/storage/images/cn/schematic/place-differential-pairs-flag/place-differential-pairs-flag_20251201_095048.png)

# 操作步骤

1. 通过顶部菜单栏选择“放置” > “差分对标识”。
   ![图 2](/storage/images/cn/schematic/place-differential-pairs-flag/place-differential-pairs-flag_20251201_095839.png)

2. 将差分对标识放置于原理图中的目标差分对网络上。
   ![图 3](/storage/images/cn/schematic/place-differential-pairs-flag/place-differential-pairs-flag_20251201_100251.png)

3. 进入“设计” > “差分对管理器”。系统将依据画布中放置的差分对标识，自动识别并生成差分对列表。
   **识别规则**：网络名称前缀相同，且后缀分别为“+”、“-”或“_P”、“_N”。
   ![图 4](/storage/images/cn/schematic/place-differential-pairs-flag/place-differential-pairs-flag_20251201_100348.png)

4. 执行原理图转 PCB 操作时，在“导入修改信息”弹窗中勾选“包含设计规则”选项。EDA 将生成差分对相关的变更项，确认应用后，差分对信息将同步至 PCB 设计中。
   ![图 5](/storage/images/cn/schematic/place-differential-pairs-flag/place-differential-pairs-flag_20251201_100616.png)

# 注意事项

1. 差分对标识的“名称”属性仅用于画布上的可视化显示，不影响生成的差分对信息。
2. 自定义的差分对名称允许与自动生成的差分对名称重复。
