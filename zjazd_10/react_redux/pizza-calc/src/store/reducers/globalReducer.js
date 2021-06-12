const initialState = {
    user: "Jan",
    numberOfPeople: 100
}

export const pizzaReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CHANGE_USER_NAME': {
            return {
                ...state,
                user: action.payload
            }
        }
        case 'CHANGE_NUMBER_OF_PEOPLE': {
            return {
                ...state,
                numberOfPeople: action.payload
            }
        }
        case 'RESET': {
            return {
                ...initialState,
                // user: initialState.user,
                // numberOfPeople: initialState.numberOfPeople
            }
        }
        default: return { ...state }
    }
}
