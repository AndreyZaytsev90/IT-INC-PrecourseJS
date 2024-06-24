import {SettingsComponent} from "./Settings/Settings.component.js";
import {GridComponent} from "./Grid/Grid.component.js";
import {ResultPanelComponent} from "./ResultPanel/ResultPanel.component.js";
import {LoseComponent} from "./Lose/Lose.component.js";
import {getGameStatus, subscribe} from "../../core/state-manager.js";
import {GAME_STATUSES} from "../../core/constants.js";
import {StartGameComponent} from "./StartGame/StartGame.component.js";
import {WinComponent} from "./Win/Win.component.js";
import {AudioComponent} from "./Audio/Audio.component.js";

export function AppComponent() {
    const localState = {prevGameStatus: null, cleanUpFunctions: []}
    console.log("APP CREATING")
    const element = document.createElement('div')
    
    const audioComponent = AudioComponent()
    
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
    localState.cleanUpFunctions.forEach((cf) => cf())
    localState.cleanUpFunctions = []
    
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
            localState.cleanUpFunctions.push(resultPanelComponent.cleanUp)
            const gridComponent = GridComponent()
            localState.cleanUpFunctions.push(gridComponent.cleanUp)
            //Программа визуализации данных (программа умирает и перезапускает заново во всякий раз, как меняются данные в стэйте)
            element.append(settingsComponent.element, resultPanelComponent.element, gridComponent.element)
            break;
        case GAME_STATUSES.WIN:
            const winComponent = WinComponent()
            element.append(winComponent.element)
            break;
        case GAME_STATUSES.LOSE:
            const loseComponent = LoseComponent()
            element.append(loseComponent.element)
            break;
        default: throw new Error('not implemented!')

    }

  
}