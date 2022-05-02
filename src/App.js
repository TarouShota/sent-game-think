import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { Result } from './features/posts/Result'

import { Who } from './features/posts/Who'


function App() {
  return (
    <Router>
      <Navbar />
      {/* <Result /> */}
      <div className="App">
        <Switch>

          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <h1 style={{ color: '#f0f0f0' }}>Start playing (☞ﾟヮﾟ)☞ </h1>
              </React.Fragment>

            )}
          />

          <Route exact path="/quest/:questId" component={Who}></Route>
          <Route exact path="/quest/result" component={Result}></Route>

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
