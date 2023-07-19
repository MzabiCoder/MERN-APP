import React from 'react'
import { useEffect,useState } from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import { Card,ListGroup, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../compoments/Rating';

const ProductScreen = () => {
    const [product,setProduct]=useState([])
    const {id:productId} = useParams();
   
    useEffect(()=>{
      const fetchProduc=async()=>{
        const {data} = await axios(`/api/products/${productId}`)
        setProduct(data)
    }
    fetchProduc()
    },[productId])

  return (
    <>
    <Link className='btn btn-light my-3' to='/'>
     Back
    </Link>
    <Row>
        <Col md={5}>
            <img src={product.image} alt="" />
        </Col>
        <Col md={4}>
        <ListGroup variant='flush'>
            <ListGroup.Item>
                <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
                <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
            </ListGroup.Item>
            <ListGroup.Item>
                Price: ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
                Description: ${product.description}
            </ListGroup.Item>
        </ListGroup>
        </Col>
        <Col md={3}>
        <Card>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <Row>
                        <Col>Price:</Col>
                        <Col>
                        <strong>${product.price}</strong>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>Status:</Col>
                        <Col>
                        <strong>{product.countInStock > 0 ? 'in Stock' : 'Out of Stock'}</strong>
                        </Col>
                    </Row>
                </ListGroup.Item>
                
                   {product.countInStock > 0 && (
                    <ListGroup.Item>
                        <Button 
                        className='btn-block'
                        type='button'
                        >
                         Add to cart
                        </Button>  
                     </ListGroup.Item>
                     )}                  
               
            </ListGroup>
        </Card>
        </Col>
    </Row>
    </>
  )
}

export default ProductScreen