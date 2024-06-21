import {getGooglePoints, getPlayersPoints, subscribe, unsubscribe} from "../../../core/state-manager.js";
import {EVENTS} from "../../../core/constants.js";


export function ResultPanelComponent() {
    const element = document.createElement('div')
    element.classList.add('result-panel')

    const observer = (e) => {
        if (e.name === EVENTS.SCORES_CHANGED)
        render(element)
    }

    subscribe(observer)

    render(element)

    //возвращаем объект
    return {element, cleanUp: () => {unsubscribe(observer)}}
}

async function render(element) {
    element.innerHTML = ''
    //Получаем поинты для игроков, путем вызова функции геттера
    const player1 = await getPlayersPoints(1)
    const player2 = await getPlayersPoints(2)
    const google =  await getGooglePoints()

    //Программа визуализации данных (программа умирает и перезапускает заново во всякий раз, как меняются данные в стэйте)
    element.append(` Player1: ${player1}, Player2: ${player2}, Google: ${google}`)
}