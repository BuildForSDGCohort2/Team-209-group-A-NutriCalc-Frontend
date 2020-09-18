import React,{ useEffect } from 'react';
import getWeather from "./getWeather"
import { useStateValue } from "../StateProvider"
import "./Home.css"
import Weather from "./Weather"



 
const Home = () => {

    const[{cood}]= useStateValue()
    //  const [weather,setWeather]=useState({})
  
   
    useEffect(()=>{
      
      cood? getWeather(cood.lat, cood.long): console.log("no coods")
  },[cood, cood.lat, cood.long])
 
    return (
      <div>
        <div></div>
        <div className="main-container">
          <div className="home-container">
            <h6>
              Its easy! Click on new farm input, choose the type of crop, the
              type of fertilizer input, the land acreage{" "}
            </h6>
            <h6>weather</h6>
            <div className="weather">
              <h5>City: Kitale</h5>
              <h6>Weather description</h6>
              <p>
                qrggugbbbbxgbkXBKGXSgtqpgkxgahghxaxxgyqtxoJHsLBXBZJKjkJZ
                zgbKHGZBZHBGDXHHKzhgzhhv
              </p>
            </div>
            <Weather />
          </div>
        </div>
        <div>
          <h5>Footer area</h5>
        </div>
      </div>
    );
}
 
export default Home;