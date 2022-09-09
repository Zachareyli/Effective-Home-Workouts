import { React, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from '../../pages/Home'
import SignInPage from '../../pages/signin'
import LowerBody from '../../pages/lower';
import UpperBody from '../../pages/upper';
import Diet from '../../pages/diet';


export const Routes = () => {  
  
return (
    <Router>
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/signin' component={SignInPage} exact/>
      <Route path='/lowerbody' component={LowerBody} exact/>
      <Route path='/upperbody' component={UpperBody} exact/>
      <Route path='/dietmeal' component={Diet} exact/>
    </Switch>
    </Router> 
  )
}

export default Routes;