import React from "react";

export const ProductDetailModal = (props) => {
    const {productDetail} = props
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Product detail
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="row">
                <div className="col-6">
                    <img className="img-fluid" src={productDetail.image} alt="" />
                </div>
                <div className="col-6">
                    <p className="fw-bold fs-4">{productDetail.name}</p>
                    <p className="">{productDetail.description}</p>
                    <p className="fw-bold">Quantity: {productDetail.quantity}</p>
                </div>
            </div>
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
  );
};
