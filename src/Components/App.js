import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.scss'; 

import Dashboard from './Dashboard/Dashboard';
import Companies from './Companies/Companies';


import SEnvironment from './SelectEnvironment/SEnvironment';
import SApplication from './SelectApplication/SApplication'; 
import ManagementUsers from './Management/ManagementUsers';
import ManagementSingleUser from './Management/ManagementSingleUser';
import ManagementRoles from './Management/ManagementRoles';
import ManagementPermissions from './Management/ManagementPermissions';

// import Layout from './Layout';
 
 
const App = () => {
  return (
    <>  
      <Router>  
        <Switch> 
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/companies' component={Companies} />
          <Route exact path='/environment' component={SEnvironment} />
          <Route exact path='/application' component={SApplication} />
          <Route exact path='/users' component={ManagementUsers} />
          <Route exact path='/single-users' component={ManagementSingleUser} />
          <Route exact path='/roles' component={ManagementRoles} />
          <Route exact path='/permissions' component={ManagementPermissions} />
        </Switch>
            
      </Router>
      
 
    </>
  )
}

export default App
