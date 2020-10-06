import React, { useEffect, useContext }from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Login from "./components/Login";
import Register from "./components/Register";
import SideBar from "./components/SideBar";
import RightBar from "./components/RightBar";
import Farm from "./components/Farm";
import NewFarm from "./components/NewFarm";
import NewFarmInput from "./components/NewFarmInput";
import SoilAssesment from "./components/SoilAssesment";
import Schedule from "./components/Schedule";
import StateProvider from "./Context/StateProvider"
import StateContext from "./Context/stateContext"
import "./App.css";

function AppNutriCalc () {
  
    const contextValue = useContext(StateContext)
    console.log(contextValue)
    const { state }= contextValue
    
    useEffect(()=>{
      
    },[])
      
  
    if (state.user?.name==="guest"){
      return  < Register/>
    } 
      
    return state.user ? (
        
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
                  <Route path="/register" component={Register} />
                  <Route path="/new_farm_input" component={NewFarmInput} />
                  <Route path="/new_farm" component={NewFarm} />
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
    ) : (
      <Login />
    );
  }


 
function App() {
   return (
     <StateProvider>
       <Router>
       <div id="app">
         <AppNutriCalc />
       </div>
      </Router>
     </StateProvider>
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
