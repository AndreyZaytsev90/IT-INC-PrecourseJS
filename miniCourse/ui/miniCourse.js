/*import {_state as state} from "../core/state-manager.js"*/
import {getGooglePoints, getPlayersPoints} from "../core/state-manager.js"

const rootElement = document.getElementById('root')
rootElement.innerHTML = ''

/*for (let i = 0; i < state.points.players.length; i++) {
    const numberPlayer = i + 1
    const score = state.points.players[i]
    rootElement.append(` Player${numberPlayer}: ${score.toString()}`)
}*/

const player1 = getPlayersPoints(1)
const player2 = getPlayersPoints(2)

const google = getGooglePoints()
rootElement.append(` Google: ${google}`)
rootElement.append(` Player1: ${player1}`)
rootElement.append(` Player2: ${player2}`)