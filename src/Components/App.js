import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 


import Dashboard from './Dashboard/Dashboard';
import Companies from './Companies/Companies';
import MAadvisors from './MAadvisors/MAadvisors';
import Matches from './Matches/Matches';
import MatchesCompanies from './Matches/MatchesCompanies';


import './App.scss'; 

const App = () => {
  return (
    <>  
      <Router>  
        <Switch> 
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/companies' component={Companies} />
          <Route exact path='/advisors' component={MAadvisors} />
          <Route exact path='/matches' component={Matches} />
          <Route exact path='/matchesCompanies' component={MatchesCompanies} />
          
        </Switch>
            
      </Router>
      
 
    </>
  )
}

export default App
