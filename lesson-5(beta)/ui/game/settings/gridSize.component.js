import {data} from "../../../data/game.data.js";

export function GridSize(){
    const containerElement = document.createElement("div")
    const settingElement = document.createElement("select")
    const settingName = 'Grid size '
    
    const currentGridSize = `${data.settings.rowsCount}x${data.settings.columnCount}`;

    for(let i=3; i<=8; i++){
        let option = document.createElement("option");
        option.value = `${i}x${i}`;
        option.innerText = `${i}x${i}`;
        if (option.value === currentGridSize) {
            option.selected = true;
        }
        settingElement.appendChild(option);
    }

    settingElement.addEventListener("change", function() {
        const [rowsCount, columnCount] = this.value.split("x");
        data.settings.rowsCount = parseInt(rowsCount);
        data.settings.columnCount = parseInt(columnCount);
    });

    /*console.log('x', data.settings.rowsCount)
    console.log('y', data.settings.columnCount)*/
    
    containerElement.append(settingName, settingElement)
    return containerElement
    

}