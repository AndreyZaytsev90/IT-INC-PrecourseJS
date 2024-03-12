export function renderPlaylistTracks(tracks) {

    for (let i = 0; i < tracks.length; i++) {

        const trackElement = document.createElement("div")
        trackElement.style.display = 'flex'
        trackElement.style.paddingTop = '5px'

        const trackInfo = document.createElement("div")

        let coverTrackImageUrl = document.createElement('img')
        coverTrackImageUrl.style.height = '76.5px'
        coverTrackImageUrl.style.padding = '0 5px 0 0'
        coverTrackImageUrl.src = tracks[i].coverImageUrl

        let trackTitleElement = document.createElement("div")

        if (tracks[i].isHot) {
            let coverHotImageUrl = document.createElement('img')
            coverHotImageUrl.src = tracks[i].coverHotUrl
            trackTitleElement.append(coverHotImageUrl)
        }
        trackTitleElement.append(tracks[i].artistName + " - " + tracks[i].title)

        let playerElement = document.createElement('audio')
        playerElement.src = tracks[i].fileUrl
        playerElement.controls = true


        trackInfo.append(trackTitleElement, playerElement)
        trackElement.append(coverTrackImageUrl, trackInfo)
        document.body.append(trackElement)
    }

}