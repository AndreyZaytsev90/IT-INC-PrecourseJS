// render
export function renderPlayLists(inputPlaylists){
    for (let i = 0; i < inputPlaylists.length; i++) {
        const playList = inputPlaylists[i]
        renderPlaylist(playList)
    }
}

function renderPlaylist(playlistForRendering) {
    renderPlaylistHeader(playlistForRendering)
    renderPlaylistTracks(playlistForRendering)
}

function renderPlaylistHeader(playlistForRendering) {
    renderPlayListTitle(playlistForRendering)
    renderPlayListCoverImage(playlistForRendering)
}

function renderPlayListTitle(playlistForRendering) {
    let playlistTitle = document.createElement('h2')
    playlistTitle.style.color = 'red'
    playlistTitle.append(playlistForRendering.title)
    document.body.append(playlistTitle)
}

function renderPlayListCoverImage(playlistForRendering) {
    const albumImageElement = document.createElement("div")

    let playlistCoverImage = document.createElement('img')
    playlistCoverImage.src = playlistForRendering.coverImageUrl
    albumImageElement.append(playlistCoverImage)
    document.body.append(albumImageElement)
}

function renderPlaylistTracks(playlistForRendering) {

    for (let i = 0; i < playlistForRendering.tracks.length; i++) {

        const trackElement = document.createElement("div")
        trackElement.style.display = 'flex'
        trackElement.style.paddingTop = '5px'

        const trackInfo = document.createElement("div")

        let coverTrackImageUrl = document.createElement('img')
        coverTrackImageUrl.style.height = '76.5px'
        coverTrackImageUrl.style.padding = '0 5px 0 0'
        coverTrackImageUrl.src = playlistForRendering.tracks[i].coverImageUrl

        let trackTitleElement = document.createElement("div")

        if (playlistForRendering.tracks[i].isHot) {
            let coverHotImageUrl = document.createElement('img')
            coverHotImageUrl.src = playlistForRendering.coverHotUrl
            trackTitleElement.append(coverHotImageUrl)
        }
        trackTitleElement.append(playlistForRendering.tracks[i].artistName + " - " + playlistForRendering.tracks[i].title)

        let playerElement = document.createElement('audio')
        playerElement.src = playlistForRendering.tracks[i].fileUrl
        playerElement.controls = true


        trackInfo.append(trackTitleElement, playerElement)
        trackElement.append(coverTrackImageUrl, trackInfo)
        document.body.append(trackElement)
    }

}