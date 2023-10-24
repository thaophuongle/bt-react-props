import React from 'react'

export const CartModal = ({cart}) => {
    //const {cart} = props
  return (
    <div
    className="modal fade"
    id="cartModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="cartModalLabel">
            Your Shopping Cart
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((product, index) => {
                            return (<tr>
                                <td>1</td>
                                <td><img style={{
                                    width: 80,
                                    height: 80
                                }} src="http://svcy3.myclass.vn/images/adidas-prophere.png" alt="" /></td>
                                <td>Product Name</td>
                                <td>Product Description</td>
                                <td>1000</td>
                                <td>
                                    <button className="btn btn-outline-success">+</button>
                                    <span className='mx-2'>2</span>
                                    <button className="btn btn-outline-success">-</button>
                                    </td>
                                <td>2000</td>
                                <td>
                                    <button className="btn btn-outline-dark">X</button>
                                </td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
