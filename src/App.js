
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

//components
import Header from './components/header';
import Nav from './components/navigation';
import NewSurvey from './components/newsurvey';
import StepSelector from './components/stepselector';
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
    <Nav />
    <StepSelector />
          <Switch>
          
            <Route path='/results'>
              <Results />
            </Route>

            <Route path='/'>
              <NewSurvey />
            </Route>

          </Switch>
    </>
    </Router>
   
  );
}

export default App;
