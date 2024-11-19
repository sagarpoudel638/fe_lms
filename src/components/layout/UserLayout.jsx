import React from 'react'
import Footer from './Footer.jsx'
import {Container, Row, Col} from 'react-bootstrap'
import Header from './Header.jsx'
import { Sidebar } from './Sidebar.jsx'
import { Outlet } from 'react-router-dom'


const UserLayout = () => {
  return (
    <>
    <Header/>
    <Container>
        <Row>
            <Col><Sidebar/></Col>
            <Col><main/></Col>
        </Row>
    </Container>
    <Footer/>
    </>
  )
}

export default UserLayout