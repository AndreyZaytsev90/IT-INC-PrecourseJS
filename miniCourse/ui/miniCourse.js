import {AppComponent} from "./components/App.component.js";

const rootElement = document.getElementById('root')

rootElement.innerHTML = ''

/*for (let i = 0; i < state.points.players.length; i++) {
    const numberPlayer = i + 1
    const score = state.points.players[i]
    rootElement.append(` Player${numberPlayer}: ${score.toString()}`)
}*/

const appElement = AppComponent()

rootElement.append(appElement)

