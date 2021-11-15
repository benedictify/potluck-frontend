import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Middle from './Components/Middle';
import SignUpForm from './Components/SignUp';
import React from 'react';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path='/events'></Route>
        
        <Route path='/signup'></Route>
        
        <Route path='/login'></Route>

        <Route path='/'>
          <Middle />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
