import {SettingsComponent} from "./Settings/Settings.component.js";
import {GridComponent} from "./Grid/Grid.component.js";
import {ResultPanelComponent} from "./ResultPanel/ResultPanel.component.js";
import {LoseComponent} from "./Lose/Lose.component.js";
import {getGameStatus, subscribe} from "../../core/state-manager.js";
import {GAME_STATUSES} from "../../core/constants.js";
import {StartGameComponent} from "./StartGame/StartGame.component.js";

export function AppComponent() {
    const localState = {prevGameStatus: null}
    console.log("APP CREATING")
    const element = document.createElement('div')
    
    subscribe(()=> {
        render(element, localState)
    })

    render(element, localState)

    return {element}
}

async function render(element, localState) {
    
    const gameStatus = await getGameStatus()
    //Оптимизация перерисовок 
    if (localState.prevGameStatus === gameStatus) return
    localState.prevGameStatus = gameStatus
    console.log("APP RENDERING")
    element.innerHTML = ''
    switch (gameStatus) {
        case GAME_STATUSES.SETTINGS: {
            const settingsComponent = SettingsComponent()
            const startGameComponent = StartGameComponent()
            element.append(settingsComponent.element, startGameComponent.element)
            break;
        }
        case GAME_STATUSES.IN_PROGRESS:
            const settingsComponent = SettingsComponent()
            const resultPanelComponent = ResultPanelComponent()
            const gridComponent = GridComponent()
            //Программа визуализации данных (программа умирает и перезапускает заново во всякий раз, как меняются данные в стэйте)
            element.append(settingsComponent.element, resultPanelComponent.element, gridComponent.element)
            break;
        case GAME_STATUSES.WIN:
            break;
        case GAME_STATUSES.LOSE:
            const loseComponent = LoseComponent()
            element.append(loseComponent.element)
            break;
        default: throw new Error('not implemented!')

    }

  
}