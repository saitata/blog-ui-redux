import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {Provider} from 'react-redux'
import {startGetUsers} from './actions/usersAction'
import {startGetPosts} from './actions/postsAction'
import {startGetComments} from './actions/commentsAction'
import configureStore from './store/configureStore'


const store=configureStore()
store.subscribe(()=>{
  console.log(store.getState())
})
store.dispatch(startGetUsers())
store.dispatch(startGetPosts())
store.dispatch(startGetComments())
const ele=(
     <Provider store={store}>
     <App/>
     </Provider>
)
ReactDOM.render(ele, document.getElementById('root'));

