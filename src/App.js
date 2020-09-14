import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
 
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Login from "./components/Login";
import Register from "./components/Register";
function App () {
    const [{ user }] = useStateValue();
    
    return (user?
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>: <Login/>
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
