import { FIRST_INIT_APP } from "../action/onboardingAction";

interface IAction {
    action: {
        type: string,
        payload: boolean
    }
}
interface IInitState {
    firstTime:boolean
}

const init:IInitState = {
    firstTime: false
}



const onboardingReducer = (state = init, action: any) => {
    switch (action.type) {
        case FIRST_INIT_APP:
            return { ...state, firstTime: action.payload}
        default:
            return state;
    }
}

export default onboardingReducer;