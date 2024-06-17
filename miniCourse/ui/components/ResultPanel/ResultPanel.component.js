import {getGooglePoints, getPlayersPoints} from "../../../core/state-manager.js";


export function ResultPanelComponent() {
    const element = document.createElement('div')
    element.classList.add('result-panel')
    
    render(element)

    //совращаем объект со свойством element и значением element
    return {element}
}

async function render(element) {
    //Получаем поинты для игроков, путем вызова функции геттера
    const player1 = await getPlayersPoints(1)
    const player2 = await getPlayersPoints(2)
    const google =  await getGooglePoints()

    //Программа визуализации данных (программа умирает и перезапускает заново во всякий раз, как меняются данные в стэйте)
    element.append(` Player1: ${player1}`)
    element.append(` Player2: ${player2}`)
    element.append(` Google: ${google}`)
}