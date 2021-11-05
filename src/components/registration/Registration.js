import React,{useState} from 'react'
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { RegistrationReq } from '../../services/Services';
function Registration() {
    const [RegisterCred, setRegisterCred] = useState({
        f_Name:'',
        l_Name:'',
        email:'',
        phone:'',
        password:'',
        gender:'male',
        batch:'',
        department:'',
        regNo:''
    });

    const onSubmit=(ev)=>{
        ev.preventDefault()
        // console.log(RegisterCred)
        RegistrationReq(RegisterCred);
    }
    return (
        <>
            <Container>
                <h1>Registration</h1>
                <Form className="mt-5">
                    <Row className="mb-3">
                        <Form.Group as={Col} >
                            <Form.Label>first name</Form.Label>
                            <Form.Control type="text" placeholder="Enter first name"  onChange={(ev)=>setRegisterCred({...RegisterCred,f_Name:ev.target.value})}/>
                        </Form.Group>

                        <Form.Group as={Col} >
                            <Form.Label>last name</Form.Label>
                            <Form.Control type="text" placeholder="Enter last name" onChange={(ev)=>setRegisterCred({...RegisterCred,l_Name:ev.target.value})}/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(ev)=>setRegisterCred({...RegisterCred,email:ev.target.value})}/>
                        </Form.Group>

                        <Form.Group as={Col} >
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="phone" onChange={(ev)=>setRegisterCred({...RegisterCred,phone:ev.target.value})}/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} >
                            <Form.Label>password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(ev)=>setRegisterCred({...RegisterCred,password:ev.target.value})} />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3">
                            <Form.Label as="legend" column sm={2}>
                                Gender
                            </Form.Label>
                            <Row>
                                <Col sm={2}>
                                    <Form.Check
                                        type="radio"
                                        label="male"
                                        name="formHorizontalRadios"
                                        // id="formHorizontalRadios1"
                                        // value={RegisterCred.gender}
                                        checked={RegisterCred.gender==='male'}
                                        onChange={(ev)=>setRegisterCred({...RegisterCred,gender:'male'})}
                                    />
                                </Col>
                                <Col sm={2}>
                                    <Form.Check
                                        type="radio"
                                        label="female"
                                        name="formHorizontalRadios"
                                        // id="formHorizontalRadios2"
                                        // value={RegisterCred.gender}
                                        checked={RegisterCred.gender==='female'}
                                        onChange={(ev)=>setRegisterCred({...RegisterCred,gender:'female'})}
                                    />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} >
                            <Form.Label>Batch</Form.Label>
                            <Form.Control type="text" placeholder="batch" onChange={(ev)=>setRegisterCred({...RegisterCred,batch:ev.target.value})}/>
                        </Form.Group>

                        <Form.Group as={Col} >
                            <Form.Label>department</Form.Label>
                            <Form.Control type="text" placeholder="department" onChange={(ev)=>setRegisterCred({...RegisterCred,department:ev.target.value})}/>
                        </Form.Group>

                        <Form.Group as={Col} >
                            <Form.Label>reg no</Form.Label>
                            <Form.Control type="text" placeholder="reg no" onChange={(ev)=>setRegisterCred({...RegisterCred,regNo:ev.target.value})}/>
                        </Form.Group>
                    </Row>
                    <Button variant="primary" type="submit" onClick={onSubmit}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Registration
