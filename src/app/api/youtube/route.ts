import { NextResponse, NextRequest } from 'next/server'

const { YOUTUBE_APIKEY } = process.env

export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url)
    const queryParams: { [key: string]: string } = {}

    // Iterate over all query parameters
    searchParams.forEach((value, key) => {
        queryParams[key] = value
    })
    if (queryParams.query) {
        const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_APIKEY}&q=${queryParams.query}&regionCode=MX&maxResults=3&type=video`
        const res = await fetch(url)
        const data = await res.json()
        return NextResponse.json(data.items)
    }
    return NextResponse.json(null, { status: 404 })
}
