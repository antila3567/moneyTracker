import { SWITCH_THEME } from "../action/switchTheme";

interface IInitState {
    theme:boolean
}

const init:IInitState = {
    theme: true
}



const switchThemeReducer = (state = init, action: any) => {
    switch (action.type) {
        case SWITCH_THEME:
            return { ...state, theme: action.payload}
        default:
            return state;
    }
}

export default switchThemeReducer;
