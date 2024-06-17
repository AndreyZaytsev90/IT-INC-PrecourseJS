export function SettingsComponent() {
    const element = document.createElement('div')

    render(element)
    
    //совращаем объект со свойством element и значением element
    return {element}
}

async function render(element) { 
    element.append(`Settings will be here`)
}
