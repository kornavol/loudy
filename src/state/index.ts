interface IInitialState {
    music_file_path: string
    playing: boolean
    id:string
}

export const initialState: IInitialState = {
    id:"",
    music_file_path: "",
    playing: false,
}


export const reducer = (state: IInitialState = initialState, action) => {
    switch (action.type) {
        case 'PLAY':
            return {
                ...state,
                playing: true,
                music_file_path: action.path || state.music_file_path, 
                id:action.id || state.id
            }
        case 'PAUSE':
            return { ...state, playing: false }
        default:
            return state
    }
}