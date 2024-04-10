import {GridSize} from "./gridSize.component.js";
import {StartGameButton} from "./startGameButton.js";
import {PointsToWin} from "./pointsToWin.component.js";
import {MsAfterTheCatch} from "./msAfterTheCatch.component.js";
import {MaximumMisses} from "./maximumMisses.component.js";
import {data, GAME_STATUSES} from "../../../data/game.data.js";

export function Settings() {
    
    const containerElement = document.createElement('div')
    containerElement.style.display = 'flex';
    containerElement.style.justifyContent = 'space-between';
    containerElement.style.flexDirection = 'column';
    containerElement.style.alignItems = 'center';
    containerElement.style.minHeight = '50vh';

    const settingsWrapper = document.createElement('div');
    settingsWrapper.style.display = 'flex';
    settingsWrapper.style.justifyContent = 'center';

    const gridSizeSettings = GridSize();
    gridSizeSettings.style.marginRight = '12px';
    settingsWrapper.appendChild(gridSizeSettings);

    const pointsToWinSettings = PointsToWin();
    pointsToWinSettings.style.marginRight = '12px';
    settingsWrapper.appendChild(pointsToWinSettings);

    const msAfterTheCatchSettings = MsAfterTheCatch();
    msAfterTheCatchSettings.style.marginRight = '12px';
    settingsWrapper.appendChild(msAfterTheCatchSettings);

    const maximumMissesSettings = MaximumMisses();
    maximumMissesSettings.style.marginRight = '12px';
    settingsWrapper.appendChild(maximumMissesSettings);

    const startGameButton = StartGameButton();
    startGameButton.style.alignSelf = 'center';
    
    if(data.gameStatus === GAME_STATUSES.IN_PROGRESS){
        startGameButton.style.display = "none"
    }

    containerElement.append(settingsWrapper);
    containerElement.append(startGameButton);

    return containerElement;
}


