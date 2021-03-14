export const  FIRST_INIT_APP = 'FIRST_INIT_APP'

export const firstStart = (bool: boolean) => {
    return {
        type: FIRST_INIT_APP,
        bool
    }
}