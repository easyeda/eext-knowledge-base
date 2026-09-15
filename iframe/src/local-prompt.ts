export interface LocalMessage { role: string; content: string }
export const LOCAL_INPUT_TOKENS = 131072;
export const LOCAL_OUTPUT_TOKENS = 2048;

export function localInputTokens(value?: number): number {
	return Number.isSafeInteger(value) && value! > 0 ? value! : LOCAL_INPUT_TOKENS;
}

export function fitLocalPrompt(input: LocalMessage[], count: (messages: LocalMessage[]) => number, limit = LOCAL_INPUT_TOKENS): LocalMessage[] {
	const messages = input.map(message => ({ ...message }));
	// Drop complete oldest turns, preserving the system message and current question.
	while (messages.length > 2 && count(messages) > limit)
		messages.splice(1, Math.min(2, messages.length - 2));
	if (count(messages) <= limit)
		return messages;
	if (messages[0]?.role !== 'system')
		throw new Error('问题超过本地模型输入上限，请缩短问题后重试。');
	const system = messages[0].content;
	messages[0].content = '';
	if (count(messages) > limit)
		throw new Error('问题超过本地模型输入上限，请缩短问题后重试。');
	let low = 0;
	let high = system.length;
	while (low < high) {
		const middle = Math.ceil((low + high) / 2);
		messages[0].content = system.slice(0, middle);
		if (count(messages) <= limit)
			low = middle;
		else high = middle - 1;
	}
	messages[0].content = system.slice(0, low);
	return messages;
}
