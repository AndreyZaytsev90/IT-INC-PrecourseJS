export const OFFER_STATUSES = {
    default: 'default',
    missed: 'missed',
    caught: 'caught'
}
export const data = {
    settings: {
        rowsCount: 5,
        columnCount: 5,
        pointsToWin: 10,
        maximumMisses: 3,
        decreaseDeltaInMs: 100,
        inMuted: true
    },
    status: OFFER_STATUSES.caught,
    coords: {
        current: {
            x: 0,
            y: 1
        },
        previous: {
            x: 1,
            y: 5,
        }
    },
    score: {
        missCount: 2,
        catchCount: 1
    }
}
let subscriber = () => {
}

export function subscribe(newSubscriber) {
    subscriber = newSubscriber
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function jumpOfferToRandomPosition(){
    data.coords.current.x = getRandomInt(data.settings.rowsCount);
    data.coords.current.y = getRandomInt(data.settings.columnCount);
    do {
        data.coords.previous.x = getRandomInt(data.settings.rowsCount);
        data.coords.previous.y = getRandomInt(data.settings.columnCount);
    } while(data.coords.previous.x === data.coords.current.x && data.coords.previous.y === data.coords.current.y)

   /* console.log(`current - x: ${data.coords.current.x}; y: ${data.coords.current.y};`)
    console.log(`previous - x: ${data.coords.previous.x}; y: ${data.coords.previous.y};`)*/
}

export function catchOffer(){
    data.score.catchCount++
    jumpOfferToRandomPosition()
    
    clearInterval(jumpIntervalId)
    runJumpInterval()
    
    subscriber()
}

let jumpIntervalId
let prevCatchCount = data.score.catchCount; //потребуется сохранить предыдущее значение
export function runJumpInterval(){
    
    jumpIntervalId = setInterval(() => {
        if(data.score.catchCount === prevCatchCount){
            data.score.missCount++;
        }
        jumpOfferToRandomPosition()
        subscriber()
    }, 2000)
}



//после некоторых вычислений




runJumpInterval()

