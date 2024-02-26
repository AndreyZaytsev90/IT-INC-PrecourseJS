// data
const playlist = {
    title: "Hip-Hop Hits",
    coverImageUrl: "./hip_hop_hits.jpg",
    coverHotUrl: "./isHot.jpg",
    info: {
        totalTracksCount: 4,
        totalTracksDurationInSeconds: 733,
    },
    tracks: [
        {
            coverImageUrl: "track1.jpg",
            artistName: "Eminem",
            title: "Rap God",
            fileUrl: "Eminem_-_Rap_God.mp3",
            isHot: false,
        },
        {
            coverImageUrl: "track2.jpg",
            artistName: "50cent",
            title: "In da Club",
            fileUrl: "50_Cent_-_In_Da_Club.mp3",
            isHot: true,
        },
    ],
};

// render
renderPlaylist(playlist)

function renderPlaylist(playlistForRendering) {
    renderPlaylistHeader(playlistForRendering)
    renderPlaylistTracks(playlistForRendering)
}

function renderPlaylistHeader(playlistForRendering) {
    const albumImageElement = document.createElement("div")
    let playlistTitle = document.createElement('h2')
    playlistTitle.append(playlistForRendering.title)
    document.body.append(playlistTitle)

    let playlistCoverImage = document.createElement('img')
    playlistCoverImage.src = playlistForRendering.coverImageUrl
    albumImageElement.append(playlistCoverImage)
    document.body.append(albumImageElement)
}

function renderPlaylistTracks(playlistForRendering) {
    
    
    for (let i = 0; i < playlistForRendering.tracks.length; i++) {
        
        const trackElement = document.createElement("div")
        
        let coverTrackImageUrl = document.createElement('img')
        coverTrackImageUrl.src = playlistForRendering.tracks[i].coverImageUrl
        document.body.append(coverTrackImageUrl)

       
        
        let trackTitleElement = document.createElement("div")
        
        if(playlistForRendering.tracks[i].isHot) {
            let coverHotImageUrl = document.createElement('img')
            coverHotImageUrl.src = playlistForRendering.coverHotUrl
            trackTitleElement.append(coverHotImageUrl)
        }
        trackTitleElement.append(playlistForRendering.tracks[i].artistName + " - " + playlistForRendering.tracks[i].title)

        let playerElement = document.createElement('audio')
        playerElement.src = playlistForRendering.tracks[i].fileUrl
        playerElement.controls = true

        trackElement.append(trackTitleElement, playerElement)
        document.body.append(trackElement)
    }

    
}
