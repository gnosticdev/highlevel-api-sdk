export function objectEntries<
    TOuter extends { [K in keyof TOuter]: TOuter[K] }
>(obj: TOuter): [keyof TOuter, TOuter[keyof TOuter]][] {
    return Object.entries(obj) as [keyof TOuter, TOuter[keyof TOuter]][]
}
