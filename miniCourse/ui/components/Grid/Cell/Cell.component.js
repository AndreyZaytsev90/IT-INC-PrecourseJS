import {getGooglePosition, getPlayerPosition, subscribe, unsubscribe} from "../../../../core/state-manager.js";
import {GoogleComponent} from "../../common/Google/Google.component.js";
import {PlayerComponent} from "../../common/Player/Player.component.js";
import {EVENTS} from "../../../../core/constants.js";

export function CellComponent(x, y) {
    const element = document.createElement('td')

    //подписываемся на изменения
    const observer = (e) => {
        if (e.name !== EVENTS.GOOGLE_JUMPED) return
        if (e.payload.oldPosition.x === x && e.payload.oldPosition.y === y) {
            render(element, x, y)
        }
        if (e.payload.newPosition.x === x && e.payload.newPosition.y === y) {
            render(element, x, y)
        }

    }
    subscribe(observer)

    render(element, x, y)

    return {
        element,
        cleanUp: () => unsubscribe(observer)
    }
}

async function render(element, x, y) {
    element.innerHTML=''

    //Получаем позиции из state
    const googlePosition = await getGooglePosition()
    const player1Position = await getPlayerPosition(1)
    const player2Position = await getPlayerPosition(2)

    if (googlePosition.x === x && googlePosition.y === y) {
        element.append(GoogleComponent().element)
    }
    if (player1Position.x === x && player1Position.y === y) {
        element.append(PlayerComponent(1).element)
    }
    if (player2Position.x === x && player2Position.y === y) {
        element.append(PlayerComponent(2).element)
    }
}