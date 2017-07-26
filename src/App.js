import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import QuestionList from './QuestionList'
import QuestionDetail from './QuestionDetail'
import PageTwo from './pageTwo'
class App extends Component {
  render() {
    return (
      <section>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <BrowserRouter className="App">
          <Switch>
            <Route exact path="/" component={QuestionList}/>
            <Route exact path="/page_two" component={PageTwo}/>
            <Route exact path="/:id" component={QuestionDetail}/>
          </Switch>
        </BrowserRouter>
      </section>
    );
  }
}

export default App;
