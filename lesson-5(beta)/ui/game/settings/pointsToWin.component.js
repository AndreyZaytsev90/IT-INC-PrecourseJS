import {data} from "../../../data/game.data.js";


export function PointsToWin() {

    const containerElement = document.createElement("div")
    const settingElement = document.createElement("select")
    const settingName = 'Points to win '

    const currentPointsToWin = `${data.settings.pointsToWin} pts`;

    for (let i = 20; i <= 100; i = i + 20) {
        let option = document.createElement("option");
        option.value = `${i} pts`
        option.innerText = `${i} pts`
        if (option.value === currentPointsToWin) {
            option.selected = true;
        }
        settingElement.appendChild(option)
    }

    settingElement.addEventListener("change", function() {
        data.settings.pointsToWin = parseInt(this.value);
    });

    /*console.log('pointsToWin -->',data.settings.pointsToWin)*/
    
    containerElement.append(settingName, settingElement)
    return containerElement
}