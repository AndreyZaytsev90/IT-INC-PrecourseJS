import {Game} from "./ui/game/game.component.js"
import {data, GAME_STATUSES, subscribe} from "./data/game.data.js";
import {Settings} from "./ui/game/settings/settings.component.js";
import {Win} from "./ui/finish/win.component.js";
import {Lose} from "./ui/finish/lose.component.js";


subscribe(renderApp)

/*
 * Чехия
 * Хорватия
 * Греция
 * Германия
 * Украина
 * Белоруссия
 * Турция
 * */

function renderApp() {
    const appEl = document.getElementById('app')
    appEl.innerHTML = ''
    
    switch (data.gameStatus) {
        case GAME_STATUSES.SETTINGS:
            const settingEl = Settings()
            appEl.append(settingEl)
            break
        
        case GAME_STATUSES.IN_PROGRESS:
            const gameEl = Game()
            appEl.append(gameEl)
            break
        
        case GAME_STATUSES.WIN:
            const winEl = Win()
            appEl.append(winEl)
            break

        case GAME_STATUSES.LOSE:
            const loseEl = Lose()
            appEl.append(loseEl)
            break
    }
}

renderApp()