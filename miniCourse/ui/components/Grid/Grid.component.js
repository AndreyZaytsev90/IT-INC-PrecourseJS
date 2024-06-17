import {getGridSize} from "../../../core/state-manager.js";

export function GridComponent() {
    const element = document.createElement('table')

    render(element)
    
    //совращаем объект со свойством element и значением element
    return {element}
}

async function render(element) {
    
    const gridSize = await getGridSize()

    for (let y = 0; y < gridSize.rowsCount ; y++) {
        const rowElement = document.createElement('tr')

        for (let x = 0; x < gridSize.columnCount; x++) {
            const cellElement = document.createElement('td')
            cellElement.append(`${x}, ${y};`)
            rowElement.append(cellElement)
        }
        element.append(rowElement)
    }
}