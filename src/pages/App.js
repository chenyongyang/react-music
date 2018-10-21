import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"

import asyncComponent from 'common/asyncComponent.js'
import Sider from 'base/sider/sider.js'
import Header from 'components/header/header.js'

const Discover = asyncComponent(() => import('pages/discover/discover.js'));


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSider: false
    }
  }
  openSider = (state) => {
    this.setState({
      isSider: state
    })
  };
  render() {
    return (
      <Router>
        <Sider className="App music" isSider={this.state.isSider} onOpen={this.openSider}>
          <Header onOpen={this.openSider} />
          <main className="main">
            <Switch>
              <Route path="/discover" component={Discover} />
              <Redirect to="/discover" />
            </Switch>
          </main>
        </Sider>
      </Router>
    );
  }
}

export default App;
