
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

//components
import Header from './components/header';
import Survey from './components/survey';
import StepSelector from './components/stepselector';
import Results from './components/results';

//styles
import './App.css';

//icons
/*import { Icon } from '@iconify/react';*/

//assets

function App() {
  return (
    
    <Router>
    <>
    <Header />

    <StepSelector />
      <Switch>
       
        <Route path='/results'>
          <Results />
        </Route>

        <Route>
          <Survey />
        </Route>

      </Switch>
     
    </>
    </Router>
   
  );
}

export default App;
