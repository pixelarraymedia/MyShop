import React, { useState } from 'react'
import { Form, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import {saveShippingAddress} from '../actions/cartActions'

const ShippingScreen = () => {
    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart 

    const Navigate = useNavigate();

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
       dispatch(saveShippingAddress({ address,
         city, 
         postalCode,
        country }))
       Navigate('/payment')
    }

  return( 
        <FormContainer>
            <CheckoutSteps step1 step2 step3/>
            <h1> Shipping </h1>
        <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
                    <Form.Label> Address </Form.Label>
                        <Form.Control type='text' 
                        placeholder='enter address' 
                        value={address}
                        required
                        onChange={(e) => setAddress(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='city'>
                    <Form.Label>city </Form.Label>
                        <Form.Control type='text' 
                        placeholder='enter city' 
                        value={city}
                        required
                        onChange={(e) => setCity(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='postalCode'>
                    <Form.Label>postalCode </Form.Label>
                        <Form.Control type='text' 
                        placeholder='enter postalCode' 
                        value={postalCode}
                        required
                        onChange={(e) => setPostalCode(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='country'>
                    <Form.Label>country </Form.Label>
                        <Form.Control type='text' 
                        placeholder='enter country' 
                        value={country}
                        required
                        onChange={(e) => setCountry(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>
                    <Button type='submit' variant='primary'>
                        Continue
                    </Button>
             </Form>
  </FormContainer>)

}

export default ShippingScreen