import React from 'react'
import { withRouter } from 'react-router'
import { getMsgForTopic, addMessage, getTopics } from '../utility/forum-service'
import { useState } from 'react';
import { useEffect } from 'react';
import Message from './message';

//da ima formu za dodavanje nove teme i poruke
const Topic = ({ user, match }) => {

    const [topicID] = useState(match.params.topic_id); //pokupi id teme
    const [topic, setTopic] = useState([]) // prikazuje poruke

    const [message, setMessage] = useState([]); //dodavanje nove poruke
    const [topics, setTopics] = useState([]); //zbog naslova teme

    //dohvata sve teme
    useEffect(() => {
        getTopics ()
        .then(data => {
            setTopics(data.topics)
        })
      },[])


    //dohvati sve poruke za odredjenu temu
    useEffect(() => {
         getMsgForTopic(topicID).then(data => {
             setTopic(data.messages)
         })
    }, [topicID])

     //dodavanje nove poruke
    function handleSubmit() {
        if(user=== undefined || message === '') return alert('niste uneli odgovor');
        addMessage(user.username, topicID, message).then(data => {
            console.log(data);
            getMsgForTopic(topicID).then(data => {
                setTopic(data.messages)
            })
        })
        setMessage('');
    }


    return (
        <>  
            {/*PRIKAZUJE NASLOV TEME */}
            {topics.filter(x => x.topic_id === topicID).map(x => <h2 key={x.topic_id}>{x.title}</h2>)}
            
            {/*PRIKAZUJE SVE PORUKE */}
            {topic.map((topic) => <Message key={topic.message_id} topicID={topic.topic_id} 
            topic={topic} user_id={topic.user_id}/>)}

            <div>
                <form action="">
                    <input type="text" placeholder='odgovor na trenutnu temu..' value={message} onChange={e => {
                        setMessage(e.target.value);
                    }} />
                    <input type="submit" value='potvrdi' onClick={e => {
                        e.preventDefault();
                        handleSubmit();
                    }
                    } />
                </form>
            </div>
        </>
    )
}
export default withRouter(Topic)
