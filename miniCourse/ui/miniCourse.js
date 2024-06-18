import {AppComponent} from "./components/App.component.js";
import {subscribe, unsubscribe} from "../core/state-manager.js";

const rootElement = document.getElementById('root')

function renderApp() {
    rootElement.innerHTML = ''
    const appComponent = AppComponent()
    rootElement.append(appComponent.element)
}

renderApp();

subscribe(renderApp) // подписываемcя на renderApp - функция наблюдатель
/*
unsubscribe(renderApp) // отписываемся от наблюдателя при необходимости*/
