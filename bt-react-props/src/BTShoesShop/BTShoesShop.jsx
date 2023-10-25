import React, { useState } from "react";
import data from "./data.json";
import { ProductList } from "./ProductList";
import { ProductDetailModal } from "./ProductDetailModal";
import { CartModal } from "./CartModal";

export const BTShoesShop = () => {
  console.log(data);
  const [productDetail, setProductDetail] = useState({
    id: 1,
    name: "Adidas Prophere",
    alias: "adidas-prophere",
    price: 350,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 995,
    image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
  });

  const [cart, setCart] = useState([
  ]);
  const handleProductDetail = (product) => {
    setProductDetail(product);
  };

  const handleCart = (product) => {
    //setCart([...cart, { ...product, cardQuantity: 1 }]);
    setCart((preState) => {
        //kiểm tra xem trong cart đã có sản phẩm đang muốn thêm hay chưa
        const index = preState.findIndex((value) => value.id === product.id)

        // check xem đã tồn tại trong cart chưa
        if(index === -1) {
            preState.push({...product, cartQuantity: 1})
        } else {
            //đã tồn tại trong cart
            preState[index].cartQuantity += 1
        }

        return [...preState]
    })
  };

  const handleCartQuantity = (productId, quantity) => {
        // console.log(productId);
        // console.log(quantity);
        const currentQuantity = 
        setCart((preState) => {
            const index = preState.findIndex((value) => value.id === productId)
            preState[index].cartQuantity = preState[index].cartQuantity + quantity || 1
            return [...preState]
        })
  }

  const deleteCart = (productId) => {
    setCart((preState) => {
        return preState.filter((value) => value.id !== productId)
    })
  }
  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between">
        <h1>BTShoesShop</h1>
        <p
          className="fs-3"
          style={{
            cursor: "pointer",
          }}
          data-bs-toggle="modal"
          data-bs-target="#cartModal"
        >
          <i className="fa-solid fa-cart-plus me-2"></i>Giỏ hàng
        </p>
      </div>
      <ProductList
        data={data}
        handleProductDetail={handleProductDetail}
        handleCart={handleCart}
      />
      <ProductDetailModal productDetail={productDetail} />
      <CartModal cart={cart} handleCartQuantity={handleCartQuantity} deleteCart={deleteCart}/>
    </div>
  );
};
