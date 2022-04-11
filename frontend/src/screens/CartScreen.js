import React, { useEffect } from 'react'
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'

const CartScreen = () => {
  const params = useParams();
  const navigate = useNavigate();
 const location = useLocation();
const qty = location.search ? Number(location.search.split('=')[1]) : 1 

const dispatch = useDispatch()


const cart = useSelector((state) => state.cart)
const { cartItems } = cart 

console.log(cartItems)

useEffect(() => {
  if(params.id){
    dispatch(addToCart(params.id, qty))

           }


          }, [dispatch, params.id, qty])



  return  <Row>
    <Col md={8}>
      <h1> Cart </h1>
      {cart.length === 0 ? ( 
      <Message> Your cart is empty <Link to='/'> Go Back  </Link></Message>
                       ) : (
      <ListGroup variant='flush'>
          {cartItems.map(item => (
            <ListGroup.Item key={item.product}>

                      <Row>
                        <Col md={2}>

                        </Col>
                      </Row>




            </ListGroup.Item>
          ))}
          </ListGroup>
    
    
    )}


    </Col>
    <Col md={8}>

      
</Col>
<Col md={8}>

      
</Col>
 </Row>
}

export default CartScreen
// constant step 1
// reducer  step 2
// action step 3 
// then implement action in screen step 4