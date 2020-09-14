import React,{useEffect} from 'react';
import getLocation from "./getLocation"


 
const Home = () => {
    useEffect(() => {
      getLocation();
    }, []);
    return (
      <div>
        <div>
          <h1>NutriCalc</h1>
          <h5>Your farm inputs calculator</h5>
          <h6>Its easy! Click on new farm input, choose the type of crop, the type of fertilizer input, the land acreage </h6>
        <button></button>
        </div>
        <div className='' style={{display:"flex"}}>
            <div style={{flex:3,flexDirection:"column"}}>
                
            </div>
            <div style={{flex:7,flexDirection:"column"}}>
                
            </div>
        </div>
      </div>
    );
}
 
export default Home;