// data
const playlist = {
    title: "Hip-Hop Hits",
    coverImageUrl: "./hip_hop_hits.jpg",
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
    let playlistTitle = document.createElement('h2')
    playlistTitle.append(playlistForRendering.title)
    document.body.append(playlistTitle)

    let playlistCoverImage = document.createElement('img')
    playlistCoverImage.src = playlistForRendering.coverImageUrl
    document.body.append(playlistCoverImage)

    for (let i = 0; i < playlistForRendering.tracks.length; i++) {
        let coverTrackImageUrl = document.createElement('img')
        coverTrackImageUrl.src = playlistForRendering.tracks[i].coverImageUrl
        
        document.body.append(coverTrackImageUrl)
    }


}
