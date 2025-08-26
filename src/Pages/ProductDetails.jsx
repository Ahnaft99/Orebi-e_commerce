import React, { useEffect } from 'react'
import Container from '../Components/Container'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductDetails = () => {
    let productId = useParams()

    let singleProduct = ()=>{
        axios.get(`https://dummyjson.com/products/${productId}`).then((response)=>{

        })

        useEffect (()=>{
         singleProduct()       
        },[])
    }
  return (
    <div>
 <Container>
 <div>ProductDetails</div>
 </Container> 
    </div>
   
  )
}

export default ProductDetails