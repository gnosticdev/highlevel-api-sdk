export const formatAndLint = async (path: string) => {
	await Bun.$`bun run oxlint ${path} --fix && bun run oxfmt ${path}`
}
