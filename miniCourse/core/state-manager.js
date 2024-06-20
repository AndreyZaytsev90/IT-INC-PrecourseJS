import {GAME_STATUSES} from "./constants.js";

const _state = {
    game_state: GAME_STATUSES.SETTINGS,
    settings: {
        gridSize: {
            rowsCount: 6,
            columnCount: 6
        },
        /**
         * in milliseconds
         */
        googleJumpInterval: 1000,
        pointsToLose: 3,
        pointsToWin: 3,
    },
    positions: {
        google: {
            x: 1,
            y: 1
        },
        players: [{
            x: 2,
            y: 2
        }, {
            x: 3,
            y: 3
        }]
    },
    points: {
        google: 0,
        players: [0, 0]
    }
}

//Шаблон "Наблюдатель" (Observer pattern)

/*let _observer = () => {} // 1) Заглушка, что бы subscribe был необязательным
export  function subscribe(observer){  // 2) observer - функция наблюдатель
    _observer = observer // 3) Присваиваем заглушке ту функцию, которая стала наблюдателем 
}*/
let _observers = []

export function subscribe(observer) {  // функция добавления наблюдателя в массив наблюдателей
    _observers.push(observer)
}

export function unsubscribe(observer) { // функция удаления наблюдателя в массив наблюдателей
    _observers = _observers.filter((obs) => obs !== observer)
}

function _notifyObserver() {
    _observers.forEach((obs) => {
        try {
            obs()
        } catch (error) {
            console.error(error)
        }
    })
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function _getRandomIntNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function _jumpGoogleToNewPosition() {
    const newPosition = {..._state.positions.google}

    do {
        newPosition.x = _getRandomIntNumber(0, _state.settings.gridSize.columnCount - 1)
        newPosition.y = _getRandomIntNumber(0, _state.settings.gridSize.rowsCount - 1)

        var isPositionMatchingGoogle =
            newPosition.x === _state.positions.google.x && newPosition.y === _state.positions.google.y
        var isPositionMatchingPlayer1 =
            newPosition.x === _state.positions.players[0].x && newPosition.y === _state.positions.players[0].y
        var isPositionMatchingPlayer2 =
            newPosition.x === _state.positions.players[1].x && newPosition.y === _state.positions.players[1].y

    } while (isPositionMatchingGoogle || isPositionMatchingPlayer1 || isPositionMatchingPlayer2) //если ключи true, то значит значения координат совпали и нужно делать регенерацию
    _state.positions.google = newPosition
}


// Архитектурное решение - геттер (функция, которая позволяет достать из стейта данные.
// Далее получить их в другом месте, путем вызова этой функции)
function _getPlayerIndexByNumber(playerNumber) {
    const playerIndex = playerNumber - 1
    if (playerIndex < 0 || playerIndex > _state.points.players.length - 1) {
        throw new Error("Incorrect player number")
    }
    return playerIndex;
}

let jumpGoogleInterval

export async function startGame() {
    
    _state.positions.players[0] = {x:0,y:0}
    _state.positions.players[1] = {x:_state.settings.gridSize.columnCount-1,y:_state.settings.gridSize.rowsCount-1}
    _jumpGoogleToNewPosition()
    _state.points.google = 0
    _state.points.players = [0,0]
    
    jumpGoogleInterval = setInterval(() => {
        _jumpGoogleToNewPosition()
        _state.points.google++
        if (_state.points.google === _state.settings.pointsToWin) {
            clearInterval(jumpGoogleInterval)
            _state.game_state = GAME_STATUSES.LOSE
        } else {
            _state.game_state = GAME_STATUSES.IN_PROGRESS
        }
        /*  _observer() //4) Вызываем */
        _notifyObserver()
    }, _state.settings.googleJumpInterval)
    _state.game_state = GAME_STATUSES.IN_PROGRESS
    _notifyObserver()
}

export async function playAgain(){
    _state.game_state = GAME_STATUSES.SETTINGS
    _notifyObserver()
}

//Interface
export async function getGameStatus() {
    return _state.game_state
}
/**
 * @returns {number}- number of points
 */
export async function getGooglePoints() {
    return _state.points.google
}

/**
 * @param {number} playerNumber - one-based index of player
 * @returns {Promise<number>} - number of points
 */
export async function getPlayersPoints(playerNumber) {
    const playerIndex = _getPlayerIndexByNumber(playerNumber);
    return _state.points.players[playerIndex]
}

export async function getGridSize() {
    return {..._state.settings.gridSize}
}

export async function getGooglePosition() {
    return {..._state.positions.google}
}

export async function getPlayerPosition(playerNumber) {
    const playerIndex = _getPlayerIndexByNumber(playerNumber);
    return {..._state.positions.players[playerIndex]}
}