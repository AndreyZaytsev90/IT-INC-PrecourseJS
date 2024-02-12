//data
let playlist = {
    title: "Hip-hop Hits!!",
    coverImageUrl: "./hip_hop_hits.jpg",
    info: {
        totalTracksCount: 4,
        totalTracksDurationInSeconds: 733
    },
    tracks: [
        {
            coverImageUrl: "track1.jpg",
            artist: "Eminem",
            title: "Rap God",
            fileUrl: "Eminem_-_Rap_God_.mp3",
            isHot: false
        },
        {
            coverImageUrl: "track2.jpg",
            artist: "50 cent",
            title: "In da Club",
            fileUrl: "50_Cent_-_In_Da_Club.mp3",
            isHot: true
        },
    ]
}
/*let playlist2 = {
    title: "Hip-hop Hits",
    coverImageUrl: "./hip_hop_hits.jpg",
    info: {
        totalTracksCount: 4,
        totalTracksDurationInSeconds: 733
    },
    tracks: [
        {
            coverImageUrl: "./track1.jpg",
            artist: "Eminem",
            title: "Rap God",
            fileUrl: "./Eminem_-_Rap_God_.mp3",
            isHot: false
        },
        {
            coverImageUrl: "./track2.jpg",
            artist: "50 cent",
            title: "In da Club",
            fileUrl: "./50_Cent_-_In_Da_Club.mp3",
            isHot: true
        },
    ]
}*/

// render
renderPlaylist(playlist)
/*renderPlaylist(playlist2)*/

function renderPlaylist(playlistForRendering) {
    renderPlaylistHeader(playlistForRendering)
    renderTrack(playlistForRendering)
}

function renderPlaylistHeader(inputPlaylistForRendering){
    // здесь логика отрисовки шапки "входного" плейлиста
    let playListTitleElement = document.createElement('h2')
    playListTitleElement.append(inputPlaylistForRendering.title)
    document.body.append(playListTitleElement)

    let playListCoverElement = document.createElement('img')
    playListCoverElement.src = inputPlaylistForRendering.coverImageUrl
    document.body.append(playListCoverElement)
}

function renderTrack(inputTrackForRendering){
    // здесь логика отрисовки "входного" трека
    let tracksListElement = document.createElement('ul')
    
    for (let i = 0; i < inputTrackForRendering.tracks.length; i++) {
        let trackElement = document.createElement('li')
        trackElement.title = inputTrackForRendering.tracks[i].title
        trackElement.artist = inputTrackForRendering.tracks[i].artist
        trackElement.append(trackElement.artist + " - " + trackElement.title)

        let playerElement = document.createElement('audio')
        playerElement.src = inputTrackForRendering.tracks[i].fileUrl
        playerElement.controls = true
        
        let coverElement = document.createElement('img')
        coverElement.src = inputTrackForRendering.tracks[i].coverImageUrl

        
        trackElement.append(playerElement, coverElement)
        tracksListElement.append(trackElement)
    }
    document.body.append(tracksListElement)
}











