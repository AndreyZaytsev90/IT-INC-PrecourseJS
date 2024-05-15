import {data} from "../../data/game.data.js";
import {playAgainButton} from "./playAgainButton.js";
import {Result} from "./result.component.js";

export function Win() {
    const containerElement = document.createElement('div');
    if(data.score.catchCount === data.settings.pointsToWin){
        const youWin = document.createElement('div')
        youWin.className = 'youWin'
        youWin.append('You Win!')

        const congratulations = document.createElement('div')
        congratulations.className = 'congratulations'
        congratulations.append('Congratulations')

        const imgWin = document.createElement('img')
        imgWin.className = 'imgWin'
        imgWin.src = './assets/Win.png';
        
        const playAgainButtonElement = playAgainButton();

        const resultElement = Result()

        containerElement.append(youWin,congratulations,imgWin, playAgainButtonElement, resultElement)
    }
    return containerElement;
}
