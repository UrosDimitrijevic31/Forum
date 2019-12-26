import React from 'react'
import { getTopics } from '../utility/forum-service'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SingleTopic from './singleTopic'
import NewTopic from './newTopic'
import Badge from 'react-bootstrap/Badge'

const TopicList = ({user}) => {
    const [topics, setTopic] = useState([]); //u topics ubacuje sve teme

    //dohvata sve teme
    useEffect(() => {
        getTopics().then(data => {
            if (data.success) {
                setTopic(data.topics)
            }
        })
    }, [])

    return (
        <div className='topicList'>
            <h2>
                Example heading 
            </h2>
            <ul>
                {topics.map((tp) => 
                <Link to={`/message/${tp.topic_id}`} key={tp.topic_id}>
                    <SingleTopic key={tp.topic_id} topic={tp} />
                </Link> )}
            </ul>
            <NewTopic user={user}/>
        </div>
    )
}
export default TopicList