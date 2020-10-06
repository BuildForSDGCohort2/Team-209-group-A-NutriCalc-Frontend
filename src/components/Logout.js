import React,{useState,useContext} from "react";
import { Redirect } from "react-router-dom";
import StateContext from "../Context/stateContext";
import { actionTypes } from "../Context/stateReducer"



const Logout = () => {
  const [redirect, setRedirect] = useState(null);
  const contextValue = useContext(StateContext);

  const { dispatch } = contextValue;
    // set user to none
        dispatch({
          type: actionTypes.SET_USER,
          payload:null,
        });
    setRedirect(true);
    if (redirect) {
        return <Redirect to="/login" push={true}/>;
  }
   
  };
  
export default Logout;
