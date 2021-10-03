import Login from "./pages/login/Login";
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Login />
        </Route>
        <Route path='/signup' exact>
          <Signup />
        </Route>
        <Route path='/home' >
          <Home />
        </Route>
        {/* <Redirect to='/'/> */}
      </Switch>
    </Router>
  );
}

export default App;
