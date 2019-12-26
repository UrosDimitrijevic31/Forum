import React from 'react'
import { withRouter } from 'react-router'
import { useState } from 'react'
import { login } from '../utility/forum-service'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Login = ({ setUser, history }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    function handleSubmit() {
        login({ username, password })
            .then(data => {
                if (data.success) {
                    setUser(data.user)
                    history.push('/')
                    console.log('Ulogovan')
                }
                else console.log('Nije ulogovan')
            })
    }

    return (
        <>
        {/* <form action="">
            <input type="text" placeholder="Unesite korisnicko ime.." required onInput={e => {
                setUsername(e.target.value);
            }} />
            <input type="password" placeholder="Unesite sifru.." required onInput={e => {
                setPassword(e.target.value);
            }} />
            <input type="submit" value="Potvrdi" onClick={e => {
                e.preventDefault();
                handleSubmit();
            }} />
        </form> */}
        <Form>

        <Form.Group controlId="formBasicEmail">
          <Form.Label >Username</Form.Label>
          <Form.Control type="text" placeholder="Unesite korisnicko ime" required onInput={e => {
                setUsername(e.target.value);
            }} />
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required onInput={e => {
                setPassword(e.target.value);
            }} />
        </Form.Group>
        
        <Button variant="primary" type="submit" onClick={e => {
                e.preventDefault();
                handleSubmit();
            }}>
          Submit
        </Button>
        </Form>
        </>
    )
}
export default withRouter(Login)

