export function GoogleComponent() {
    const element = document.createElement('img')
    render(element)
    return {element}
}

async function render(element) {
    element.src = 'assets/images/google.png';
    element.style.maxWidth = '100%'; // убедитесь, что изображение помещается в ячейку
    element.style.paddingLeft= '8px'; // сохраняет пропорции изображения
}
