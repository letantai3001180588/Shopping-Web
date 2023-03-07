/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { useContext } from "react";
import { HandleAllContext } from "../handleAllContext";
import { useNavigate } from "react-router-dom";

function Header() {
    const context=useContext(HandleAllContext)
    const navigate = useNavigate();
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
                            <a className="nav-item nav-link active" onClick={()=>navigate('/')}>
                                <i className="bi bi-house me-1"></i>
                                Home
                            </a>
                            {context.showAdmin
                            ?<>
                                <a className="nav-item nav-link" onClick={()=>context.navigate('/admin')}>
                                    <i className="bi bi-person-fill-gear me-1"></i>
                                    Admin
                                </a>
                            </>
                            :<>
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
                                        {context.cart.length===0?'':context.cart.length}
                                    </span>
                                </a>
                            </>
                            
                            }
                        </div>
                        {context.showAcount
                        ?<div className="btn-group">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                                <i className="bi bi-person-circle me-3"></i>
                                {context.acount}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
                            <li>
                                <a className="dropdown-item">
                                    <i className="bi bi-person-lines-fill me-2"></i>
                                    Profile
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item">
                                    <i className="bi bi-question-circle me-2"></i>
                                    Help
                                </a>
                            </li>
                            <li><hr className="dropdown-divider me-2 ms-2"/></li>
                            <li>
                                <a className="dropdown-item" href="#" onClick={()=>context.handleLogout()}>
                                    <i className="bi bi-box-arrow-right me-2"></i>
                                    Log out
                                </a>
                            </li>
                            </ul>
                        </div>
                        :<>
                            <button className="btn btn-secondary" onClick={()=>context.navigate('/login')}>
                                Login
                            </button>
                            <button className="btn btn-outline-secondary text-dark ms-1" onClick={()=>context.navigate('/register')}>
                                Register
                            </button>
                        </>
                        }
                        

                    </div>
                </div>
            </nav>
        </>
    );
}  
export default Header; 