import React, {useEffect,useContext} from 'react';
import "./Home.css"
import Weather from "../components/Weather"
// import weatherData from "./getWeather"
import StateContext from "../Context/stateContext";


const Home = () => {
  const contextValue= useContext(StateContext);
  const{ state } = contextValue;
  console.log(state.coordinates)
  useEffect(()=>{
 
  }, []);
  
    return (
      <div className="main-container">
        <div className="home-container">
          <h6>
            Its easy! Click on new farm input, choose the type of crop, the type
            of fertilizer input, the land acreage{" "}
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
          <div className="weather">
            <h5>City: Kitale</h5>
            <h6>Weather description</h6>
            <p>
              qrggugbbbbxgbkXBKGXSgtqpgkxgahghxaxxgyqtxoJHsLBXBZJKjkJZ
              zgbKHGZBZHBGDXHHKzhgzhhv
            </p>
          </div>
          <div className="weather">
            <h5>City: Kitale</h5>
            <h6>Weather description</h6>
            <p>
              qrggugbbbbxgbkXBKGXSgtqpgkxgahghxaxxgyqtxoJHsLBXBZJKjkJZ
              zgbKHGZBZHBGDXHHKzhgzhhv
            </p>
          </div>
          <div className="weather">
            <h5>City: Kitale</h5>
            <h6>Weather description</h6>
            <p>
              qrggugbbbbxgbkXBKGXSgtqpgkxgahghxaxxgyqtxoJHsLBXBZJKjkJZ
              zgbKHGZBZHBGDXHHKzhgzhhv
            </p>
          </div>
          <div className="weather">
            <h5>City: Kitale</h5>
            <h6>Weather description</h6>
            <p>
              qrggugbbbbxgbkXBKGXSgtqpgkxgahghxaxxgyqtxoJHsLBXBZJKjkJZ
              zgbKHGZBZHBGDXHHKzhgzhhv
            </p>
          </div>
          <Weather/>
        </div>
      </div>
    );
}
 
export default Home;