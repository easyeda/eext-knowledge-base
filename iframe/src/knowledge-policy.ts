export function isPathWithin(path: string, folder: string): boolean {
	return path === folder || path.startsWith(`${folder}/`);
}

export function isSourceIgnored(source: string, ignoredFolders: string[]): boolean {
	return ignoredFolders.some(folder => isPathWithin(source, folder));
}

export function renameIgnoredFolders(folders: string[], oldPath: string, newPath: string): string[] {
	return folders.map(folder => isPathWithin(folder, oldPath) ? newPath + folder.slice(oldPath.length) : folder);
}
