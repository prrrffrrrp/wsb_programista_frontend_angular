import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Profile from './components/Profile';
import ChatContainer from './components/ChatContainer';
import Page404 from './components/Page404';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            < Navbar />
            <div class="chat-body">
                <Switch>
                    <Route exact path='/'>
                        < Redirect to='/profile' />
                    </Route>
                    <Route exact path='/profile'>
                        <Profile/>
                    </Route>
                    <Route exact path='/chat'>
                        <ChatContainer/>
                    </Route>
                    <Route path='*'>
                        <Page404/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
