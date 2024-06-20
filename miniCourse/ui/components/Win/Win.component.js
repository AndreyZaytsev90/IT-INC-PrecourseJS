export function WinComponent() {
    const element = document.createElement('div')

    render(element)

    return {element}
}

async function render(element) {
    element.append(`Win will be here`)
}