import {data} from "../../../data/game.data.js";

export function MaximumMisses() {
    const containerElement = document.createElement("div")
    const settingElement = document.createElement("select")
    const settingName = 'Maximum misses '

    const currentPointsToWin = `${data.settings.maximumMisses}`;
    

    for (let i = 3; i <= 13; i = i +2) {
        let option = document.createElement("option");
        option.value = `${i}`
        option.innerText = `${i}`
        if (option.value === currentPointsToWin) {
            option.selected = true;
        }
        settingElement.appendChild(option)
    }

    settingElement.addEventListener("change", function() {
        data.settings.maximumMisses = parseInt(this.value);
    });
    
    /*console.log('maximumMisses -->',data.settings.maximumMisses)*/
    
    containerElement.append(settingName, settingElement)
    return containerElement
}