/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

function Header({cartLenght}) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <a className="navbar-brand fw-bold ms-5 text-sm-center" style={{fontSize:25+'px'}}>
                    ShoeStore
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse me-5" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <div className="navbar-nav me-5">
                            <a className="nav-item nav-link active">
                                <i className="bi bi-house me-1"></i>
                                Home
                            </a>
                            <a className="nav-item nav-link">
                                <i className="bi bi-bell me-1"></i>
                                Notification
                            </a>
                            <a className="nav-item nav-link">
                                <i className="bi bi-gear me-1"></i>
                                Setting
                            </a>
                            <a className="nav-item nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" role="button">
                                <i className="bi bi-cart4 me-1"></i>
                                Cart
                                <span className="position-absolute top-2 start-40 translate-middle badge rounded-pill bg-danger ms-3" style={{fontSize:10+'px'}}>
                                    {cartLenght===0?'':cartLenght}
                                </span>
                            </a>
                        </div>
                        <button className="btn btn-secondary">
                            <Link style={{color:'white',textDecoration:'none'}} to='/login'>Login</Link>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}  
export default Header; 