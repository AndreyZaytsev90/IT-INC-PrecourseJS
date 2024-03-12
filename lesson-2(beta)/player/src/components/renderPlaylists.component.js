import {renderPlaylist} from './playlist/renderPlaylist.component.js'
// render
export function renderPlayLists(inputPlaylists){
    for (let i = 0; i < inputPlaylists.length; i++) {
        const playList = inputPlaylists[i]
        renderPlaylist(playList)
    }
}

