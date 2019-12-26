import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {getUserId } from "../utility/forum-service";

const Message = ({ topic,user_id }) => {

    //topic mi treba da izvucem info za temu 

    const [userID] = useState(user_id) //moram da prosledim id usera koji je napisao komentar
    const [user, setUser] = useState({})
    
    //informacije o usera, treba da se prosledim userID
    useEffect(() => {
        getUserId(userID)
        .then(data => {
            setUser(data.user) //dobijem tacnog usera, koji je napisao poruku
        })
    },[userID])

    let x = new Date(topic.timestamp)
    let b = x.toLocaleTimeString(topic.timestamp)
    let a = x.toLocaleDateString(topic.timestamp)

    return(
        <div>
            <p><strong>{b} </strong>{`${a}`} poruka: <strong>{topic.message.toString()}</strong>
            <Link to ={`/profile/${user.user_id}`} key={user.user_id}> 
                 Username: {user.username} 
            </Link>
            </p>
        </div>
    )
}
export default Message


