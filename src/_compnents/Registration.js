import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container,Form, FormGroup, Label, Input, FormText  } from 'reactstrap';
import classnames from 'classnames';
import '../style/signIn_sigUp.css';
import { useForm } from "react-hook-form";
import FormSignup from './FormSignup';
import FormSignIn from './FormSignIn';


export const Registration = () => {
  
    
    const [activeTab, setActiveTab] = useState('1');
   
    
   

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }




    return (
        <>
            <Container>
                <Row>
                    <Col sm="12"> <img src="http://64.71.79.150:8080/assets/images/logo.png" className="mt-3 logo"/></Col>
                    <Col sm={{ size: 6, offset: 3 }}>
                        <Nav tabs className="justify-content-center mt-5">
                            <NavItem >
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { toggle('1'); }}
                                > Sign Up
                                  
                             </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { toggle('2'); }}
                                >
                                     Sign In
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <FormSignup/>
                            </TabPane>
                            <TabPane tabId="2">
                                <FormSignIn/>
                            </TabPane>
                        </TabContent>

                    </Col>
                </Row>
            </Container>

        </>
    )
}

