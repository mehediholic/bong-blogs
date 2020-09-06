import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';
import Header from './components/Header/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Comment from './components/Comment/Comment';


function App() {
  return (
    <React.Fragment>
        <CssBaseline />
          <Container maxWidth="md">
            <Router>
              <Header></Header>
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
  );
}

export default App;
