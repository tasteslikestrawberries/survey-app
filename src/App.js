import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

//components
import Header from './components/header';
import NewSurvey from './components/newsurvey';
import Results from './components/results';

//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


//assets

function App() {
  return (
    
    <Router>
    <>
    <Header />
          <Switch>
          
            <Route path='/results'>
              <Results />
            </Route>

            <Route path='/newsurvey'>
              <NewSurvey />
            </Route>

            <Redirect to='/newsurvey' />

          </Switch>
    </>
    </Router>
   
  );
}

export default App;
