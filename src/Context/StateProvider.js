import React, {  useReducer,useMemo } from 'react'
// import getPlants from '../API/getPlants'
// import getFertilizers from "../API/getFertilizers"
// import getFarmerFarms from "../API/getFarmerFarms"
import StateContext from "./stateContext"
import stateReducer from "./stateReducer"
// import {actionTypes} from "./stateReducer"


const StateProvider = (props) =>{ 

  const initialState = {
    user: null,
    getPlants: [],
    getFertilizers: [],
    getFarmerFarms: [],
    coordinates:{},
  };

  const [state, dispatch] = useReducer(stateReducer, initialState);
  const contextValue= useMemo(() =>(
    {
      state:state,
      dispatch:dispatch
    }
  ),[state,dispatch])
  
  
//   const getAllPlants = async ()=>{
//     try {
//       const res = await getPlants()
//       const data= res.json()
//       dispatch({
//         type:actionTypes.SET_PLANTS,
//         payload:data
//       })
      
//     } catch (error) {
//       console.log(error)
//     }
//   }
//  const getAllFertilizers = async () => {
//    try {
//      const res = await getFertilizers();
//      const data = res.json();
//      dispatch({
//        type: actionTypes.SET_FERTILIZERS,
//        payload: data,
//      });
//    } catch (error) {
//      console.log(error);
//    }
//  };
//  const getAllFarmerFarms = async ({id}) => {
//    try {
//      const res = await getFarmerFarms(id);
//      const data = res.json();
//      dispatch({
//        type: actionTypes.SET_FARMERFARMS,
//        payload: data,
//      });
//    } catch (error) {
//      console.log(error);
//    }
//  };
// const getCood=()=>{
// if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(displayLocationInfo);
//       }
//       function displayLocationInfo(position){
//         const lat = position.coords.longitude;
//         const long = position.coords.latitude;
//         console.log(`longitude: ${long} | latitude: ${lat}`);
//         const coordinates = {lat:lat,long:long}
//         dispatch({
//           type:actionTypes.SET_COOD,
//           payload: coordinates
//         })
//       }
//     }

  return (
    <StateContext.Provider
      value={contextValue}
    >
      {props.children}
    </StateContext.Provider>
  );
}

export default StateProvider