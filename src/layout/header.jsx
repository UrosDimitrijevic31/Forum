import React from 'react'
import Logo from '../components/logo'
import { Link,withRouter } from 'react-router-dom'

const Header = ({logedIn, setUser,history,user }) => {
    if(logedIn) { //ako je user ne ulogovan
        return(
        <header className="nav">
            <nav>
                <Link to='/'><Logo /></Link>
                <h1>Forum .. treba naziv foruma</h1>
                <Link to={`/profil/${user.user_id}`}> {user.username} </Link>
                <Link to='/'><button onClick={() => setUser() }>Odjavi se</button></Link>
                <Link to='register1'><button>Registarcija</button></Link>
            </nav>
        </header>
        )
    } 
    else { //ako je user ulogovan
        return(
            <>
            <header className="nav">
                <nav>
                    
                    <Link to='/'><Logo /></Link>
                    <h1 style={{display:'inline-block'}}>Retro forum</h1>
                    <br />
                    <Link to='/login' ><button>Prijavite se</button></Link>
                    <Link to='register1'><button>Registarcija</button></Link>                </nav>
            </header>
            </>
        )
    }
}

export default withRouter(Header)