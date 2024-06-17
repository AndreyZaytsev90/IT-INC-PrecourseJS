export function CellComponent(x, y) {
    const cellElement = document.createElement('td')
    cellElement.append(`${x}, ${y};`)
    return cellElement;
}