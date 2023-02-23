import { Link } from "react-router-dom";

function ListProduct({listProduct,handleAddToCart}) {
    return (
        <>
            <div className="container" style={{margin:'auto',paddingTop:50+'px',paddingBottom:50+'px',marginBottom:50+'px',background:'white',borderRadius:10+'px'}}> 
                <div className="row row-cols-1 row-cols-md-4 g-3">
                    {listProduct.map((data,i) => {
                    return(
                        <div className="col" key={i}>
                            <div className="card h-100">
                                <img src={data.img} className="card-img-top" style={{minHeight:250+'px'}} alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title" style={{fontSize:16+'px'}}>
                                        {data.nameShoe}
                                    </h5>
                                    <div className="mt-1 d-flex justify-content-between align-items-center">
                                        <div className="small-ratings">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </div>
                                    </div>
                                    <p className="card-text fw-bold">${data.price}</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted d-grid">
                                        <button type="button" className="btn btn-secondary" onClick={()=>handleAddToCart(data)}>
                                            Add to card
                                        </button>
                                    </small>
                                </div>
                            </div>
                        </div>
                    )})}

                
                </div>
            </div>
            
            <nav aria-label="..." className="d-flex justify-content-center">
                <ul className="pagination">
                <li className="page-item disabled">
                    <span className="page-link">Previous</span>
                </li>
                <li className="page-item"><a className="page-link">1</a></li>
                <li className="page-item active" aria-current="page">
                    <span className="page-link">2</span>
                </li>
                <li className="page-item"><a className="page-link">3</a></li>
                <li className="page-item">
                    <a className="page-link">Next</a>
                </li>
                </ul>
            </nav>
        </>
    );
}  
export default ListProduct; 