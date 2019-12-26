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

    const [message, setMessage] = useState(''); //dodavanje nove poruke
    const [topics, setTopics] = useState([]); //zbog naslova teme

    //dodavanje nove poruke
    function handleSubmit() {
        if(user=== undefined || message === '') return ;
        addMessage(user.username, topicID, message).then(data => {
            if (data.success) {
                console.log('uspesno dodata poruka')
            }
            else {
                console.log('nesto ne radi')
            }
        })
    }

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

    return (
        <>  
            {/*PRIKAZUJE NASLOV TEME */}
            {topics.filter(x => x.topic_id === topicID).map(x => <h1 key={x.topic_id}>{x.title}</h1>)}
            
            {/*PRIKAZUJE SVE PORUKE */}
            {topic.map((topic) => <Message key={topic.message_id} topicID={topic.topic_id} 
            topic={topic} user_id={topic.user_id}/>)}

            <div>
                <form action="">
                    <input type="text" placeholder='odgovor na trenutnu temu..' onInput={e => {
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
