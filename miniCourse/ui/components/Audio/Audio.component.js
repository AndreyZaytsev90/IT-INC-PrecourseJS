import {subscribe} from "../../../core/state-manager.js";
import {EVENTS} from "../../../core/constants.js";

export function AudioComponent(){
const catchAudio = new Audio('assets/sounds/catch.wav')
const missAudio = new Audio('assets/sounds/miss.mp3')
    
    subscribe((event)=> {
        if (event.name === EVENTS.GOOGLE_CAUGHT){
            catchAudio.currentTime = 0
            catchAudio.play()
        }

        if (event.name === EVENTS.GOOGLE_RUN_AWAY){
            missAudio.currentTime = 0
            missAudio.play()
        }
    })

}