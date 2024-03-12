import {renderPlaylistHeader} from './header/renderHeader.component.js'
import {renderPlaylistTracks} from './tracks/renderTracks.component.js'

export function renderPlaylist(playlistForRendering) {
    renderPlaylistHeader(playlistForRendering)
    renderPlaylistTracks(playlistForRendering.tracks)
}

