// Импорт Express
import express from 'express';
import {startGame, getGameStatus, getGooglePosition, playAgain} from "../core/state-manager.js";

// Создание экземпляра приложения
const app = express();

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
app.get('/getGameStatus', async (req, res) => {
    const gameStatus = await getGameStatus()
    res.send(gameStatus);
});
app.get('/getGooglePosition', async (req, res) => {
    const gameStatus = await getGooglePosition()
    res.send(gameStatus);
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
