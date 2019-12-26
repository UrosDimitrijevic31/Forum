import React from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

const Logo = () => {
    return (
        <>
        {/* <img src="https://dcassetcdn.com/design_img/3695748/192108/21991000/78aj953pqxhgc85m4apt4q4w2y_image.jpg" 
        alt="img forum"/> */}
        <Container>
        <Col xs={6} md={4}>
            <Image src="https://dcassetcdn.com/design_img/3695748/192108/21991000/78aj953pqxhgc85m4apt4q4w2y_image.jpg"
             roundedCircle alt="img forum" />
        </Col>
        </Container>
        
        </>
    )

}

export default Logo