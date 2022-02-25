import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 


import Dashboard from './Dashboard/Dashboard';
import Companies from './Companies/Companies';
import MAadvisors from './MAadvisors/MAadvisors';
import Matches from './Matches/Matches';
import MatchesCompanies from './Matches/MatchesCompanies';
import AddIns from './AddIns/AddIns';
import Account from './Account/Account';


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
          <Route exact path='/account' component={Account} />
          <Route exact path='/addIns' component={AddIns} />
          
        </Switch>
            
      </Router>
      
 
    </>
  )
}

export default App
