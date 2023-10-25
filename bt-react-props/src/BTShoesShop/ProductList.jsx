import React from 'react'
import { ProductItem } from './ProductItem';

export const ProductList = (props) => {
    const {data, handleProductDetail, handleCart} = props
    console.log(data);
  return (
    <div className='row'>{
        data.map((product) => {
            return <ProductItem key={product.id} product={product} handleProductDetail={handleProductDetail} handleCart={handleCart}/>
        })
        }</div>
  )
}
