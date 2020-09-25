import React, {useEffect} from 'react';
import "./Home.css"
import Weather from "./Weather"
// import weatherData from "./getWeather"
import { useStateValue } from '../StateProvider';

const Home = () => {
  const { cood }= useStateValue()
  // const [weather,setWeather]=useState({})
  useEffect(()=>{
  //  const response = weatherData(cood);
  // setWeather(response);
  }, [cood]);
  // console.log(weather);
    
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