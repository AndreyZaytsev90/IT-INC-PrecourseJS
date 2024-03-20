import {data, incrementCount} from "../../../data/data.js";

export function IncButton() {
    const incButton = document.createElement('button')
    incButton.innerHTML = data.incButton
   /* incButton.onclick = increment*/
    incButton.addEventListener('click', increment)
   
    return incButton
}

const increment = () => {
    incrementCount()
}




