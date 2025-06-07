function Caurosel() {
    return (
        <>
            <div className="container" style={{margin:'auto',paddingTop:100+'px',marginBottom:50+'px'}}>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner round-sm">
                        <div className="carousel-item active round-sm">
                            <img src="https://file.hstatic.net/1000230642/file/banner_giam_50__f6b5b387fa2a475982bbc15b7c724ef8.jpg" style={{width:100+'%',height:450+'px',borderRadius:10+'px'}} className="d-block round-sm" alt="..."/>
                        </div>
                        <div className="carousel-item round-sm">
                            <img src="https://lambanner.com/wp-content/uploads/2022/10/MNT-DESIGN-BANNER-GIAY-11.jpg" style={{width:100+'%',height:450+'px',borderRadius:10+'px'}} className="d-block w-100 round-sm" alt="..."/>
                        </div>
                        <div className="carousel-item round-sm">
                            <img src="https://as1.ftcdn.net/v2/jpg/02/07/92/80/1000_F_207928043_CfS9KgW2M7O1mKdKBNOvpPOaES7HTytV.jpg" style={{width:100+'%',height:450+'px',borderRadius:10+'px'}} className="d-block w-100  round-sm" alt="..."/>
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
            </div>
        </>
    );
}  
export default Caurosel; 