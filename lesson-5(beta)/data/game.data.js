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
    status: OFFER_STATUSES.default,
    coords: {
        current: {
            x: 0,
            y: 0
        },
        previous: {
            x: 0,
            y: 0,
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
export function jumpOfferToRandomPosition(){
    // Переносим текущие координаты в предыдущие перед обновлением текущих
    data.coords.previous.x = data.coords.current.x;
    data.coords.previous.y = data.coords.current.y;

    // Обновляем текущие координаты
    data.coords.current.x = getRandomInt(data.settings.rowsCount);
    data.coords.current.y = getRandomInt(data.settings.columnCount);
    // Убедимся, что новые координаты не совпадают с предыдущими
    while(data.coords.previous.x === data.coords.current.x && data.coords.previous.y === data.coords.current.y) {
        data.coords.current.x = getRandomInt(data.settings.rowsCount);
        data.coords.current.y = getRandomInt(data.settings.columnCount);
    }
}


export function catchOffer(){
    clearInterval(jumpIntervalId)
    data.score.catchCount++
    
    if(data.score.catchCount === data.settings.pointsToWin){
        setTimeout(() => {
            data.gameStatus = GAME_STATUSES.WIN
            subscriber() // Полагаю, что вам нужно оповестить подписчика об изменении статуса игры
        }, 500) 
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
        setTimeout(() => {
            data.gameStatus = GAME_STATUSES.LOSE
            subscriber() // Полагаю, что вам нужно оповестить подписчика об изменении статуса игры
        }, 500)
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


export function startGame(){
    clearInterval(jumpIntervalId)
    data.gameStatus = GAME_STATUSES.IN_PROGRESS
    data.status = OFFER_STATUSES.default
    runJumpInterval()
    subscriber()
}

export function playAgain(){
    clearInterval(jumpIntervalId)
    data.gameStatus = GAME_STATUSES.SETTINGS
    data.score.catchCount = 0
    data.score.missCount = 0
    subscriber()
}


