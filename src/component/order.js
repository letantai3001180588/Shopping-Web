import { HandleAllContext } from "../handleAllContext";
import { useContext} from "react";

export default function Order(){
    const context=useContext(HandleAllContext)

    return (
        <div className="offcanvas offcanvas-end" tabIndex={-1} id="order" data-bs-keyboard="false" data-bs-backdrop="false" style={{width:450+'px'}}>
            <div className="offcanvas-header" style={{background:'#f8f9fa'}}>
                <h3 className="offcanvas-title d-none d-sm-block fw-bold" id="order">
                    Đơn hàng của tôi
                </h3>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body p-1" >

            <nav className="text-center" style={{marginTop:5,marginBottom:5}}>
                <div className="nav nav-tabs bg-light text-dark" id="nav-tab" role="tablist">
                    <button className="nav-link active " id="nav-wait-tab" data-bs-toggle="tab" data-bs-target="#nav-wait" type="button" role="tab" aria-controls="nav-wait" aria-selected="true">
                        <i className="bi bi-hourglass-bottom me-1"></i>
                        Đang xử lí
                    </button>
                    <button className="nav-link" id="nav-ship-tab" data-bs-toggle="tab" data-bs-target="#nav-ship" type="button" role="tab" aria-controls="nav-ship" aria-selected="false">
                        <i className="bi bi-truck me-1"></i>
                        Đang giao
                    </button>
                    <button className="nav-link" id="nav-received-tab" data-bs-toggle="tab" data-bs-target="#nav-received" type="button" role="tab" aria-controls="nav-received" aria-selected="false">
                        <i className="bi bi-box2 me-1"></i>
                        Đã nhận
                    </button>
                    <div className="d-flex align-items-center justify-content-center float-end ms-5">
                        <i className="bi bi-arrow-repeat" style={{fontSize:20}}></i>
                    </div>
                    {/* <button className="nav-link" id="nav-cancel-tab" data-bs-toggle="tab" data-bs-target="#nav-cancel" type="button" role="tab" aria-controls="nav-cancel" aria-selected="false">
                        <i class="bi bi-journal-x me-1"></i>
                        Hủy đơn
                    </button> */}
                </div>
            </nav>

            <div className="tab-content" id="nav-tabContent mt-3">
                <div className="tab-pane fade show active" id="nav-wait"  style={{borderRadius:8+'px'}} role="tabpanel" aria-labelledby="nav-wait-tab">
                    {context.billOrder.map((data,i)=>{
                        if(data.statusOrder===0)
                            return(
                                <div className="card mt-1" key={i}>
                                    <div className="card-header">
                                        <span>ShoeStore</span>
                                        <span className="float-end small">
                                            <div className="float-start rounded-circle me-2" style={{width:10,height:10,marginTop:5,background:'orange'}}></div>
                                            <span style={{color:'orange'}}>Đang xử lí</span>
                                        </span>
                                    </div>
                                    <div className=" mb-4 list-card" style={{height:480+'px',maxHeight:200+'px',overflowY:'scroll'}}>
                                        {context.productOrder.map((item,i)=>{
                                            if(item.id_bill===data._id)
                                            return(
                                                <div className="card m-1" key={i}>
                                                    <div className="d-flex align-items-center m-1">
                                                        <div className="flex-shrink-0">
                                                            <img src={item.id_product.img}
                                                                className="img-fluid" style={{width:90+"px"}} alt="Generic placeholder image"/>
                                                        </div>
                                                        <div className="flex-grow-1 ms-2">
                                                            <h6>{item.id_product.name}</h6>
                                                            <div className="float-start small" style={{color: "#9e9e9e",marginTop:0+'px'}}>Số lượng: {item.quantity}</div>
                                                            <div className="float-end small fw-bold">
                                                                <div className="mb-0 me-5">{item.id_product.price*item.quantity} $</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>

                                    <div style={{borderBottomWidth:1+'px',borderBottomStyle:"solid",borderBottomColor:'#dbdbdb',}}></div>
                                    <div className="col-md-12 fw-bold d-flex justify-content-between m-1" style={{width:95+'%',fontSize:16+'px'}}>
                                        <span className="ms-2">3 sản phẩm</span>
                                        <span>Thanh toán: {data.total} $</span>
                                    </div>
                                    <div style={{borderBottomWidth:1+'px',borderBottomStyle:"solid",borderBottomColor:'#dbdbdb',}}></div>

                                    <div className="col-12 mt-2 mb-2">
                                        <div className="float-start small ms-2 mt-2">
                                            Đơn hàng đã đặt từ ngày {data.createdAt}
                                        </div>
                                        <div className="float-end">
                                            <button className="btn btn-secondary me-2">                            
                                                Liên hệ
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            )
                    })}
                </div>

                

                <div className="tab-pane fade" id="nav-ship"  style={{borderRadius:8+'px'}} role="tabpanel" aria-labelledby="nav-ship-tab">
                    {context.billOrder.map((data,i)=>{
                        if(data.statusOrder===1)
                            return(
                                <div className="card mt-1" key={i}>
                                    <div className="card-header">
                                        <span>Giao hàng tiết kiệm</span>
                                        <span className="float-end text-warning small">
                                            <div className="float-start rounded-circle bg-warning me-2" style={{width:10,height:10,marginTop:5}}></div>
                                            Vận chuyển
                                        </span>
                                    </div>
                                    <div className=" mb-4 list-card" style={{height:480+'px',maxHeight:200+'px',overflowY:'scroll'}}>
                                        {context.productOrder.map((item,i)=>{
                                            if(item.id_bill===data._id)
                                            return(
                                                <div className="card m-1" key={i}>
                                                    <div className="d-flex align-items-center m-1">
                                                        <div className="flex-shrink-0">
                                                            <img src={item.id_product.img}
                                                                className="img-fluid" style={{width:90+"px"}} alt="Generic placeholder image"/>
                                                        </div>
                                                        <div className="flex-grow-1 ms-2">
                                                            <h6>{item.id_product.name}</h6>
                                                            <div className="float-start small" style={{color: "#9e9e9e",marginTop:0+'px'}}>Số lượng: {item.quantity}</div>
                                                            <div className="float-end small fw-bold">
                                                                <div className="mb-0 me-5">{item.id_product.price*item.quantity} $</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>

                                    <div style={{borderBottomWidth:1+'px',borderBottomStyle:"solid",borderBottomColor:'#dbdbdb',}}></div>
                                    <div className="col-md-12 fw-bold d-flex justify-content-between m-1" style={{width:95+'%',fontSize:16+'px'}}>
                                        <span className="ms-2">3 sản phẩm</span>
                                        <span>Thanh toán: {data.total} $</span>
                                    </div>
                                    <div style={{borderBottomWidth:1+'px',borderBottomStyle:"solid",borderBottomColor:'#dbdbdb',}}></div>

                                    <div className="col-12 mt-2 mb-2">
                                        <div className="float-start small ms-2 mt-2">
                                            Bạn có hài lòng với đơn hàng không ?
                                        </div>
                                        <div className="float-end">
                                            <button className="btn btn-outline-secondary me-2">                            
                                                Trả hàng/ Hoàn tiền
                                            </button>
                                            <button className="btn btn-secondary me-2" onClick={()=>context.handleReceiveOrder(data._id)}>                            
                                                Đã nhận được hàng
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            )
                    })}
                </div>
                

                <div className="tab-pane fade" id="nav-received"  style={{borderRadius:8+'px'}} role="tabpanel" aria-labelledby="nav-received-tab">
                    {context.billOrder.map((data,i)=>{
                        if(data.statusOrder===2)
                            return(
                                <div className="card mt-1" key={i}>
                                    <div className="card-header">
                                        <span>{context.acount}</span>
                                        <span className="float-end text-success small">
                                            <div className="float-start rounded-circle bg-success me-2" style={{width:10,height:10,marginTop:5}}></div>
                                            Đã nhận
                                        </span>
                                    </div>
                                    <div className=" mb-4 list-card" style={{height:480+'px',maxHeight:200+'px',overflowY:'scroll'}}>
                                        {context.productOrder.map((item,i)=>{
                                            if(item.id_bill===data._id)
                                            return(
                                                <div className="card m-1" key={i}>
                                                    <div className="d-flex align-items-center m-1">
                                                        <div className="flex-shrink-0">
                                                            <img src={item.id_product.img}
                                                                className="img-fluid" style={{width:90+"px"}} alt="Generic placeholder image"/>
                                                        </div>
                                                        <div className="flex-grow-1 ms-2">
                                                            <h6>{item.id_product.name}</h6>
                                                            <div className="float-start small" style={{color: "#9e9e9e",marginTop:0+'px'}}>Số lượng: {item.quantity}</div>
                                                            <div className="float-end small fw-bold">
                                                                <div className="mb-0 me-5">{item.id_product.price*item.quantity} $</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>

                                    <div style={{borderBottomWidth:1+'px',borderBottomStyle:"solid",borderBottomColor:'#dbdbdb',}}></div>
                                    <div className="col-md-12 fw-bold d-flex justify-content-between m-1" style={{width:95+'%',fontSize:16+'px'}}>
                                        <span className="ms-2">3 sản phẩm</span>
                                        <span>Thanh toán: {data.total} $</span>
                                    </div>
                                    <div style={{borderBottomWidth:1+'px',borderBottomStyle:"solid",borderBottomColor:'#dbdbdb',}}></div>

                                    <div className="col-12 mt-2 mb-2">
                                        <div className="float-start small ms-2 mt-2">
                                            Đơn hàng đã đặt từ ngày 10-1-2023
                                        </div>
                                        <div className="float-end">
                                            <button className="btn btn-secondary me-2">                            
                                                Đánh giá
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            )
                    })}
                </div>
            </div>

        </div>
    </div>
    )
}