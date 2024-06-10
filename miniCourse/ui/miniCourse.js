/*import {_state as state} from "../core/state-manager.js"*/
import {getGooglePoints} from "../core/state-manager.js"

const rootElement = document.getElementById('root')
rootElement.innerHTML = ''

/*for (let i = 0; i < state.points.players.length; i++) {
    const numberPlayer = i + 1
    const score = state.points.players[i]
    rootElement.append(` Player${numberPlayer}: ${score.toString()}`)
}*/

const google = getGooglePoints()
rootElement.append(` Google: ${google}`)