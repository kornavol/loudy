interface IInitialState {
    test:string
}

export const initialState : IInitialState  ={
    test: 'test'
}


export const reducer = (state ='tt', action) => {
    switch (action.type) {
        case 'TEST':
            state = 'test-state' 
            return  state
    
        default:
            return  state
    }
}