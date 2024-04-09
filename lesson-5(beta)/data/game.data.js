export const GAME_STATUSES = {
    SETTINGS: 'settings',
    IN_PROGRESS: 'in_progress',
    WIN: 'win',
    LOSE: 'lose'
}

export const OFFER_STATUSES = {
    default: 'default',
    missed: 'missed',
    caught: 'caught'
}
export const data = {
    settings: {
        rowsCount: 3, //y
        columnCount: 3, //x
        pointsToWin: 3,
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
        missCount: 0,
        catchCount: 0
    },
    gameStatus: GAME_STATUSES.SETTINGS

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
    clearInterval(jumpIntervalId)
    data.score.catchCount++
    if(data.score.catchCount === data.settings.pointsToWin){
        data.gameStatus = GAME_STATUSES.WIN
    } else {
        jumpOfferToRandomPosition()
        runJumpInterval()
        data.status = OFFER_STATUSES.caught
    }
    subscriber()
}

function missOffer(){
    clearInterval(jumpIntervalId)
    data.score.missCount++;
    if (data.score.missCount === data.settings.maximumMisses){
        data.gameStatus = GAME_STATUSES.LOSE
    } else {
        jumpOfferToRandomPosition()
        runJumpInterval()
        data.status = OFFER_STATUSES.missed
    }
    subscriber()
}

let jumpIntervalId

export function runJumpInterval(){
    jumpIntervalId = setInterval(missOffer, 2000)
}

if(data.gameStatus !== GAME_STATUSES.SETTINGS){
    runJumpInterval()
}

export function startGame(){
    data.gameStatus = GAME_STATUSES.IN_PROGRESS
    runJumpInterval()
}


