import {Header} from "./header/Header.js";
import {Count} from "./count/Count.js";
import {IncButton} from "./buttons/incButton.js";
import {data} from "../../data/data.js";
import {DecButton} from "./buttons/decButton.js";

export function renderCounter() {

    document.body.innerHTML = ''
    
    
    data.borderCounter = document.createElement('div')
    data.borderCounter.style.border = '2px solid black'
    data.borderCounter.style.width = '150px'
    data.borderCounter.style.height = '100px'
    data.borderCounter.style.padding= '10px'
    data.borderCounter.style.display = 'flex'
    data.borderCounter.style.flexDirection = 'column'
    data.borderCounter.style.justifyContent = 'space-between'
    
    
    
    data.borderCounter.append(Header())
    data.borderCounter.append(Count())
    data.borderCounter.append(IncButton())
    data.borderCounter.append(DecButton())
    
    document.body.append(data.borderCounter)
}