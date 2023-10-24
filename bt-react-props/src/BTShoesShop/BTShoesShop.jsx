import React, { useState } from 'react'
import data from './data.json'
import { ProductList } from './ProductList';
import { ProductDetailModal } from './ProductDetailModal';
import { CartModal } from './CartModal';

export const BTShoesShop = () => {
    console.log(data);
    const [productDetail, setProductDetail] = useState({
        "id": 1,
        "name": "Adidas Prophere",
        "alias": "adidas-prophere",
        "price": 350,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "quantity": 995,
        "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
      })

      const [cart, setCart] = useState({
        "id": 1,
        "name": "Adidas Prophere",
        "alias": "adidas-prophere",
        "price": 350,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "quantity": 995,
        "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
      })
    const handleProductDetail = (product) => {
        setProductDetail(product)
    }
  return (
    <div className='container mt-3'>
        <div className="d-flex justify-content-between">
            <h1>BTShoesShop</h1>
            <p className='fs-3' style={{
                cursor: 'pointer'
            }} data-bs-toggle="modal"
            data-bs-target="#cartModal"><i className="fa-solid fa-cart-plus me-2"></i>Giỏ hàng</p>
        </div>
        <ProductList data={data} handleProductDetail={handleProductDetail}/>
        <ProductDetailModal productDetail={productDetail}/>
        <CartModal cart={cart}/>
    </div>
  )
}
