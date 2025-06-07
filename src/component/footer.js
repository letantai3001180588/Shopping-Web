/* eslint-disable jsx-a11y/anchor-is-valid */
function Footer() {
    return (
        <>
            <footer className="text-center text-lg-start bg-light text-muted">
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Kết nối với chúng tôi trên các mạng xã hội:</span>
                    </div>

                    <div style={{fontSize:20}}>
                        <i className="bi bi-facebook me-2"></i> 
                        <i className="bi bi-twitter me-2"></i>
                        <i className="bi bi-instagram me-2"></i>
                        <i className="bi bi-skype me-2"></i>
                        <i className="bi bi-github me-2"></i>
                    </div>
                </section>

                <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-4 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            <img className="me-1" src="https://www.pngall.com/wp-content/uploads/2/White-Sneakers-PNG-Clipart.png"  style={{width:50,height:50,marginTop:-10}}/>
                            Shoe Store
                        </h6>
                        <p>
                            Shoe Store là một trong những nơi sưu tầm có khối lượng giày hiếm siêu khủng. 
                            Có những mẫu giày cực kì hype được giới sưu tầm săn lùng, thậm chí bạn sẽ bắt gặp nhiều mẫu lạ mới mà hiếm shop nào có. 
                            Có những mẫu chỉ có độc nhất 1 đôi. 
                        </p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            Chăm sóc
                        </h6>
                        <p>
                            <a className="text-reset">Hỏi đáp</a>
                        </p>
                        <p>
                            <a className="text-reset">Hướng dẫn</a>
                        </p>
                        <p>
                            <a className="text-reset">Trả/Hoàn tiền</a>
                        </p>
                        <p>
                            <a className="text-reset">Vận chuyển</a>
                        </p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            Thanh toán
                        </h6>
                        <p>
                            <a className="text-reset">Visa</a>
                        </p>
                        <p>
                            <a className="text-reset">VNpay</a>
                        </p>
                        <p>
                            <a className="text-reset">Trả góp</a>
                        </p>
                        <p>
                        <a className="text-reset">QR code</a>
                        </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            Liên hệ
                        </h6>
                        <p>
                            <i className="bi bi-house"></i> UIT
                        </p>
                        <p>
                            <i className="bi bi-envelope"></i> example@gmail.com
                        </p>
                        <p>
                            <i className="bi bi-phone"></i> + 01 234 567 88
                        </p>
                        <p>
                            <i className="bi bi-skype"></i> Skype
                        </p>
                    </div>
                    </div>
                </div>
                </section>

                <div className="text-center p-4" style={{background: 'rgba(0, 0, 0, 0.05)'}}>
                    © 2023 Copyright: &emsp;
                    <a className="text-reset fw-bold">Shoe Store</a>
                </div>
            </footer>
        </>
    );
}  
export default Footer; 