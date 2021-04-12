import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
// import NotFound from '.'
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
