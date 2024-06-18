export function PlayerComponent(playerNumber) {
    const element = document.createElement('img')
    render(element, playerNumber)
    return {element}
}

async function render(element, playerNumber) {
    element.src = `assets/images/player${playerNumber}.png`;
    element.style.maxWidth = '100%'; // убедитесь, что изображение помещается в ячейку
    element.style.paddingLeft= '8px'; // сохраняет пропорции изображения
}
