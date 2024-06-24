import {EVENTS, GAME_STATUSES, MOVING_DIRECTIONS} from "./constants.js";

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
        googleJumpInterval: 3000,
        pointsToLose: 10,
        pointsToWin: 5,
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

function _notifyObserver(name, payload = {}) {
    const event = {
        name,
        payload
    }
    _observers.forEach((obs) => {
        try {
            obs(event)
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
function _jumpGoogleToNewPosition() {
    const newPosition = {..._state.positions.google}

    do {
        newPosition.x = _getRandomIntNumber(0, _state.settings.gridSize.columnCount - 1)
        newPosition.y = _getRandomIntNumber(0, _state.settings.gridSize.rowsCount - 1)

        /*     var isPositionMatchingGoogle =
                 newPosition.x === _state.positions.google.x && newPosition.y === _state.positions.google.y
             var isPositionMatchingPlayer1 =
                 newPosition.x === _state.positions.players[0].x && newPosition.y === _state.positions.players[0].y
             var isPositionMatchingPlayer2 =
                 newPosition.x === _state.positions.players[1].x && newPosition.y === _state.positions.players[1].y*/
        // Рефакторинг
    } while (
        _doesPositionMatchWithPlayer1Position(newPosition)
        || _doesPositionMatchWithPlayer2Position(newPosition)
        || _doesPositionMatchWithGooglePosition(newPosition)) //если ключи (функции) true, то значит значения координат совпали и нужно делать регенерацию
    _state.positions.google = newPosition
}

function _isPositionValidRange(position) {
    if (position.x < 0 || position.x >= _state.settings.gridSize.columnCount) return false
    if (position.y < 0 || position.y >= _state.settings.gridSize.rowsCount) return false

    return true
}

function _doesPositionMatchWithPlayer1Position(newPosition) {
    return newPosition.x === _state.positions.players[0].x && newPosition.y === _state.positions.players[0].y
}

function _doesPositionMatchWithPlayer2Position(newPosition) {
    return newPosition.x === _state.positions.players[1].x && newPosition.y === _state.positions.players[1].y
}

function _doesPositionMatchWithGooglePosition(newPosition) {
    return newPosition.x === _state.positions.google.x && newPosition.y === _state.positions.google.y
}

function _catchGoogle(playerNumber) {
    const playerIndex = _getPlayerIndexByNumber(playerNumber);

    _state.points.players[playerIndex]++
    _notifyObserver(EVENTS.SCORES_CHANGED)
    _notifyObserver(EVENTS.GOOGLE_CAUGHT)

    if (_state.points.players[playerIndex] === _state.settings.pointsToWin) {
        _state.game_state = GAME_STATUSES.WIN
        _notifyObserver(EVENTS.STATUS_CHANGED)
        clearInterval(jumpGoogleInterval)
    } else {
        const oldPosition = {..._state.positions.google}
        _jumpGoogleToNewPosition()
        _notifyObserver(EVENTS.GOOGLE_JUMPED, {
            oldPosition,
            newPosition: _state.positions.google
        })
    }
}

// ***INTERFACE / ADAPTER***
let jumpGoogleInterval

export async function startGame() {
    //Проверка состояния программы. Возможно ли запустить игру?
    if (_state.game_state !== GAME_STATUSES.SETTINGS) throw new Error(`Incorrect transition from "${_state.game_state}" to "${GAME_STATUSES.IN_PROGRESS}"`)

    _state.positions.players[0] = {x: 0, y: 0}
    _state.positions.players[1] = {
        x: _state.settings.gridSize.columnCount - 1,
        y: _state.settings.gridSize.rowsCount - 1
    }
    _jumpGoogleToNewPosition()
    _state.points.google = 0
    _state.points.players = [0, 0]

    jumpGoogleInterval = setInterval(() => {
        const oldPosition = {..._state.positions.google}
        _jumpGoogleToNewPosition()
        _notifyObserver(EVENTS.GOOGLE_JUMPED, {
            oldPosition,
            newPosition: {..._state.positions.google}
        })
        _notifyObserver(EVENTS.GOOGLE_RUN_AWAY)
        _state.points.google++
        _notifyObserver(EVENTS.SCORES_CHANGED)

        if (_state.points.google === _state.settings.pointsToLose) {
            clearInterval(jumpGoogleInterval)
            _state.game_state = GAME_STATUSES.LOSE
            _notifyObserver(EVENTS.STATUS_CHANGED)
        }
        /*  else {
              _state.game_state = GAME_STATUSES.IN_PROGRESS
          }*/
        /*  _observer() //4) Вызываем */

    }, _state.settings.googleJumpInterval)

    _state.game_state = GAME_STATUSES.IN_PROGRESS
    _notifyObserver(EVENTS.STATUS_CHANGED)
}

export async function playAgain() {
    _state.game_state = GAME_STATUSES.SETTINGS
    _notifyObserver(EVENTS.STATUS_CHANGED)
}

export async function movePlayer(playerNumber, direction) {
    if (_state.game_state !== GAME_STATUSES.IN_PROGRESS) {
        console.warn('You can move player when game is in progress')
        return
    }
    const playerIndex = _getPlayerIndexByNumber(playerNumber);
    const oldPosition = {..._state.positions.players[playerIndex]}
    const newPosition = {..._state.positions.players[playerIndex]}

    switch (direction) {
        case MOVING_DIRECTIONS.UP:
            newPosition.y--;
            break
        case MOVING_DIRECTIONS.DOWN:
            newPosition.y++;
            break
        case MOVING_DIRECTIONS.LEFT:
            newPosition.x--;
            break
        case MOVING_DIRECTIONS.RIGHT:
            newPosition.x++;
            break
    }

    const isValidRange = _isPositionValidRange(newPosition)
    if (!isValidRange) return

    const isPlayer1PositionTheSame = _doesPositionMatchWithPlayer1Position(newPosition)
    if (isPlayer1PositionTheSame) return

    const isPlayer2PositionTheSame = _doesPositionMatchWithPlayer2Position(newPosition)
    if (isPlayer2PositionTheSame) return

    const isGooglePositionTheSame = _doesPositionMatchWithGooglePosition(newPosition)

    if (isGooglePositionTheSame) {
        _catchGoogle(playerNumber)
    }

    _state.positions.players[playerIndex] = newPosition

    _notifyObserver(EVENTS[`PLAYER${playerNumber}_MOVED`], {
        oldPosition: oldPosition,
        newPosition: newPosition
    })
}


// Архитектурное решение - геттер (функция, которая позволяет достать из стейта данные.
// Далее получить их в другом месте, путем вызова этой функции)

// ***GETTERS / SELECTORS***
function _getRandomIntNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function _getPlayerIndexByNumber(playerNumber) {
    const playerIndex = playerNumber - 1

    if (playerIndex < 0 || playerIndex > _state.points.players.length - 1) {
        throw new Error("Incorrect player number")
    }

    return playerIndex;
}

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
