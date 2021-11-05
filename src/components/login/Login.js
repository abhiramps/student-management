import React,{useState} from 'react'
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { LoginReq } from '../../services/Services';

function Login() {
    const [LoginCred, setLoginCred] = useState({
        email:'',
        password:''
    })

    const onEmailChange=(ev)=>{
        setLoginCred({...LoginCred,email:ev.target.value})
    }
    const onPasswordChange=(ev)=>{
        setLoginCred({...LoginCred,password:ev.target.value})
    }
    const onSubmit=(ev)=>{
        ev.preventDefault()
        // console.log(LoginCred)
        LoginReq(LoginCred)
    }

    return (
        <React.Fragment>
            <Container>
                <Row className="mt-4">
                    <Col sm={4}></Col>
                    <Col sm={4} >
                        <Form>
                            <h1>LOGIN</h1>
                            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={onEmailChange}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={onPasswordChange}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={onSubmit}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col sm={4}></Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Login
