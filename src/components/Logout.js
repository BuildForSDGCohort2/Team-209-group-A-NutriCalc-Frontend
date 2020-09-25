import React,{useState} from "react";
import { Redirect } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";


const Logout = () => {
  const [redirect, setRedirect] = useState(null);
  const [{},dispatch] = useStateValue();
  
    // set user to none
        dispatch({
          type: actionTypes.SET_USER,
          user: {},
        });
    setRedirect(true);
    if (redirect) {
        return <Redirect to="/login" push={true}/>;
  }
   
  };
  
export default Logout;
