import {getGridSize, movePlayer} from "../../../core/state-manager.js";
import {CellComponent} from "./Cell/Cell.component.js";
import {MOVING_DIRECTIONS} from "../../../core/constants.js";

export function GridComponent() {
    const localState = {cleanUpFunctions: []}

    //Перемещение игроков

    const keyUpObserver = (event) => {
        console.log(event.code)
        switch (event.code) {
            case 'ArrowUp': movePlayer(1, MOVING_DIRECTIONS.UP); break
            case 'ArrowLeft': movePlayer(1, MOVING_DIRECTIONS.LEFT); break
            case 'ArrowDown': movePlayer(1, MOVING_DIRECTIONS.DOWN); break
            case 'ArrowRight': movePlayer(1, MOVING_DIRECTIONS.RIGHT); break
            
            case 'KeyW': movePlayer(2, MOVING_DIRECTIONS.UP); break
            case 'KeyA': movePlayer(2, MOVING_DIRECTIONS.LEFT); break
            case 'KeyS': movePlayer(2, MOVING_DIRECTIONS.DOWN); break
            case 'KeyD': movePlayer(2, MOVING_DIRECTIONS.RIGHT); break
        }
    }

    document.addEventListener('keyup', keyUpObserver)


    ////////////////////
    const element = document.createElement('table')
    element.classList.add('grid')

    /* const observer = () => {
         render(element)
     }
 
     subscribe(observer)*/

    render(element, localState)

    //возвращаем объект
    return {
        element,
        cleanUp: () => {
            localState.cleanUpFunctions.forEach(cf => cf())
            document.removeEventListener('keyup', keyUpObserver)
        }
    }
}

async function render(element, localState) {

    localState.cleanUpFunctions.forEach(cf => cf())
    localState.cleanUpFunctions = []
    element.innerHTML = ''
    const gridSize = await getGridSize()

    for (let y = 0; y < gridSize.rowsCount; y++) {
        const rowElement = document.createElement('tr')


        for (let x = 0; x < gridSize.columnCount; x++) {
            const cellComponent = CellComponent(x, y);

            localState.cleanUpFunctions.push(cellComponent.cleanUp)

            rowElement.append(cellComponent.element)
        }
        element.append(rowElement)
    }
}
