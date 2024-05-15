import {
    catchOffer,
    data,
    OFFER_STATUSES,
} from "../../../../data/game.data.js";

export function Cell(x, y) {
    const cellEl = document.createElement('td')

    let offerImage = document.createElement('img')
    offerImage.src = './assets/offer.png'

    let offerCaughtImage = document.createElement('img')
    offerCaughtImage.src = './assets/caught-offer.png'

    let offerMissedImage = document.createElement('img')
    offerMissedImage.src = './assets/missed-offer.png'
 
    
    
    if (x === data.coords.current.x && y === data.coords.current.y) {
        offerImage.addEventListener('click', () => catchOffer())
        cellEl.append(offerImage)
    }

    if (data.status === OFFER_STATUSES.caught && x === data.coords.previous.x && y === data.coords.previous.y) {
        cellEl.innerHTML = ''
        cellEl.append(offerCaughtImage)
    }
    
    
    if (data.status === OFFER_STATUSES.missed && x === data.coords.previous.x && y === data.coords.previous.y) {
        cellEl.innerHTML = ''
        cellEl.append(offerMissedImage)
    }
    
    return cellEl
}