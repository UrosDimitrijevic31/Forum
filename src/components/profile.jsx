import React, { useState, useEffect } from 'react'
import { getUserId } from '../utility/forum-service'

const Profil = ({ match }) => {

    const [userID] = useState(match.params.user_id)
    const [user, setUser] = useState({}) 

    useEffect(() => {
        getUserId(userID)
            .then(data => {
                setUser(data.user)
            })
    }, [userID])

    return (
        <>
            <p>Ime: {user.name}</p>
            <p>Prezime: {user.surname}</p>
            <p>Korisnicko ime: {user.username}</p>
            <p>E-mail: {user.email}</p>
            <img src={user.picture ? user.picture : ''} alt="user-avatar" />
        </>
    )
}
export default Profil