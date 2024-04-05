import {Settings} from './settings/settings.component.js'
import {Scores} from './scores/scores.component.js'
import {Grid} from './grid/grid.component.js'
export function Game() {
    const containerElement = document.createElement('div')
    
    const settingsElement = Settings()
    const scoresElement = Scores()
    const gridElement = Grid()
    
    containerElement.append(settingsElement, scoresElement, gridElement)
    
    return containerElement
}