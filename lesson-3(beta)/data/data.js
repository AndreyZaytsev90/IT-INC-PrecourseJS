import {renderCounter} from "../components/counter/renderCounter.js";

export const data = {
    headerTitle: 'Counter',
    clientsCount: 0,
    borderCounter: '',
    button: '+'
}

let callback = function () {}

// каждую секунду будем увеличивать data.count 
setInterval(function() {
    data.clientsCount++;
    // и затем перерисовывать весь счётчик 
    callback();
}, 1000);


export function setCallback(newCallback){
    callback = newCallback
}
                                              