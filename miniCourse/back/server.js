// Импорт Express
import express from 'express';
import cors from 'cors';
import {
    startGame,
    getGameStatus,
    getGooglePosition,
    playAgain,
    getPlayerPosition,
    getGridSize, getPlayersPoints, getGooglePoints, movePlayer
} from "../core/state-manager-server.js";

// Создание экземпляра приложения
const app = express();
app.use(cors())

// Порт, на котором будет запущен сервер
const PORT = 3000;

startGame()

// Определение endpoint
app.get('/startGame', async (req, res) => {
    await startGame()
    res.send(200);
});
app.get('/playAgain', async (req, res) => {
    await playAgain()
    res.send(200);
});
app.get('/movePlayer', async (req, res) => {
    await movePlayer(req.query.playerNumber, req.query.direction)
    res.send(200);
});
app.get('/getGameStatus', async (req, res) => {
    const gameStatus = await getGameStatus()
    res.send({data: gameStatus});
});
app.get('/getGooglePoints', async (req, res) => {
    const googlePoints = await getGooglePoints()
    res.send({data: googlePoints});
});
app.get('/getPlayersPoints', async (req, res) => {
    console.log(req.query)
    const playerPoints = await getPlayersPoints(req.query.playerNumber)

    res.send({data: playerPoints});
});
app.get('/getGridSize', async (req, res) => {
    const gridSize = await getGridSize()
    res.send({data: gridSize});
});
app.get('/getGooglePosition', async (req, res) => {
    const googlePosition = await getGooglePosition()
    res.send({data: googlePosition});
});
app.get('/getPlayerPosition', async (req, res) => {
    const playerPosition = await getPlayerPosition(req.query.playerNumber)
    res.send({data: playerPosition});
});





// Запуск сервера
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
