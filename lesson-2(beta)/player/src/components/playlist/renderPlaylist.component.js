import {renderPlaylistHeader} from './header/renderHeader.component.js'
import {renderPlaylistTracks} from './tracks/renderTracks.component.js'
import {renderSeparator} from "../../common/renderSeparator.component.js";

export function renderPlaylist(playlistForRendering) {
    renderPlaylistHeader(playlistForRendering)
    renderPlaylistTracks(playlistForRendering)
    renderSeparator()
}

