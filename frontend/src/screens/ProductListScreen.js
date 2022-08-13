import React, { useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import { Table, Button, Row, Col} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'

const ProductListScreen = () => {
    
        const Navigate = useNavigate();

        const dispatch = useDispatch();

        const productList = useSelector(state => state.productList)
        const {loading, error, users } = productList

        const userLogin = useSelector(state => state.userLogin)
        const { userInfo } = userLogin

        useEffect(()=> {
            if(userInfo && userInfo.isAdmin) {
                dispatch(listProducts())
            } else {
                Navigate('/login')
            }

            dispatch(listUsers())
        }, [dispatch, userInfo, Navigate ] )

        const deleteHandler = (id) => {

            if(window.confirm(' Are you Sure ')) 
            {
             // DELETE PRODUCTS
            }

        }

        const createProductHandler = (product) => {
            // CREATE PRODUCT

        }

  return (
    <>
     <Row className='align-items-center'>
        <Col>
            <h1>
                    Products
                </h1>        
        </Col>
        <Col className='text-right'>
            <Button className='my-3' onClick={createProductHandler}> <i className='fas fa-plus'> </i> Create Product </Button>

        </Col>
     </Row>
      <h1> Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th></th>
            </tr>
          </thead>
          <thead>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>$ {product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <LinkContainer to={`/admin/product/${product._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <i className="fas fa-edit"></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(product._id)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </thead>
        </Table>
      )}
    </>
  );
}

export default ProductListScreen