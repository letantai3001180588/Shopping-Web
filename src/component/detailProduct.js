import { useContext } from "react";
import { HandleAllContext } from "../handleAllContext";

export default function DetailProduct(){
    const context=useContext(HandleAllContext)

    return(
        <div className="modal fade" id="DetailProductModall" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="#DetailProductModal">Chi tiết sản phẩm</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="card" style={{background:'#dedede'}}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="images py-3">
                                            <div className="text-center p-2 mb-2"> 
                                                <img className="rounded-3" id="main-image" src={context.detailProduct.img} width="85%" /> 
                                            </div>
                                            <div className="thumbnail text-center"> 
                                                <img className="me-2 rounded-1" src={context.detailProduct.img} width="80"/> 
                                                <img className="me-2 rounded-1" src={context.detailProduct.img} width="80"/> 
                                                <img className="me-2 rounded-1" src={context.detailProduct.img} width="80"/> 
                                                <img className="me-2 rounded-1" src={context.detailProduct.img} width="80"/> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="product p-4">
                                            <div className="mb-2"> <span className="text-uppercase text-muted brand">ShoeStore</span>
                                                <h6 className="text-uppercase">{context.detailProduct.name} </h6>
                                                <div className="small-ratings">
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                </div>
                                                <div className="d-flex flex-row my-2"> 
                                                    <div className="act-price" style={{fontSize:30}}>
                                                        $ {context.detailProduct.price}
                                                    </div> 
                                                </div>
                                            </div>
                                            
                                            <div className="mb-2">
                                                <div className="row">
                                                    <strong>Chi tiết sản phẩm:</strong>
                                                    <div className="col-3 ms-lg-4">
                                                        <div>Kiểu dáng</div>
                                                        <div>Giới tính</div>
                                                        <div>Chất liệu</div>
                                                        <div>Xuất xứ </div>
                                                        <div>Ưu đãi</div>
                                                    </div>
                                                    <div className="col-7 ">
                                                        <div>: Giày thể thao</div>
                                                        <div>: Nam</div>
                                                        <div>: Da cao cấp</div>
                                                        <div>: Việt Nam</div>
                                                        <div>: Freeship Hà Nội & HCM</div>
                                                    </div>
                                                </div>
                                            </div>



                                            <strong>Mô tả sản phẩm:</strong> 
                                            <div className="about">
                                                <p>
                                                    &emsp; Sản phẩm mang hơi hướng truyền thống của hãng. 
                                                    Mẫu giày thể thao nam được lấy cảm hứng từ phong cách tennis đậm chất thể thao. 
                                                    Họa tiết giày ấn tượng với kết cấu đậm chất thể thao cho cảm giác thoải mái dài lâu. 
                                                    Lót giày cho cảm giác mềm mại suốt ngày dài hoạt động đôi chân.
                                                </p>
                                            </div>

                                            <div className="sizes">
                                                <h6 className="text-uppercase">Size</h6> 
                                                <label className="radio"> 
                                                    <input type="radio" name="size" value="S" defaultChecked /> 
                                                    <span>S</span> 
                                                </label> 
                                                <label className="radio"> 
                                                    <input type="radio" name="size" value="M"/> 
                                                    <span>M</span> 
                                                </label> 
                                                <label className="radio"> 
                                                    <input type="radio" name="size" value="L"/> 
                                                    <span>L</span> 
                                                </label> 
                                                <label className="radio"> 
                                                    <input type="radio" name="size" value="XL" /> 
                                                    <span>XL</span> 
                                                </label> 
                                                <label className="radio"> 
                                                    <input type="radio" name="size" value="XXL" /> 
                                                    <span>XXL</span> 
                                                </label>
                                            </div>

                                            <div className="cart mt-4 align-items-center"> 
                                                <button className="btn btn-danger text-uppercase mr-2 px-4 me-2" data-bs-dismiss="modal" aria-label="Close" onClick={()=>context.handleAddToCart(context.detailProduct)}>
                                                    Thêm vào giỏ
                                                </button>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div> */}
                    </div>
                </div>
            </div>
    )
}