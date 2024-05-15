import {data} from "../../data/game.data.js";
import {playAgainButton} from "./playAgainButton.js";
import {Result} from "./result.component.js";

export function Lose() {
    const containerElement = document.createElement('div')
    if(data.score.missCount === data.settings.maximumMisses){
        const youLose = document.createElement('div')
        youLose.className = 'youLose'
        youLose.append('You Lose!')

        const loseMessage = document.createElement('div')
        loseMessage.className = 'loseMessage'
        loseMessage.append('You\'ll be lucky next time')

        const imgLose = document.createElement('img')
        imgLose.className = 'imgLose'
        imgLose.src = './assets/Lose.png';
        const imgLoseVector1 = document.createElement('img')
        imgLoseVector1.className = 'imgVector'
        imgLoseVector1.src = './assets/Vector.png';
        const imgLoseVector2 = document.createElement('img')
        imgLoseVector2.className = 'imgVector'
        imgLoseVector2.src = './assets/Vector-1.png';

        const playAgainButtonElement = playAgainButton();

        const resultElement = Result()

        containerElement.append(youLose,loseMessage, imgLose, imgLoseVector1, imgLoseVector2, playAgainButtonElement, resultElement)
    }
    return containerElement
}