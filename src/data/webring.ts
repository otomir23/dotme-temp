import { WEBRING_SLUG } from "astro:env/server"

export const slug = WEBRING_SLUG
const endpoint = `https://webring.otomir23.me/${slug}/data`

export type WebringSite = {
    slug: string,
    name: string,
    url: string,
    favicon: string,
}

type WebringData = {
    prev: WebringSite,
    curr: WebringSite,
    next: WebringSite,
}

export async function getWebringData(): Promise<WebringData | null> {
    const res = await fetch(endpoint)
    if (!res.ok)
        return null
    return await res.json()
}

export function getFaviconUrl(favicon: string) {
    return `https://webring.otomir23.me/media/${encodeURIComponent(favicon)}`
}
