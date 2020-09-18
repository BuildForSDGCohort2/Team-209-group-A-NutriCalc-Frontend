export const initialState = {
    user:null,
}

export const actionTypes = {
    SET_USER: "SET_USER",
    SET_COOD: "SET_COOD"
}
const reducer = (state,action) =>{
    console.log(action)
    switch(action.type){
        case actionTypes.SET_USER:
            return{
                ...state,
                user:action.user,
            }
            case actionTypes.SET_COOD:
                return{
                    ...state,
                    cood:action.cood
                }
        default:
            return state
    }

}
export default reducer