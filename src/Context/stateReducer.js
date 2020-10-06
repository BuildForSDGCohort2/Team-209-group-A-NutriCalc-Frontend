

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_COOD: "SET_COOD",
  SET_PLANTS: "SET_PLANTS",
  SET_FERTILIZERS: "SET_FERTILIZERS",
  SET_FARMERFARMS: "SET_FARMERFARMS",
};



const stateReducer = (state,action) =>{
    console.log(action)
    switch (action.type) {
      case actionTypes.SET_USER:
        return {
          ...state,
          user: action.payload,
        };
      case actionTypes.SET_COOD:
        return {
          ...state,
          cood: action.payload,
        };
      case actionTypes.SET_PLANTS:
        return {
          ...state,
          getPlants: action.payload,
        };
      case actionTypes.SET_FERTILIZERS:
        return {
          ...state,
          getFertilizers: action.payload,
        };
      case actionTypes.SET_FARMERFARMS:
        return {
          ...state,
          getFarmerFarms: action.payload,
        };
      default:
        return state;
    }

}
export default stateReducer