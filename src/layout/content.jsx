import React from 'react'
import TopicList from '../components/topicList'
import { Switch, Route } from 'react-router'
import Register from '../components/register'
import Login from '../components/login'
import Topic from '../components/topic'
import Profil from '../components/profile'

const Content = ({setUser, user}) =>{
    return (
        <content>
            <Switch>
                <Route exact path='/' component={(props) => <TopicList user={user}/>} />
                <Route path='/login' component={(props) => <Login setUser={setUser} {...props}/> } />   
                <Route path='/register1' component={(props) =>  <Register setUser={setUser} {...props}/>} /> 
                <Route path='/profile/:user_id' component={Profil} />  
                <Route path='/message/:topic_id' component={(props) => <Topic user={user}/>} />    
            </Switch>             
        </content>
    )
}
export default Content