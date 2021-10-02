import logo from './logo.svg';
import './App.css';
import Error from './Component/Error/Error';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Employees from './Component/Employees/Employees';
import Details from './Component/Details/Details';





function App() {
  
  return (
    <div className="App">
     <BrowserRouter>
     <Switch>
      
      <Route exact path='/home'>
      <Home></Home>
      </Route>
      <Route exact path='/employees'>
      <Employees></Employees>
      </Route>
      <Route path='/details/:id'>
        <Details></Details>
      </Route>
      <Route exact path='/'>
      <Home></Home>
      </Route>
      <Route path="*">
        <Error></Error>
      </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
