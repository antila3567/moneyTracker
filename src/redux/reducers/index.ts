import { combineReducers } from "redux";
import onboardingReducer from "./onboardingReducer";
import switchThemeReducer from "./switchThemeReducer";

export const rootReducer = combineReducers({
    onboarding: onboardingReducer,
    switchTheme: switchThemeReducer
})

export type RootState = ReturnType<typeof rootReducer>