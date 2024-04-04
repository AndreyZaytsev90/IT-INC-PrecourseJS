export const OFFER_STATUSES = {
    default: 'default',
    missed: 'missed',
    caught: 'caught'
}
export const data = {
    settings: {
        rowsCount: 6,
        columnCount: 6,
        pointsToWin: 10,
        maximumMisses: 3,
        decreaseDeltaInMs: 100,
        inMuted: true
    },
    status: OFFER_STATUSES.missed,
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

setInterval(()=> {

},2000)
