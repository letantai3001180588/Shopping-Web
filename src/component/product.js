// import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a className="navbar-brand fw-bold">
            ShoeStore
        </a>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse me-4" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
            <div className="navbar-nav me-5">
                <a className="nav-item nav-link active">Home</a>
                <a className="nav-item nav-link">About</a>
                <a className="nav-item nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" role="button">
                  Cart
                  <span className="position-absolute top-2 start-40 translate-middle badge rounded-pill bg-danger ms-3" style={{fontSize:10+'px'}}>
                    99+
                  </span>
                </a>
            </div>
            <button className="btn btn-secondary">
              <Link style={{color:'white',textDecoration:'none'}} to='/login'>Login</Link>
            </button>
          </div>
        </div>
      </nav>

      <div className="container" style={{margin:'auto',paddingTop:100+'px',marginBottom:50+'px'}}>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://intphcm.com/data/upload/poster-quang-cao-giay.jpg" style={{width:100+'%',height:400+'px',borderRadius:10+'px'}} className="d-block" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="https://lambanner.com/wp-content/uploads/2022/10/MNT-DESIGN-BANNER-GIAY-11.jpg" style={{width:100+'%',height:400+'px',borderRadius:10+'px'}} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="https://induongquang.com/data/upload/banner-quang-cao-xin.jpg" style={{width:100+'%',height:400+'px',borderRadius:10+'px'}} className="d-block w-100" alt="..."/>
              </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="row" style={{marginTop:20+'px',marginBottom:20+'px'}}>
          <div className="col-md-6">
            <div className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{margin:'auto',paddingTop:50+'px',marginBottom:50+'px',background:'white',borderRadius:10+'px'}}> 
        <div className="row row-cols-1 row-cols-md-4 g-3">
          <div className="col">
            <div className="card h-100">
              <img src="https://shoes-store-frontend-typescript.vercel.app/_next/image?url=https%3A%2F%2Fimages.puma.com%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Cb_rgb%3Afafafa%2Cw_600%2Ch_600%2Fglobal%2F380697%2F02%2Fsv01%2Ffnd%2FIND%2Ffmt%2Fpng%2F%2CWild-Rider-Layers-Unisex-Sneakers&w=640&q=75" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Wild Rider Layers Unisex Sn...</h5>
                <p className="card-text">5 do</p>
              </div>
              <div className="card-footer">
                <small className="text-muted d-grid"><button type="button" className="btn btn-secondary">Add to card</button></small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="https://shoes-store-frontend-typescript.vercel.app/_next/image?url=https%3A%2F%2Fimages.puma.com%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Cb_rgb%3Afafafa%2Cw_600%2Ch_600%2Fglobal%2F380697%2F02%2Fsv01%2Ffnd%2FIND%2Ffmt%2Fpng%2F%2CWild-Rider-Layers-Unisex-Sneakers&w=640&q=75" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Wild Rider Layers Unisex Sn...</h5>
                <p className="card-text">5 do</p>
              </div>
              <div className="card-footer">
                <small className="text-muted d-grid"><button type="button" className="btn btn-secondary">Add to card</button></small>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="card h-100">
              <img src="https://shoes-store-frontend-typescript.vercel.app/_next/image?url=https%3A%2F%2Fimages.puma.com%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Cb_rgb%3Afafafa%2Cw_600%2Ch_600%2Fglobal%2F380697%2F02%2Fsv01%2Ffnd%2FIND%2Ffmt%2Fpng%2F%2CWild-Rider-Layers-Unisex-Sneakers&w=640&q=75" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Wild Rider Layers Unisex Sn...</h5>
                <p className="card-text">5 do</p>
              </div>
              <div className="card-footer">
                <small className="text-muted d-grid"><button type="button" className="btn btn-secondary">Add to card</button></small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="https://shoes-store-frontend-typescript.vercel.app/_next/image?url=https%3A%2F%2Fimages.puma.com%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Cb_rgb%3Afafafa%2Cw_600%2Ch_600%2Fglobal%2F380697%2F02%2Fsv01%2Ffnd%2FIND%2Ffmt%2Fpng%2F%2CWild-Rider-Layers-Unisex-Sneakers&w=640&q=75" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Wild Rider Layers Unisex Sn...</h5>
                <p className="card-text">5 do</p>
              </div>
              <div className="card-footer">
                <small className="text-muted d-grid"><button type="button" className="btn btn-secondary">Add to card</button></small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="https://shoes-store-frontend-typescript.vercel.app/_next/image?url=https%3A%2F%2Fimages.puma.com%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Cb_rgb%3Afafafa%2Cw_600%2Ch_600%2Fglobal%2F380697%2F02%2Fsv01%2Ffnd%2FIND%2Ffmt%2Fpng%2F%2CWild-Rider-Layers-Unisex-Sneakers&w=640&q=75" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Wild Rider Layers Unisex Sn...</h5>
                <p className="card-text">5 do</p>
              </div>
              <div className="card-footer">
                <small className="text-muted d-grid"><button type="button" className="btn btn-secondary">Add to card</button></small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="https://shoes-store-frontend-typescript.vercel.app/_next/image?url=https%3A%2F%2Fimages.puma.com%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Cb_rgb%3Afafafa%2Cw_600%2Ch_600%2Fglobal%2F380697%2F02%2Fsv01%2Ffnd%2FIND%2Ffmt%2Fpng%2F%2CWild-Rider-Layers-Unisex-Sneakers&w=640&q=75" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Wild Rider Layers Unisex Sn...</h5>
                <p className="card-text">5 do</p>
              </div>
              <div className="card-footer">
                <small className="text-muted d-grid"><button type="button" className="btn btn-secondary">Add to card</button></small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="https://shoes-store-frontend-typescript.vercel.app/_next/image?url=https%3A%2F%2Fimages.puma.com%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Cb_rgb%3Afafafa%2Cw_600%2Ch_600%2Fglobal%2F380697%2F02%2Fsv01%2Ffnd%2FIND%2Ffmt%2Fpng%2F%2CWild-Rider-Layers-Unisex-Sneakers&w=640&q=75" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Wild Rider Layers Unisex Sn...</h5>
                <p className="card-text">5 do</p>
              </div>
              <div className="card-footer">
                <small className="text-muted d-grid"><button type="button" className="btn btn-secondary">Add to card</button></small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="https://shoes-store-frontend-typescript.vercel.app/_next/image?url=https%3A%2F%2Fimages.puma.com%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Cb_rgb%3Afafafa%2Cw_600%2Ch_600%2Fglobal%2F380697%2F02%2Fsv01%2Ffnd%2FIND%2Ffmt%2Fpng%2F%2CWild-Rider-Layers-Unisex-Sneakers&w=640&q=75" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Wild Rider Layers Unisex Sn...</h5>
                <p className="card-text">5 do</p>
              </div>
              <div className="card-footer">
                <small className="text-muted d-grid"><button type="button" className="btn btn-secondary">Add to card</button></small>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="card h-100">
              <img src="https://shoes-store-frontend-typescript.vercel.app/_next/image?url=https%3A%2F%2Fimages.puma.com%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Cb_rgb%3Afafafa%2Cw_600%2Ch_600%2Fglobal%2F380697%2F02%2Fsv01%2Ffnd%2FIND%2Ffmt%2Fpng%2F%2CWild-Rider-Layers-Unisex-Sneakers&w=640&q=75" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Wild Rider Layers Unisex Sn...</h5>
                <p className="card-text">5 do</p>
              </div>
              <div className="card-footer">
                <small className="text-muted d-grid"><button type="button" className="btn btn-secondary">Add to card</button></small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="https://shoes-store-frontend-typescript.vercel.app/_next/image?url=https%3A%2F%2Fimages.puma.com%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Cb_rgb%3Afafafa%2Cw_600%2Ch_600%2Fglobal%2F380697%2F02%2Fsv01%2Ffnd%2FIND%2Ffmt%2Fpng%2F%2CWild-Rider-Layers-Unisex-Sneakers&w=640&q=75" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Wild Rider Layers Unisex Sn...</h5>
                <p className="card-text">5 do</p>
              </div>
              <div className="card-footer">
                <small className="text-muted d-grid"><button type="button" className="btn btn-secondary">Add to card</button></small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="https://shoes-store-frontend-typescript.vercel.app/_next/image?url=https%3A%2F%2Fimages.puma.com%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Cb_rgb%3Afafafa%2Cw_600%2Ch_600%2Fglobal%2F380697%2F02%2Fsv01%2Ffnd%2FIND%2Ffmt%2Fpng%2F%2CWild-Rider-Layers-Unisex-Sneakers&w=640&q=75" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Wild Rider Layers Unisex Sn...</h5>
                <p className="card-text">5 do</p>
              </div>
              <div className="card-footer">
                <small className="text-muted d-grid"><button type="button" className="btn btn-secondary">Add to card</button></small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="https://shoes-store-frontend-typescript.vercel.app/_next/image?url=https%3A%2F%2Fimages.puma.com%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Cb_rgb%3Afafafa%2Cw_600%2Ch_600%2Fglobal%2F380697%2F02%2Fsv01%2Ffnd%2FIND%2Ffmt%2Fpng%2F%2CWild-Rider-Layers-Unisex-Sneakers&w=640&q=75" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Wild Rider Layers Unisex Sn...</h5>
                <p className="card-text">5 do</p>
              </div>
              <div className="card-footer">
                <small className="text-muted d-grid"><button type="button" className="btn btn-secondary">Add to card</button></small>
              </div>
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
          
        </div>
      </div>

      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Products
                </h6>
                <p>
                  <a className="text-reset">Angular</a>
                </p>
                <p>
                  <a className="text-reset">React</a>
                </p>
                <p>
                  <a className="text-reset">Vue</a>
                </p>
                <p>
                  <a className="text-reset">Laravel</a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a className="text-reset">Pricing</a>
                </p>
                <p>
                  <a className="text-reset">Settings</a>
                </p>
                <p>
                  <a className="text-reset">Orders</a>
                </p>
                <p>
                  <a className="text-reset">Help</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" style={{background: 'rgba(0, 0, 0, 0.05)'}}>
          © 2021 Copyright:
          <a className="text-reset fw-bold">MDBootstrap.com</a>
        </div>
      </footer>

      <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvas" data-bs-keyboard="false" data-bs-backdrop="false" style={{width:450+'px'}}>
        <div className="offcanvas-header" style={{background:'#f8f9fa'}}>
            <h3 className="offcanvas-title d-none d-sm-block fw-bold" id="offcanvas">Shopping cart</h3>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body p-1 mt-2" >
          <div style={{borderBottomWidth:1+'px',borderBottomStyle:"solid",borderBottomColor:'#dbdbdb',maxHeight:500+'px',overflowY:'scroll'}}>
            <div className="card mb-3">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
                        className=" rounded-3" alt="Shopping item" style={{width: 65+"px"}}/>
                    </div>
                    <div className="ms-1">
                      <h6>Samsung galaxy Note 10 </h6>
                      <p className="small mb-0">256GB, Navy Blue</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center">
                    <input className="text-center" type={"number"} min={0} defaultValue='2' style={{width:60+'px'}}/>
                    <div style={{width: 80+"px"}}>
                      <h5 className="mb-0 ms-3">$900</h5>
                    </div>
                    <a  style={{color: "#cecece"}}>X</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
                        className=" rounded-3" alt="Shopping item" style={{width: 65+"px"}}/>
                    </div>
                    <div className="ms-1">
                      <h6>Samsung galaxy Note 10 </h6>
                      <p className="small mb-0">256GB, Navy Blue</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center">
                    <input className="text-center" type={"number"} min={0} defaultValue='2' style={{width:60+'px'}}/>
                    <div style={{width: 80+"px"}}>
                      <h5 className="mb-0 ms-3">$900</h5>
                    </div>
                    <a  style={{color: "#cecece"}}>X</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
                        className=" rounded-3" alt="Shopping item" style={{width: 65+"px"}}/>
                    </div>
                    <div className="ms-1">
                      <h6>Samsung galaxy Note 10 </h6>
                      <p className="small mb-0">256GB, Navy Blue</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center">
                    <input className="text-center" type={"number"} min={0} defaultValue='2' style={{width:60+'px'}}/>
                    <div style={{width: 80+"px"}}>
                      <h5 className="mb-0 ms-3">$900</h5>
                    </div>
                    <a  style={{color: "#cecece"}}>X</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
                        className=" rounded-3" alt="Shopping item" style={{width: 65+"px"}}/>
                    </div>
                    <div className="ms-1">
                      <h6>Samsung galaxy Note 10 </h6>
                      <p className="small mb-0">256GB, Navy Blue</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center">
                    <input className="text-center" type={"number"} min={0} defaultValue='2' style={{width:60+'px'}}/>
                    <div style={{width: 80+"px"}}>
                      <h5 className="mb-0 ms-3">$900</h5>
                    </div>
                    <a  style={{color: "#cecece"}}>X</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
                        className=" rounded-3" alt="Shopping item" style={{width: 65+"px"}}/>
                    </div>
                    <div className="ms-1">
                      <h6>Samsung galaxy Note 10 </h6>
                      <p className="small mb-0">256GB, Navy Blue</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center">
                    <input className="text-center" type={"number"} min={0} defaultValue='2' style={{width:60+'px'}}/>
                    <div style={{width: 80+"px"}}>
                      <h5 className="mb-0 ms-3">$900</h5>
                    </div>
                    <a  style={{color: "#cecece"}}>X</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
                        className=" rounded-3" alt="Shopping item" style={{width: 65+"px"}}/>
                    </div>
                    <div className="ms-1">
                      <h6>Samsung galaxy Note 10 </h6>
                      <p className="small mb-0">256GB, Navy Blue</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center">
                    <input className="text-center" type={"number"} min={0} defaultValue='2' style={{width:60+'px'}}/>
                    <div style={{width: 80+"px"}}>
                      <h5 className="mb-0 ms-3">$900</h5>
                    </div>
                    <a  style={{color: "#cecece"}}>X</a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="col-md-12 d-flex justify-content-between mt-3">
            <span>Sub total</span>
            <span>$121.00</span>
          </div>

          <div className="col-md-12 fw-bold d-flex justify-content-between">
            <span>Sub total</span>
            <span>$121.00</span>
          </div>
          
          <div className="col-12 d-grid mt-2 fw-bold">
              <button className="btn btn-secondary m-2">
            <Link style={{color:'white',textDecoration:'none'}} to='/checkout'>
                <h4>
                    Check out
                </h4>
            </Link> 
              </button>
            <button className="btn btn-outline-secondary me-2 ms-2" data-bs-dismiss="offcanvas" aria-label="Close">
              <h5>
                Continue Shopping
              </h5>
            </button>
          </div>

        </div>
      </div>

      
    </div>
  );
}

export default Product;
