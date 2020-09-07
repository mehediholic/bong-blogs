import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


function App() {
  return (
    <>
    <Header></Header>
    <React.Fragment>
        <CssBaseline />
          <Container>
            <Router>
              <Switch>
                <Route path="/home">
                  <Home></Home>
                </Route>
                <Route path="/post/:postId">
                  <PostDetail></PostDetail>
                </Route>
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route path="*">
                  <NoMatch></NoMatch>
                </Route>
              </Switch>
            </Router>
          </Container>
    </React.Fragment>
    </>
  );
}

export default App;
