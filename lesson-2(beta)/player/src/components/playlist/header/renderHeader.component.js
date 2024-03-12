export function renderPlaylistHeader(playlistForRendering) {
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