interface IInitialState {
    music_file_path: string
    playing: boolean
}

export const initialState: IInitialState = {
    music_file_path: "",
    playing: false,
}


export const reducer = (state:IInitialState = initialState, action) => {
    switch (action.type) {
        case 'PLAY':
            return {
                ...state,
                music_file_path: action.path || state.music_file_path
            }
        default:
            return state
    }
}