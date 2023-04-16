export default function Commitment(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="row row-cols-2  row-cols-lg-4 g-2" style={{marginBottom:50}}>
                        <div className="col">
                            <div className="card h-100 cart-product"  style={{display:'flex',justifyContent:'center',alignContent:'center',textAlign:'center',paddingTop:20,paddingBottom:20,background:'white',borderRadius:10+'px'}}>
                                <div className="row">
                                    <i className="bi bi-shield" style={{fontSize:70}}></i>
                                    <h5>Bao mat thanh toan</h5>
                                    <p>Website cam ket bao mat thong tin khach hang</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 cart-product"  style={{display:'flex',justifyContent:'center',alignContent:'center',textAlign:'center',paddingTop:20,paddingBottom:20,background:'white',borderRadius:10+'px'}}>
                                <div className="row">
                                    <i className="bi bi-arrow-counterclockwise" style={{fontSize:70}}></i>
                                    <h5>Hoan tra</h5>
                                    <p>Cho phep khach hang doi tra trong vong 90 ngay</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 cart-product"  style={{display:'flex',justifyContent:'center',alignContent:'center',textAlign:'center',paddingTop:20,paddingBottom:20,background:'white',borderRadius:10+'px'}}>
                                <div className="row">
                                    <i className="bi bi-truck" style={{fontSize:70}}></i>
                                    <h5>Van chuyen toan quoc</h5>
                                    <p>Free ship toan quoc, co ho tro SHIP CODE cho khach hang</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col">
                            <div className="card h-100 cart-product"  style={{display:'flex',justifyContent:'center',alignContent:'center',textAlign:'center',paddingTop:20,paddingBottom:20,background:'white',borderRadius:10+'px'}}>
                                <div className="row">
                                    <i className="bi bi-wechat" style={{fontSize:70}}></i>
                                    <h5>Tu van 24/7</h5>
                                    <p>Luon luon co nhan vien tu van va ho tro cham soc khach hang</p>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}