import {data, OFFER_STATUSES} from "../../../../data/game.data.js";

export function Cell(x, y) {
    const cellEl = document.createElement('td')
    if(x === data.coords.current.x && y === data.coords.current.y){
        let offerImage = document.createElement('img')
        offerImage.src = './assets/offer.png'
        cellEl.append(offerImage)
    }
    if(data.status === OFFER_STATUSES.caught && x === data.coords.previous.x && y === data.coords.previous.y){
        let offerImage = document.createElement('img')
        offerImage.src = './assets/caught-offer.png'
        cellEl.append(offerImage)
    }
    if(data.status === OFFER_STATUSES.missed &&x === data.coords.previous.x && y === data.coords.previous.y){
        let offerImage = document.createElement('img')
        offerImage.src = './assets/missed-offer.png'
        cellEl.append(offerImage)
    }
    return cellEl
}