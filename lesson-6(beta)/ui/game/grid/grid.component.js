import {data} from "../../../data/game.data.js";
import {Cell} from "./cell/cell.component.js"

export function Grid() {
    const containerElement = document.createElement('table')
    containerElement.className = 'grid-container'; // добавить класс

    for (let y = 0; y < data.settings.rowsCount; y++) {
        const row = document.createElement('tr')

        for (let x = 0; x < data.settings.columnCount; x++) {
            const cell = Cell(x,y)
            row.append(cell)
        }
        containerElement.append(row)
    }

    return containerElement
}