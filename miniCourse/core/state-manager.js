const _state = {
    points: {
        google: 12,
        players: [10, 11]
    }
}

export const getGooglePoints = () => _state.points.google

export const getPlayersPoints = (playerNumber) => {
    if (playerNumber > 0){
        return _state.points.players[playerNumber - 1];
    } else {
        console.log("Номер игрока не может быть меньше 1")
        return null
    }
   
}