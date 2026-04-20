/**
 * AI 知识库助手 — 嘉立创EDA 扩展插件
 */

const PLUGIN_TAG = '[AI-Assistant]';

// eslint-disable-next-line unused-imports/no-unused-vars
export function activate(status?: 'onStartupFinished', arg?: string): void {}

export async function openAIAssistant(): Promise<void> {
	try {
		await eda.sys_IFrame.openIFrame('/iframe/index.html', 700, 600, 'ai-assistant', {
			title: 'AI 知识库助手',
			maximizeButton: true,
			minimizeButton: true,
		});
	}
	catch (err) {
		console.error(PLUGIN_TAG, 'Failed to open AI Assistant:', err);
	}
}

export async function openAISettings(): Promise<void> {
	try {
		await eda.sys_IFrame.openIFrame('/iframe/settings.html', 420, 400, 'ai-settings', {
			title: '设置',
		});
	}
	catch (err) {
		console.error(PLUGIN_TAG, 'Failed to open settings:', err);
	}
}

export function about(): void {
	eda.sys_Dialog.showInformationMessage(
		'AI 知识库助手 v1.1.0\n\n导入 Markdown 文档，构建知识库，智能问答。\n基于 MiniMax AI 模型。',
		'关于 AI 助手',
	);
}
