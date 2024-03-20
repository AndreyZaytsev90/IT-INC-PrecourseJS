import {renderCounter} from "../components/counter/renderCounter.js";

export const data = {
    headerTitle: 'Counter',
    clientsCount: 0,
    borderCounter: '',
    incButton: '+',
    decButton: '-'
}

let callback = function() {}

// каждую секунду будем увеличивать data.count 
setInterval(function() {
    data.clientsCount++;
    // и затем перерисовывать весь счётчик 
    callback();
}, 3000);


export function setCallback(newCallback){
    callback = newCallback
}

export function incrementCount() {
    data.clientsCount++
    callback()
}
                                                
export function decrementCount(){
    data.clientsCount--
    callback()
}