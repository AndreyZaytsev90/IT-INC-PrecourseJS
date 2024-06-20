import {getGridSize, subscribe, unsubscribe} from "../../../core/state-manager.js";
import {CellComponent} from "./Cell/Cell.component.js";

export function GridComponent() {
    console.log("GRID COMPONENT CREATING")
    const element = document.createElement('table')
    element.classList.add('grid')
    
    const observer = () => {
        render(element)
    }

    subscribe(observer)

    render(element)

    //возвращаем объект
    return {element, cleanUp: () => {unsubscribe(observer)}}
}

async function render(element) {
    console.log("GRID COMPONENT RENDERING")
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
