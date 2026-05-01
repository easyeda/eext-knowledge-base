# PCB设计过孔盖油和开窗

‌&emsp;&emsp;‌过孔盖油和过孔开窗是PCB制造过程中，两种不同的过孔处理工艺，主要区别在于是否覆盖阻焊层（绿油）。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/via-cover-oil/via-cover-oil_20251124_165603.png"  style="border:2px solid gray" width="1400"></center>

‌&emsp;&emsp;过孔盖油

- 定义：用阻焊层覆盖过孔开口，形成绝缘保护层。 ‌

- 作用：防止铜氧化、减少焊锡流入过孔，避免焊接缺陷。 ‌

- 优点：防止氧化，通过阻焊层覆盖过孔开口，隔绝空气和湿气，保护铜表面不被氧化，减少信号传输损耗。降低焊锡溢出，阻焊层可减少焊接时焊料流入过孔，避免焊料过多影响其他器件或导致短路。

‌&emsp;&emsp;过孔开窗

- 定义：移除过孔上方的阻焊层，使铜表面完全暴露。 ‌

- 作用：提高散热效率（焊锡可进入过孔），但易氧化和短路。 ‌

- 优点： ‌提高散热，裸露的铜表面可增强散热能力，焊锡可进入过孔降低热阻。增加载流能力，外露铜箔能承受更大电流，适合高功率设计。便于测试，外露铜箔可作为测试点，方便电路检测。

‌&emsp;&emsp;过孔盖油和开窗设置，这里以12/24mil（内径/外径）的过孔进行演示。

- 设计规则（全局设置）

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/via-cover-oil/via-cover-oil_20251124_171012.png"  style="border:2px solid gray" width="1400"></center>

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/via-cover-oil/via-cover-oil_20251124_174856.png"  style="border:2px solid gray" width="1400"></center>

‌&emsp;&emsp;在PCB设计规则的阻焊扩展中，找到过孔，当扩展小于-（外径-内径）/2时，即-（24mil-12mil）/2，-6mli时，过孔被完全盖油住。大于-6mil时，过孔开始开窗；到0mil时，过孔完全开窗；大于0mil时，外扩部分也不会覆盖有阻焊油墨。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/via-cover-oil/via-cover-oil_20251124_172328.png"  style="border:2px solid gray" width="1400"></center>

- 右侧属性面板（单独设置）

‌&emsp;&emsp;选中过孔后，可以单独对此过孔进行设置，在右侧属性面板里，找到阻焊/助焊扩展，修改成自定义，当扩展小于-（外径-内径）/2时，即-（24mil-12mil）/2，-6mli时，过孔被完全盖油住。大于-6mil时，过孔开始开窗；到0mil时，过孔完全开窗；大于0mil时，外扩部分也不会覆盖有阻焊油墨。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/via-cover-oil/via-cover-oil_20251124_174129.png"  style="border:2px solid gray" width="1400"></center>
