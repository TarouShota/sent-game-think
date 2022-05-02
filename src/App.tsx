import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

// import { PostList } from './features/posts/PostList'
import { Navbar } from './app/Navbar'
import { Result } from './features/posts/Result'
// import { AddPostForm } from './features/posts/AddPostForm'
// import { FirstPart } from './features/postsnh/FirstPart'
// import { EditPostForm } from './features/posts/EditPostForm'
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
                {/* <Who /> */}
              </React.Fragment>
              // <React.Fragment>
              //   <AddPostForm />
              //   <PostList />
              // </React.Fragment>
            )}
          />
          {/* <Route exact path="/posts/:postId" component={FirstPart} />
          <Route exact path="/editPost/:postId" component={EditPostForm}></Route> */}
          <Route exact path="/quest/:questId" component={Who}></Route>
          <Route exact path="/quest/result" component={Result}></Route>
          {/* <Route exact path="/quest/1" component={Who}></Route>
          <Route exact path="/quest/2" component={What}></Route>
          <Route exact path="/quest/3" component={When}></Route>
          <Route exact path="/quest/4" component={Where}></Route> */}
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
