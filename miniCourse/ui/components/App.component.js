import {getGooglePoints, getPlayersPoints} from "../../core/state-manager.js";

export function AppComponent() {
    const element = document.createElement('div')

    //Получаем поинты для игроков, путем вызова функции геттера
    const player1 = getPlayersPoints(1)
    const player2 = getPlayersPoints(2)
    const google = getGooglePoints()

    //Программа визуализации данных (программа умирает и перезапускает заново во всякий раз, как меняются данные в стэйте)
    element.append(` Google: ${google}`)
    element.append(` Player1: ${player1}`)
    element.append(` Player2: ${player2}`)
    
    return element
}