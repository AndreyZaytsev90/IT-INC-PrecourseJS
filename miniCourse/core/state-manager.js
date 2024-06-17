const _state = {
    points: {
        google: 12,
        players: [10, 11]
    }
}
// Архитектурное решение - геттер (функция, которая позволяет достать из стейта данные.
// Далее получить их в другом месте, путем вызова этой функции)

/**
 * @returns {number}- number of points
 */
export const getGooglePoints = () => _state.points.google

/**
 * @param {number} playerNumber - one-based index of player
 * @returns {number|null} - number of points
 */
export const getPlayersPoints = (playerNumber) => {
    const playerIndex = playerNumber - 1
    
   if (playerIndex < 0 || playerIndex > _state.points.players.length -1 ){
       throw new Error("Incorrect player number")
   }
   return _state.points.players[playerIndex]
}