import { useContext } from "react";
import { HandleAllContext } from "../handleAllContext";
import SortProduct from "./sortProduct";
import DetailProduct from "./detailProduct";

function ListProduct({listProduct,handleAddToCart}) {
    const context=useContext(HandleAllContext)

    return (
        <>
            <div className="container" > 
                <div className="row" >
                    <div className="col-12" style={{margin:'auto',paddingTop:50+'px',paddingBottom:50+'px',marginBottom:50+'px',background:'white',borderRadius:10+'px'}}>
                        <div className="row row-cols-1 row-cols-md-4 row-cols-lg-4 g-3">
                            {listProduct.map((data,i) => {
                                return(
                                <div className="col" key={i}>
                                    <div className="card h-100 cart-product">
                                        <img data-bs-toggle="modal" data-bs-target="#DetailProductModall" src={data.img} 
                                        className="card-img-top mt-1" style={{height:250}} alt="..." onClick={()=>context.handleOnchangeDetailProduct(data)}/>
                                        <div className="card-body">
                                            <h5 className="card-title name-product" style={{height:40,fontSize:16+'px'}}>
                                                {data.name}
                                            </h5>
                                            <div className="row">
                                                <div className="col-9">
                                                    <div className="mt-1 d-flex justify-content-between align-items-center">
                                                        <div className="small-ratings">
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                            <i className="bi bi-star-fill"></i>
                                                        </div>
                                                    </div>
                                                    <p className="card-text" style={{fontSize:19,fontWeight:500}}>${data.price}</p>
                                                </div>
                                                <div className="col-3" style={{float:'right'}}>
                                                    <button className="btn btn-secondary bg-secondary mt-2" type="button"  style={{borderRadius:50+'%'}} onClick={()=>handleAddToCart(data)}>
                                                        <i className="bi bi-cart-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )})}
                        </div>
                    </div>
                </div>
            </div>
            
            <nav aria-label="..." className="d-flex justify-content-center">
                <ul className="pagination">
                    <li className="page-item disabled">
                        <span className="page-link">Previous</span>
                    </li>
                    <li className={context.page===1?'page-item active':'page-item' }>
                        <a className="page-link" onClick={()=>context.setPage(1)}>1</a>
                    </li>
                    <li className={context.page===2?'page-item  active':'page-item'}>
                        <span className="page-link" onClick={()=>context.setPage(2)}>2</span>
                    </li>
                    <li className={context.page===3?'page-item  active':'page-item'}>
                        <a className="page-link" onClick={()=>context.setPage(3)}>3</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link">Next</a>
                    </li>
                </ul>
            </nav>
            
            <DetailProduct/>
            
        </>
    );
}  
export default ListProduct; 