import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
            <h1>Nawigacja</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
            <Switch>
                <Route exact path={['/', '/home']}>
                    <Home/>
                </Route>
                <Route exact path='/about'>
                    <About/>
                </Route>
                <Route exact path='*'>
                    <Error/>
                </Route>
            </Switch>
        </Router>

    </div>
  );
}

function Home() {
    return <h1>HOME!</h1>
}

function About() {
    return <h1>About!</h1>
}

function Error() {
    return <h1>Error!</h1>
}

export default App;
