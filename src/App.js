import {
  BrowserRouter as Router, 
  /* gh-pages client side routing problem (check https://create-react-app.dev/docs/deployment):
  HashRouter - why it's not the best approach - # should be local anchors only
  Link inside BreadCrumb works (instead of Breadcrumb href attribute(doesn't use router), but correct method is using basename prop on Router:
  <BrowserRouter basename="/calendar"/>
  <Link to="/today"/> // renders <a href="/calendar/today">
*/
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
    
    <Router basename='/survey-app'>
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
