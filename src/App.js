import React from 'react'
import UsersList from './userslist'
import UserShow from './usersshow'
import PostsList from './postslist'
import PostShow from './postsshow'
import './App.css'
import {BrowserRouter,Route,Link} from 'react-router-dom'

function App(props) {
  return (
    <BrowserRouter>
      <div>
         <Link to='/users'>UsersList</Link>-
         <Link to ='/posts'>Titles</Link>
         
        <Route path='/users' component={UsersList} exact={true}/>
        <Route path='./users/:id' component={UserShow} />
        <Route path='./posts' component ={PostsList} exact={true}/>
        <Route path='./posts/:id' component={PostShow}/>
      </div>
    </BrowserRouter>
    
  )
}

export default App;
