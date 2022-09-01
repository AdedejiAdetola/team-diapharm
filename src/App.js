import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './pages/LoginPage/LoginPage';
import Signup from './pages/SignupPage/Signup';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
                <LandingPage />
            </Route>

            <Route exact path="/login">
                <Login />
            </Route>

            <Route exact path="/signup">
                <Signup />
            </Route>
          </Switch>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
