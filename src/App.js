import React, { useEffect }from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Login from "./components/Login";
// import Logout from "./components/Logout";
import Register from "./components/Register";
import SideBar from "./components/SideBar";
import RightBar from "./components/RightBar";
import { actionTypes } from "./reducer";
// import getWeather from "./components/getWeather";
import Farm from "./components/Farm";
import NewFarmInput from "./components/NewFarmInput";
import SoilAssesment from "./components/SoilAssesment";
import Schedule from "./components/Schedule";
import "./App.css";

function App () {
    // const [weather, setWeather] = useState({});
    const [{ user,cood },dispatch] = useStateValue();
    useEffect(()=>{
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocationInfo);
      }
      function displayLocationInfo(position){
        const lat = position.coords.longitude;
        const long = position.coords.latitude;
        console.log(`longitude: ${long} | latitude: ${lat}`);
        dispatch({
          type:actionTypes.SET_COOD,
          cood:{lat:lat,long:long}
        })
      //   const response = getWeather(cood?.lat,cood?.long);
      //   setWeather({data:response})
      //   console.log(weather)
      }
    },[dispatch])
  console.log(cood);
  
    if (user?.name==="guest"){
      return  < Register/>
    } 
      
    return user ? (
      <BrowserRouter>
        <div>
          <Navigation />
          <div className="main">
            <div className="side-bar">
              <SideBar />
            </div>
            <div className="mid">
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />
                {/* <Route path="/logout" component={Logout} /> */}
                <Route path="/register" component={Register} />
                <Route path="/new_farm_input" component={NewFarmInput} />
                <Route path="/farm" component={Farm} />
                <Route path="/soil_assesment" component={SoilAssesment} />
                <Route path="/schedule_farm_input" component={Schedule} />
                <Route component={Error} />
              </Switch>
            </div>
            <div className="right-bar">
              <RightBar />
            </div>
          </div>
          <div>
            <h5>Footer area</h5>
          </div>
        </div>
      </BrowserRouter>
    ) : (
      <Login />
    );
  }

 
export default App;


// import React from 'react';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         NutriCalc
//       </header>
//     </div>
//   );
// }

// export default App;
