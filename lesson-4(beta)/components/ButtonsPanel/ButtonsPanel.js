export function ButtonsPanel() {
    const container = document.createElement('div')
    const addButtonElement = document.createElement('button')
    addButtonElement.innerHTML = "+add"
    container.append(addButtonElement)
    return container
}