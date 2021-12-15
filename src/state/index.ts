interface IInitialState {
    music_file_path: string
    playing: boolean
    id:string
    index:string
}

export const initialState: IInitialState = {
    id:"",
    music_file_path: "",
    playing: false,
    index: ""
}




export const reducer = (state: IInitialState = initialState, action) => {
    console.log('2 index',action.index);
    switch (action.type) {
        case 'PLAY':
            return {
                ...state,
                playing: true,
                music_file_path: action.path || state.music_file_path, 
                id:action.id || state.id,
                /* В дпнном случае я передавал 0, через action. 
                Но тут это не отрабаываетб
                 так как используеться оператор или который приравнивает 0 к false  и не меняет значение */
                index:action.index || state.index 
            }
        case 'PAUSE':
            return { ...state, playing: false }
        default:
            return state
    }
}