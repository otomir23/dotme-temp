const apiKey = import.meta.env.LASTFM_API_KEY
export const username = import.meta.env.LASTFM_USERNAME
const endpoint = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json`

export type LastFmTrack = {
    artist: {
        "#text": string
    }
    name: string
    "@attr"?: {
        nowplaying?: "true" | "false"
    }
}

type LastFmResponse = {
    recenttracks: {
        track: LastFmTrack[]
    }
}

export async function getNowPlaying() {
    const res = await fetch(endpoint)
    if (!res.ok)
        return "Error"
    const data: LastFmResponse = await res.json()
    const curr = data.recenttracks.track.find((track) => track["@attr"]?.nowplaying === "true")
    if (!curr)
        return "Nothing"
    return `${curr.artist["#text"]} - ${curr.name}`
}