import {data} from "../../../../data/game.data.js";

export function Cell(x, y) {
    const cellEl = document.createElement('td')
    if(x === data.coords.current.x && y === data.coords.current.y){
        let offerImage = document.createElement('img')
        offerImage.src = './assets/offer.png'
        cellEl.append(offerImage)
    }
    if(x === data.coords.caught.x && y === data.coords.caught.y){
        let offerImage = document.createElement('img')
        offerImage.src = './assets/caught-offer.png'
        cellEl.append(offerImage)
    }
    if(x === data.coords.missed.x && y === data.coords.missed.y){
        let offerImage = document.createElement('img')
        offerImage.src = './assets/missed-offer.png'
        cellEl.append(offerImage)
    }
    
    
    return cellEl
}