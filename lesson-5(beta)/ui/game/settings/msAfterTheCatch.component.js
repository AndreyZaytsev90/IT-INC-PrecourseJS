import {data} from "../../../data/game.data.js";
export function MsAfterTheCatch() {

    const containerElement = document.createElement("div")
    const settingElement = document.createElement("select")
    const settingName = 'Ms after the catch '

    const currentPointsToWin = `${data.settings.decreaseDeltaInMs} ms`;

    for (let i = 200; i >= 100; i = i - 20) {
        let option = document.createElement("option");
        option.value = `${i} ms`
        option.innerText = `${i} ms`
        if (option.value === currentPointsToWin) {
            option.selected = true;
        }
        settingElement.appendChild(option)
    }

    settingElement.addEventListener("change", function() {
        data.settings.decreaseDeltaInMs = parseInt(this.value);
    });

    /*console.log('decreaseDeltaInMs -->',data.settings.decreaseDeltaInMs)*/
    
    containerElement.append(settingName, settingElement)
    return containerElement
}