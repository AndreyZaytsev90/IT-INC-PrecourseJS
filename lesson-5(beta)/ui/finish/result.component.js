import {data} from "../../data/game.data.js";

export function Result() {

    const containerElement = document.createElement('div');
    
    const img = document.createElement('img');
    img.className = 'img-background'
    img.src = './assets/Subtract.png';

    const ellipseImg = document.createElement('img');
    ellipseImg.className = 'ellipseImg'
    ellipseImg.src = './assets/Ellipse.png';

    let currentCatchCount = document.createElement('div')
    currentCatchCount.className = 'currentCatchCount'
    let catchTitle = document.createElement('div')
    catchTitle.className = 'catchTitle'
    catchTitle.append('Catch:')
    let catchValue = document.createElement('div')
    catchValue.className = 'catchValue'
    catchValue.append(`${data.score.catchCount}`)
    
    currentCatchCount.append(catchTitle, catchValue )

    let currentMissCount = document.createElement('div')
    currentMissCount.className = 'currentMissCount'
    let missTitle = document.createElement('div')
    missTitle.className = 'MissTitle'
    missTitle.append('Miss:')
    let missValue = document.createElement('div')
    missValue.className = 'missValue'
    missValue.append(`${data.score.missCount}`)

    currentMissCount.append(missTitle, missValue)

    containerElement.append(
        img,ellipseImg,
        currentCatchCount,
        currentMissCount);

    return containerElement;
}