import {getGridSize, subscribe, unsubscribe} from "../../../core/state-manager.js";
import {CellComponent} from "./Cell/Cell.component.js";

export function GridComponent() {
    const localState = {cleanUpFunctions: []}
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
