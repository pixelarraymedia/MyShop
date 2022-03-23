import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col ,Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from '../components/Rating'

import axios from 'axios'

// React-router-dom no longer supports 'Match' Replaced it with useParams here to fetch the ID prop.
  
const ProductScreen = () => {


  const [product, setProduct] = useState({})
  const params = useParams()
 useEffect((

 ) => {
   const fetchProduct = async () => 
   {
     const { data } = await axios.get(`/api/products/${params.id}`)

     setProduct(data)
   }



   fetchProduct()
 }, [params] )

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go back
      </Link>

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
              <ListGroup.Item>
                  <Button className='btn-block' type='button' disabled={product.countInStock === 0} > Add to Cart </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ProductScreen