export const formatAndLint = async (path: string) => {
	await Bun.$`bun run oxlint ${path} --write && bun run oxfmt ${path}`
}
