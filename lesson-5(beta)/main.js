import {Game} from "./ui/game/game.component.js"
import {subscribe} from "./data/game.data.js";



subscribe(renderApp)

function renderApp(){
    const gameEl = Game()
    const appEl = document.getElementById('app')
    appEl.innerHTML = ''
    appEl.append(gameEl)
    /*document.body.innerHTML = ''
    document.body.append(gameEl)*/
}

renderApp()