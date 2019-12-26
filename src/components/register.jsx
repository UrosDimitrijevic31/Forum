import React, { useState, useEffect } from 'react';
import { register } from '../utility/forum-service';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Register = ({setUser, history}) => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pwConfirm, setPwConfirm] = useState('')
    const [validPw, setValidPw] = useState(false)
    const [isSame, setIsSame] = useState(false)

    useEffect(() => {
        function isValidPw() {
            if ((/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g).test(password)) {
                setValidPw(true)
            }
            else {
                setValidPw(false)
            }
        }
        isValidPw()
    }, [password])

    useEffect(() => {
        setIsSame(pwConfirm === password)
    }, [pwConfirm, password])

    function handleSubmit() {
        if (!validPw || !isSame) return;
        register({ name, surname, username, email, password })
            .then(data => {
                if (data.success) {
                    setUser(data.user)
                    history.push('/')
                    console.log('USPESNA REGISTRACIJA');
                }
                else console.log('Neuspesna registracija')
            })
    }
    return (
        <>
            <Form>

                <Form.Group controlId="formBasicEmail">
                <Form.Label >Ime</Form.Label>
                <Form.Control type="text" placeholder="Unesite ime" required onInput={e => {
                    setName(e.target.value)
                }}  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                <Form.Label>Prezime</Form.Label>
                <Form.Control type="text" placeholder="Unesite Prezime" required onInput={e => {
                    setSurname(e.target.value)
                }}  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                <Form.Label>Korisnicko ime</Form.Label>
                <Form.Control type="text" placeholder="Unesite korisnicko ime" required onInput={e => {
                    setUsername(e.target.value)
                }} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Unesite e-mail " required onInput={e => {
                    setEmail(e.target.value)
                }}  />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                <Form.Label>Sifra</Form.Label>
                <Form.Control type="password" placeholder="Unesite sifru " required onInput={e => {
                    setPassword(e.target.value)
                }}  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                <Form.Label>Potvrdite sifru</Form.Label>
                <Form.Control type="password" placeholder="Potvrdite sifru " required onInput={e => {
                    setPwConfirm(e.target.value)
                }} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={e => {
                    e.preventDefault();
                    handleSubmit();
                } 
                }>
                Submit
                </Button>
                </Form>

            {/* <form action=""> */}
                {/* <input type="text" placeholder="Ime.." required onInput={e => {
                    setName(e.target.value)
                }} />
                <input type="text" placeholder="Prezime.." required onInput={e => {
                    setSurname(e.target.value)
                }} />

                <input type="text" placeholder="Korisnicko ime.." required onInput={e => {
                    setUsername(e.target.value)
                }} /> */}
                {/* <input type="email" placeholder="Email.." required onInput={e => {
                    setEmail(e.target.value)
                }} /> */}
                {/* <input type="password" placeholder="Sifra.." required onInput={e => {
                    setPassword(e.target.value)
                }} /> */}
                {/* <input type="password" placeholder="Potvrdite sifru.." required onInput={e => {
                    setPwConfirm(e.target.value)
                }} /> */}

                {/* <input type="submit" value="Registruj se" onClick={e => {
                    e.preventDefault();
                    handleSubmit();
                } 
                } />
            </form> */}
        </>
    )
}
export default Register