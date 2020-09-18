import React, { useEffect }from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Login from "./components/Login";
import Register from "./components/Register";
import SideBar from "./components/SideBar"
import RightBar from "./components/RightBar"
import { actionTypes } from "./reducer"
import "./App.css"

function App () {
    const [{ user },dispatch] = useStateValue();
    useEffect(()=>{
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocationInfo);
      }

      function displayLocationInfo(position) {
        const lat = position.coords.longitude;
        const long = position.coords.latitude;
        console.log(`longitude: ${long} | latitude: ${lat}`);
        dispatch({
          type:actionTypes.SET_COOD,
          cood:{lat:lat,long:long}
        })
      }
    },[dispatch])
  

    if (user?.name==="guest"){
      return  < Register/>
    } 
      
    return user ? (
      <BrowserRouter>
        <div>
          <Navigation />
          <div className="side">
            <SideBar />
            <RightBar />
          </div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route component={Error} />
          </Switch>
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
