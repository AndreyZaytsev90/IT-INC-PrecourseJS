let playlist = {
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
}
let playListTitleElement = document.createElement('h2')
playListTitleElement.append(playlist.title)
document.body.append(playListTitleElement)


let playListCoverElement = document.createElement('img')
playListCoverElement.src = playlist.coverImageUrl
document.body.append(playListCoverElement)

let tracksListElement = document.createElement('ul')

let track1Element = document.createElement('li')
track1Element.title = playlist.tracks[0].title
track1Element.artist = playlist.tracks[0].artist
track1Element.append(track1Element.artist + " - " + track1Element.title)


let track2Element = document.createElement('li')
track2Element.title = playlist.tracks[1].title
track2Element.artist = playlist.tracks[1].artist
track2Element.append(track2Element.artist + " - " + track2Element.title)

tracksListElement.append(track1Element, track2Element)


document.body.append(tracksListElement)

let track1mp3 = document.createElement("audio")
track1mp3.audio = playlist.tracks[0].fileUrl
track1mp3.append(track1mp3.audio)
document.body.append(track1mp3)
