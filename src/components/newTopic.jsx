import React from 'react'
import { newTopic} from '../utility/forum-service'
import { useState } from 'react'
import { addMessage } from '../utility/forum-service'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const NewTopic = ({user}) => {

    //sadrzaj treba automatski da se update-je
    //forma treba da se obrise posle unosa

    const [title, setTitle] = useState('');
    const [firstMsg, setFirstMsg] = useState('');

    function handleSubmit() {
        if(user=== undefined || title === '') return alert('niste ulogovani ili niste uneli naziv teme');
        else {
            //dodavanje nove teme i prve poruke
            newTopic(user.user_id, title).then(data => {
                addMessage(user.username, data.topic.topic_id, firstMsg)
            })
        }
    }
    
    return (
        <div>
            {/* <form action="">
                <input type="text" placeholder='unesite naziv teme..' required onInput={e => {
                    setTitle(e.target.value);
                }} />
                <input type="text" placeholder='unesite prvu poruku..' required onInput={e => {
                    setFirstMsg(e.target.value)
                }} />
                <input type="submit" value='OK' onClick={e => {
                    e.preventDefault();
                    handleSubmit();
                }} />
            </form> */}
            <Form>

        <Form.Group controlId="formBasicEmail">
          <Form.Label >Unesite naziv teme</Form.Label>
          <Form.Control type="text" placeholder="Unesite naziv teme" value={title} onChange={e => {
                    setTitle(e.target.value);
                }} />
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Unesite prvu poruku</Form.Label>
          <Form.Control type="text" placeholder="Unesite prvu poruku"  value={firstMsg} onChange={e => {
                    setFirstMsg(e.target.value)
                }} />
        </Form.Group>
        
        <Button variant="primary" type="submit"onClick={e => {
                    e.preventDefault();
                    handleSubmit();
                }} >
          Submit
        </Button>
        </Form>
        </div>
    )
}
export default NewTopic