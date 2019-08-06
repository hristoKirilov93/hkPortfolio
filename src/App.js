/* eslint-disable no-undef */
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/layout/Homepage';
import Calc from './components/projects/calculator/Calc';
import Clock from './components/projects/clock/Clock';
import Todo from './components/projects/todo/Todo';
import ChatUI from './components/projects/chat room/chat';
import Quiz from './components/projects/quiz/Quiz';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/calc' component={Calc} />
            <Route path='/clock' component={Clock} />
            <Route path='/todo' component={Todo} />
            <Route path='/chat' component={ChatUI} />
            <Route path='/quiz' component={Quiz} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;