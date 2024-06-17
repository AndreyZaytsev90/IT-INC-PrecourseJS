import {SettingsComponent} from "./Settings/Settings.component.js";
import {GridComponent} from "./Grid/Grid.component.js";
import {ResultPanelComponent} from "./ResultPanel/ResultPanel.component.js";

export function AppComponent() {
    const element = document.createElement('div')
    
    render(element)
    
    return {element}
}

async function render(element){
    const settingsComponent = SettingsComponent()
    const resultPanelComponent = ResultPanelComponent()
    const gridComponent = GridComponent()
    
    //Программа визуализации данных (программа умирает и перезапускает заново во всякий раз, как меняются данные в стэйте)
    element.append(settingsComponent.element)
    element.append(resultPanelComponent.element)
    element.append(gridComponent.element)
}