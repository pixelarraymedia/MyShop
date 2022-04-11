import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Row, Col ,Image, ListGroup, Card, Button, Form} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProductDetails } from '../actions/productActions'



// React-router-dom no longer supports 'Match' Replaced it with useParams here to fetch the ID prop.
  
const ProductScreen = ( ) => {

  const [qty, setQty] = useState(1)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();


  console.log(params.id)

  const productDetails = useSelector(state => state.productDetails)
  const { loading, error, product } = productDetails
  

const addToCartHandler = () => {
navigate(`/cart/${params.id}?qty=${qty}`)

}
   useEffect((
  
   ) => {
     dispatch(listProductDetails(params.id))
    
  
  
     
   }, [dispatch, params.id] )





  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go back
      </Link>

    
{loading ? <Loader />  : error ? <Message variant='danger'>{error} </Message> : ( 

<Row>
<Col md={6}>
  <Image src={product.image} alt={product.name} fluid />
</Col>
<Col md={3}>
  <ListGroup variant="flush">
    <ListGroup.Item>
      <h2>{product.name}</h2>
    </ListGroup.Item>
  </ListGroup>

  <ListGroup.Item>

    
    <Rating
      value={product.rating}
      text={`${product.numReviews} reviews`}
    >
      {" "}
    </Rating>
  </ListGroup.Item>
  <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
  <ListGroup.Item>Description: {product.description}</ListGroup.Item>
</Col>
<Col md={3}>
  <Card>
    <ListGroup variant="flush">
      <ListGroup.Item>
        <Row>
          <Col>Price:</Col>

          <Col>
            <strong>${product.price}</strong>
          </Col>
        </Row>
      </ListGroup.Item>
    </ListGroup>
    <ListGroup variant="flush">
      <ListGroup.Item>
        <Row>
          <Col>Status:</Col>

          <Col>
            <strong>${product.countInStock > 0 ? 'In Stock' : 'Out of Stock' }</strong>
          </Col>
        </Row>
      </ListGroup.Item>

        {product.countInStock > 0 && (
          <ListGroup.Item>
            <Row>
              <Col>Qty</Col>

              <Col>
              <Form.Control as='select' value={qty} onChange={(e) => 
              setQty(e.target.value)}>

{
                [...Array(product.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={ x + 1} >

                    { x + 1 }
                  </option>
                ))
                }
              </Form.Control>
</Col>
            </Row>
          </ListGroup.Item>
        )}


      <ListGroup.Item>
          <Button onClick={addToCartHandler} className='btn-block' type='button' disabled={product.countInStock === 0} > Add to Cart </Button>
      </ListGroup.Item>
    </ListGroup>
  </Card>
</Col>
</Row>

)}
     
    </>
  );
}

export default ProductScreen