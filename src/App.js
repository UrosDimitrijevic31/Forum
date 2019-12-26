import React, { useState } from 'react';
import './App.css';
import Header from './layout/header';
import Footer from './layout/footer';
import Content from './layout/content';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [user,setUser] = useState();

  return (
    <>
    <Router>
      <Header user={user} logedIn={user} setUser={setUser}/>
      <Content setUser={setUser} user={user} />
      <Footer />
    </Router>  
    </>
  );
}

export default App;
