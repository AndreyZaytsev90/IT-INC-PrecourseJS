import {getGridSize, subscribe} from "../../../core/state-manager.js";
import {CellComponent} from "./Cell/Cell.component.js";

export function GridComponent() {
    const element = document.createElement('table')
    element.classList.add('grid')

    subscribe(() => {
        render(element)
    })

    render(element)

    //совращаем объект со свойством element и значением element
    return {element}
}

async function render(element) {
    element.innerHTML = ''
    const gridSize = await getGridSize()

    for (let y = 0; y < gridSize.rowsCount; y++) {
        const rowElement = document.createElement('tr')


        for (let x = 0; x < gridSize.columnCount; x++) {
            const cellComponent = CellComponent(x, y);
            rowElement.append(cellComponent.element)
        }
        element.append(rowElement)
    }
}
