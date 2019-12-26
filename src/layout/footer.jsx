import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <footer>   
          <p>&copy; {new Date().getFullYear()} Copyright: Uros Dimitrijevic</p>
    </footer>
  );
}

export default Footer;