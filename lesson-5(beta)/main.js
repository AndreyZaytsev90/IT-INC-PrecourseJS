import {Game} from "./ui/game/game.component.js"
import {data, GAME_STATUSES, subscribe} from "./data/game.data.js";
import {Finish} from "./ui/finish/finish.component.js";


subscribe(renderApp)

function renderApp() {
    const appEl = document.getElementById('app')
    appEl.innerHTML = ''
    
    switch (data.gameStatus) {
        case GAME_STATUSES.IN_PROGRESS:
            const gameEl = Game()
            appEl.append(gameEl)
            break
        
        case GAME_STATUSES.FINISH:
            const finishEl = Finish()
            appEl.append(finishEl)
            break
    }
}

renderApp()