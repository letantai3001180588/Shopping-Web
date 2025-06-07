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
                                    <h5>Bảo mật thanh toán</h5>
                                    <p>Website cam kết bảo mật thông tin khách hàng</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 cart-product"  style={{display:'flex',justifyContent:'center',alignContent:'center',textAlign:'center',paddingTop:20,paddingBottom:20,background:'white',borderRadius:10+'px'}}>
                                <div className="row">
                                    <i className="bi bi-arrow-counterclockwise" style={{fontSize:70}}></i>
                                    <h5>Hoàn trả</h5>
                                    <p>Cho phép khách hàng đổi trả trong vòng 90 ngày</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 cart-product"  style={{display:'flex',justifyContent:'center',alignContent:'center',textAlign:'center',paddingTop:20,paddingBottom:20,background:'white',borderRadius:10+'px'}}>
                                <div className="row">
                                    <i className="bi bi-truck" style={{fontSize:70}}></i>
                                    <h5>Vận chuyển toàn quốc</h5>
                                    <p>Free ship toàn quốc, có hỗ trợ SHIP CODE cho khách hàng</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col">
                            <div className="card h-100 cart-product"  style={{display:'flex',justifyContent:'center',alignContent:'center',textAlign:'center',paddingTop:20,paddingBottom:20,background:'white',borderRadius:10+'px'}}>
                                <div className="row">
                                    <i className="bi bi-wechat" style={{fontSize:70}}></i>
                                    <h5>Tư vấn 24/7</h5>
                                    <p>Luôn luôn có nhân viên tư vấn và hỗ trợ chăm sóc khách hàng</p>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}