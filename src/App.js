import Login from "./pages/login/Login";
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Signup from "./pages/signup/Signup";
import {Provider} from "react-redux"
import Home from "./pages/home/Home";
import useToken from "./utils/useToken";

const App = () => {

  const { token, setToken } = useToken();

  return (
      <Router>
      <Switch>
        <Route path='/' exact>
          <Login setToken= {setToken} />
        </Route>
        <Route path='/signup' exact>
          <Signup setToken= {setToken}/>
        </Route>
        <Route path='/home' exact>
          <Home />
        </Route>
        {/* <Redirect to='/'/> */}
      </Switch>
    </Router>
  );
}

export default App;