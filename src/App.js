import React, { Children, Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Test from './components/Test';
import Home from './components/Search/Home';
import Details from './components/RepoDetails/Details';
import Readme from './components/RepoDetails/Readme';

const NoMatch =() => (
  <div>404</div>
)

const Child = ({ match }) => (
  <Details id={match.params.id}/>
)


const ReadmeRedirect = ({ match }) => (
  <Readme username={match.params.username} repo={match.params.repo}/>
)


class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home}/>
        <Route path="/test" component={Test}/>
        <Route path="/username/:id" component={Child}/>
        <Route path="/readme/:username/:repo" component={ReadmeRedirect}/>
        {/* <Route path="*"><NoMatch /></Route> */}
      </Router>
    )
  }
}

export default App;
