import React ,{useState}from 'react';
import { Registration } from './_compnents/Registration'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css'
const App = () => {
  const[isAutheticated, setisAutheticated] = useState(false);

  return (
    <Router>
      <Switch>
        <Route path='/' component={Registration}/>
        {/* <Route path='/unprotected' component={Unprotected}/> */}
      </Switch>
    </Router>
    // <>
    //   <Registration/>
    // </>
  )
}

export default App
 