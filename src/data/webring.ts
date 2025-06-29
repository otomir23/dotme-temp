export const slug = import.meta.env.WEBRING_SLUG
const endpoint = `https://webring.otomir23.me/${slug}/data`

export type WebringSite = {
    slug: string
    name: string
    url: string
}

type WebringData = {
    prev: WebringSite
    curr: WebringSite
    next: WebringSite
}

export async function getWebringData(): Promise<WebringData | null> {
    const res = await fetch(endpoint)
    if (!res.ok)
        return null
    return await res.json()
}
