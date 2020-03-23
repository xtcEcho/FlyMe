import React, {Component} from 'react';
import { Route } from 'react-router-dom'
import Nav from './Nav/Nav'
import Home from './Home/Home'
import PostPage from './PostPage/PostPage'
import AddPost from './AddPost/AddPost'
import SignIn from './SignIn/SignIn'
import './App.css'

class App extends Component {

  render(){
    return(
      <div className="App">
        <Nav />
        <Route
          exact path='/'
          render={(props) => <Home {...props} store={this.props.store}/>}
        />    
        <Route 
          path='/review/:postId'
          render={(props) => <PostPage {...props} store={this.props.store}/>}
        />
        <Route
          path='/add-review'
          component={AddPost}
        />
        <Route
          path='/sign-in'
          component={SignIn}
        />
      </div>
    );
  }
}

export default App;