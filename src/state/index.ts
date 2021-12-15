interface IInitialState {
    music_file_path: string
    playing: boolean
    id: string
    index: string
    currentTime: number
    duration: number
    volume:number
}

const DEFAULT_VOLUME = 0.65

export const initialState: IInitialState = {
    id: "",
    music_file_path: "",
    playing: false,
    index: "",
    currentTime: 0,
    duration: 0,
    volume: DEFAULT_VOLUME
}

export const reducer = (state: IInitialState = initialState, action) => {
    switch (action.type) {
        case 'PLAY':
            return {
                ...state,
                playing: true,
                music_file_path: action.path || state.music_file_path,
                id: action.id || state.id,
                index: action.index || state.index
            }
        case 'PAUSE':
            return { ...state, playing: false }
        case 'SET_CURRENT_TIME':
            return { ...state, currentTime: action.time }
        case 'SET_DURATION':
            return { ...state, duration: action.duration }
        case 'SET_VOLUME':
            return { ...state, volume: parseFloat(action.volume) }
        }
    return state
}