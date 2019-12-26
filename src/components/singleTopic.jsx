import React from 'react'

const SingleTopic =({ topic }) => {

    return (
        <>
            <div>
                <li>{topic.title.toString()}</li>
            </div>
        </>
    )
}
export default SingleTopic