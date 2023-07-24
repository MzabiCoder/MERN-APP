import {Row, Col} from 'react-bootstrap';
import { useEffect,useState } from 'react';
import Product from '../compoments/Product'
import axios from 'axios'
import AOS from 'aos';


const HomeScreen = () => {
  const [products,setProducts]=useState([])
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    AOS.init({
      offset: 400,
      duration: 1400,
      easing: 'ease'
    });
    const fetchProduc=async()=>{
      const {data} = await axios('/api/products')
      setProducts(data)
      setLoading(true)
      console.log(products)
    }
    fetchProduc()
  },[products])
  return (
    <>
    <h1>Latest products</h1>
    <Row>
        {products.map(product=>(
            <Col key={product._id}sm={12} md={6} lg={4} xl={3}>
              {loading && <Product product={product} data-aos="fade-right"/>}              
            </Col>
        ))}
    </Row>
    </>
  )
}

export default HomeScreen