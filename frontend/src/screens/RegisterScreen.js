import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useSearchParams, useLocation } from 'react-router-dom'
import { Form, Button, Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'

const RegisterScreen = () => { 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);

    const [searchParams] = useSearchParams();

    const navigate = useNavigate();

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const { loading, error, userInfo} = userRegister
    
        //   console.log([...searchParams]); // will be [] empty array if no searchParams is found
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('querystringkey');
    const redirect = [...searchParams].length > 0 ? [...searchParams][0][1] : '/';

        useEffect(() => {
            if(userInfo) {
                navigate(redirect)
            }
        }, [navigate, userInfo, redirect, redirectInUrl])


        const submitHandler = (e) => {
            e.preventDefault()
            if(password !== confirmPassword) {
                setMessage(' passwords do not match ')
            } else {

              dispatch(register(name, email, password))
            }
            
        }



    return ( 
     <FormContainer>

        <h1> Sign Up</h1>
        {message && <Message variant='danger'>{message}</Message>} 
        {error && <Message variant='danger'>{error}</Message>} 
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
            
        <Form.Group controlId='name'>
                    <Form.Label>Name </Form.Label>
                            <Form.Control type='name' placeholder='enter name' value={name} onChange={(e) => setName(e.target.value)}
                            >
                            </Form.Control>
                    </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email Address </Form.Label>
                            <Form.Control type='email' placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)}>
                            </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='password'>
                    <Form.Label>Password </Form.Label>
                            <Form.Control type='password' placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value)}
                            >
                            </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='confirmpassword'>
                    <Form.Label>Confirm Password </Form.Label>
                            <Form.Control type='password' placeholder='Confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                            >
                            </Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary'>
                        Register
                    </Button>

        </Form>

            <Row className='py-3'>
                <Col>
                Have an Account? {' '} 
                    <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}> Login 
                    </Link>
                </Col>
            </Row>

        </FormContainer>

        );

}


export default RegisterScreen