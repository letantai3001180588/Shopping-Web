import { useContext } from "react";
import { HandleAllContext } from "../handleAllContext";
import Footer from "../componentChild/footer";
import Header from "../componentChild/header";
import Order from "../componentChild/order";

function Admin() {
    const context=useContext(HandleAllContext)
    if(context.showAdmin)         
    return (   
        <div className="App">
            <Header/>

            <nav className="container" style={{marginTop:150+'px',marginBottom:20+'px',position:'relative'}}>
                <div className="nav nav-tabs bg-light" id="nav-tab" role="tablist">
                    <button className="nav-link active ms-5" onClick={()=>context.setTypeTable('Product')} id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-product" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                        <i className="bi bi-box-seam me-2"></i>
                        Sản phẩm
                    </button>
                    <button className="nav-link ms-1" onClick={()=>context.setTypeTable('Acount')} id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-customer" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                        <i className="bi bi-people me-2"></i>
                        Khách hàng
                    </button>
                    <button className="nav-link ms-1" onClick={()=>context.setTypeTable('Bill')} id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-bill" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                        <i className="bi bi-receipt me-2"></i>
                        Đơn hàng
                    </button>
                    <div className="btn btn-outline-secondary" style={{position:'absolute',top:0,right:50}} onClick={()=>context.handleLoader()}>
                        <i className="bi bi-arrow-repeat"></i>
                    </div>
                    {/* <button className="nav-link" onClick={()=>context.setTypeTable('Chat')} id="nav-chat-tab" data-bs-toggle="tab" data-bs-target="#nav-chat" type="button" role="tab" aria-controls="nav-chat" aria-selected="false">
                        <i className="bi bi-wechat me-2"></i>
                        Nhắn tin
                    </button> */}
                </div>
            </nav>

            <div className="container" style={{marginBottom:100+'px'}}>
                <div className="tab-content" id="nav-tabContent mt-3">

                    <div className="tab-pane fade show active" id="nav-product"  style={{borderRadius:8+'px'}} role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="row mt-2 mb-2">
                            <div className="col-3">
                                <input className="form-control border rounded-pill" type="search" placeholder={`Search ${context.typeTable.toLowerCase()} ...`} id="example-search-input"/>
                            </div>
                            <div className="col-9">
                                <button className="btn btn-success float-end" type="submit" data-bs-toggle="modal" data-bs-target="#CreateModal">
                                    <i className="bi bi-plus-circle me-2"></i>
                                    Thêm sản phẩm 
                                </button>
                            </div>
                        </div>
                        <div  style={{maxHeight:500,overflowY:'scroll'}}>
                            <table className="table table-sm table-bordered table-striped" >
                                <thead className="bg-secondary text-white text-center">
                                    <tr>
                                        <th>Ảnh</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Giá</th>
                                        <th>Size</th>
                                        <th>Kiểu dáng</th>
                                        <th  colSpan={2}>Tùy chọn</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {context.listProductDB.map((item,i)=>{
                                        return(
                                                <tr key={i} className='align-middle justify-content-center'>
                                                    <td style={{width:80+'px'}}>
                                                        {/* {item.img} */}
                                                        <img src={item.img} style={{width:50+'px',height:50+'px',borderRadius:5}} alt={item._id}/>
                                                    </td>
                                                    <td>{item.name}</td>
                                                    <td className="text-center">$ {item.price}</td>
                                                    <td>S, M, L, XL, XXL</td>
                                                    <td>{item.trademark}</td>
                                                    <td style={{width:50}}>    
                                                        <div className="text-center text-danger" data-bs-toggle="modal" data-bs-target="#DeleteModal" onClick={()=>context.handleItemDelete(item.name,item._id,'Product')}>
                                                            <i className="bi bi-trash3"></i>
                                                        </div>
                                                    </td>
                                                    <td style={{width:50}}>
                                                        <div className="text-center text-warning" data-bs-toggle="modal" data-bs-target="#EditModal" onClick={()=>context.handleItemUpdate(item,item._id,'Product')}>
                                                            <i className="bi bi-pencil"></i>
                                                        </div>
                                                    </td>
                                                </tr>

                                            
                                    )})}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="nav-customer" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div className="row mt-2 mb-2">
                            <div className="col-3">
                                <input className="form-control border rounded-pill" type="search" placeholder={`Search ${context.typeTable.toLowerCase()} ...`} id="example-search-input"/>
                            </div>
                            <div className="col-9">
                                <button className="btn btn-success float-end" type="submit" onClick={()=>context.navigate('/register')}>
                                    <i className="bi bi-plus-circle me-2"></i>
                                    Thêm người dùng
                                </button>
                            </div>
                        </div>
                        <table className="table table-sm table-bordered table-striped" style={{borderRadius:8+'px'}}>
                            <thead className=" bg-secondary text-white text-center">
                                <tr>
                                    <th colSpan={2}>Ảnh đại diện</th>
                                    <th>Tên khách hàng</th>
                                    <th>Email</th>
                                    <th>Địa chỉ</th>
                                    <th >Số điện thoại</th>
                                    <th >Phân quyền</th>
                                    <th  colSpan={2}>Tùy chọn</th>
                                </tr>
                            </thead>
                            <tbody>
                                {context.listUsersDB.map((item,i)=>{
                                    return(
                                        <tr key={i} className='align-middle justify-content-center text-center'>
                                            <th>
                                                <img className="rounded-circle" src={"https://shoppingbe.onrender.com/img/"+item.avatar} width={50} height={50} alt={item._id} />
                                            </th>
                                            <td style={{width:50}}>
                                                <div className="text-center text-info" data-bs-toggle="modal"  data-bs-target="#AvatarModal" onClick={()=>context.handleAvatarUpdate(item,item._id)}>
                                                    <i className="bi bi-person-bounding-box"></i>
                                                </div>
                                            </td>
                                            <td>{item.username}</td>
                                            <td>{item.email}</td>
                                            <td>{item.address}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.role}</td>
                                            <td style={{width:50}}>    
                                                <div className="text-center text-danger" data-bs-toggle="modal" data-bs-target="#DeleteModal"  onClick={()=>context.handleItemDelete(item.username,item._id)}>
                                                    <i className="bi bi-trash3"></i>
                                                </div>
                                            </td>
                                            <td style={{width:50}}>
                                                <div className="text-center text-warning" data-bs-toggle="modal"  data-bs-target="#EditModal" onClick={()=>context.handleItemUpdate(item,item._id)}>
                                                    <i className="bi bi-pencil"></i>
                                                </div>
                                            </td>
                                        </tr>
                                        
                                )})}
                            </tbody>
                        </table>
                    </div>

                    <div className="tab-pane fade" id="nav-bill" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <div className="row mt-2 mb-2">
                            <div className="col-3">
                                <input className="form-control border rounded-pill" type="search" placeholder={`Search ${context.typeTable.toLowerCase()} ...`} id="example-search-input"/>
                            </div>
                        </div>
                        <table className="table table-sm table-bordered table-striped" style={{borderRadius:8+'px'}}>
                            <thead className=" bg-secondary text-white text-center">
                                <tr>
                                    <th>Mã đơn hàng</th>
                                    <th>Khách hàng</th>
                                    <th>Email</th>
                                    <th>Tổng thanh toán</th>
                                    {/* <th>Create At</th> */}
                                    <th>Tình trạng đơn hàng</th>
                                    <th>Giao hàng</th>
                                    <th  colSpan={2}>Tùy chọn</th>
                                </tr>
                            </thead>
                            <tbody>
                                {context.billDB.map((item,i)=>{
                                    return(
                                        <tr key={i} className='align-middle justify-content-center text-center'>
                                            <th>{item._id}</th>
                                            <td>{item.id_user.username}</td>
                                            <td>{item.id_user.email}</td>
                                            <td className="text-center">$ {item.total}</td>
                                            {/* <td>{item.createdAt}</td> */}
                                            <td >
                                                {item.statusOrder===0
                                                ?<>
                                                    <div className="float-start rounded-circle ms-3 me-1" style={{width:10,height:10,marginTop:8,background:'orange'}}></div>
                                                    <span className="float-start" style={{color:'orange'}}>Đang xử lí</span>
                                                </>
                                                :''
                                                }
                                                {item.statusOrder===1
                                                ?<>
                                                    <div className="float-start rounded-circle bg-warning ms-3 me-1" style={{width:10,height:10,marginTop:8}}></div>
                                                    <span className="float-start text-warning">Vận chuyển</span>
                                                </>
                                                :''
                                                }
                                                {item.statusOrder===2
                                                ?<>
                                                    <div className="float-start rounded-circle bg-success ms-3 me-1" style={{width:10,height:10,marginTop:8}}></div>
                                                    <span className="float-start text-success">Hoàn thành</span>
                                                </>
                                                :''
                                                }
                                            </td>
                                            <td>
                                                {item.statusOrder===0
                                                    &&<button className="btn btn-outline-primary">
                                                        <i className="bi bi-truck me-1"></i>
                                                        <span onClick={()=>context.handleTransport(item._id)}>Giao hàng</span>
                                                    </button>
                                                    
                                                }
                                                {item.statusOrder===1
                                                    &&<span className="text-secondary">Đang giao hàng</span>
                                                }
                                                
                                                {item.statusOrder===2
                                                    &&<span className="text-success">Giao xong</span>
                                                }
                                            </td>
                                            <td style={{width:50}}>    
                                                <div className="text-center text-danger" data-bs-toggle="modal" data-bs-target="#DeleteModal"  onClick={()=>context.handleItemDelete("Bill "+(i+1),item._id)}>
                                                    <i className="bi bi-trash3"></i>
                                                </div>
                                            </td>
                                            <td style={{width:50}}>
                                                <div className="text-center text-success" data-bs-toggle="modal" data-bs-target="#DetailModal" onClick={()=>(context.setIdWatch(item._id))}>
                                                    <i className="bi bi-eye"></i>
                                                </div>
                                            </td>
                                        </tr>   
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                    {/* <div className="tab-pane fade" id="nav-chat" style={{height:800,overflow:'hidden'}}>
                        <div className="row p-2 rounded-5" style={{width:100+'%',height:'auto',background:'white'}}>
                            <div className="col-lg-6 col-sm-12" style={{width:50+'%',height:600,marginLeft:10}}>
                                <div className="">
                                    <div className="text-muted rounded-3 d-flex justify-content-start align-items-center p-1 bg-secondary">
                                        <input type="search" className="form-control rounded me-2" placeholder="Search" aria-label="Search"
                                        aria-describedby="search-addon" style={{height:35}} />
                                        <button className="btn btn-primary border-0" id="search-addon">
                                            <i className="bi bi-search"></i>
                                        </button>
                                    </div>

                                    <div className="bg-light" style={{position: 'relative',height:540,overflow:'scroll'}}>
                                        <div className="mb-0">
                                            {context.listUsersDB.map((item,i)=>{
                                                if(item.role==='user')
                                                    return(<div key={i} className="p-2 border-bottom" onClick={()=>context.setAcountChat(item.user)}>
                                                        <a   className="d-flex justify-content-between">
                                                        <div className="d-flex flex-row">
                                                            <div>
                                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                                                    alt="avatar" className="d-flex align-self-center me-3" width="60"/>
                                                                <span className="badge bg-success badge-dot"></span>
                                                                </div>
                                                                <div className="pt-1">
                                                                <p className="fw-bold mb-0">
                                                                    {item.user}
                                                                </p>
                                                                <p className="small text-muted">
                                                                    Helo word
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="pt-1">
                                                            <p className="small text-muted mb-1">Yesterday</p>
                                                            <span className="badge bg-danger rounded-pill float-end">1</span>
                                                        </div>
                                                        </a>
                                                    </div>)
                                                })
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-sm-12" style={{height:600,overflow:'hidden',marginLeft:-10}}>
                                <div className="text-muted rounded-3 d-flex justify-content-start align-items-center p-1 bg-secondary">
                                    <i className="bi bi-arrow-left me-2" style={{color:'white'}}></i>
                                    <img className="me-2" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                        alt="avatar 3" style={{width: 40, height: 100+'%'}}/>
                                    <span style={{color:'white'}}>{context.acountChat}</span>
                                </div>
                                
                                <div className="pt-3 pe-3 bg-light" style={{position: 'relative', height: 500, overflow:'scroll'}}>
                                    {context.chat.map((item,i)=>{
                                        if(item.role==='user')
                                            return(<div key={i} className="d-flex flex-row justify-content-start">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                                alt="avatar 1" style={{width: 45, height: 100+'%'}}/>
                                                <div>
                                                <p className="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: '#f5f6f7',width:200}}>
                                                    {item.content}    
                                                </p>
                                                <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                                                    {item.item}    
                                                </p>
                                                </div>
                                            </div>)
                                        else return(
                                            <div key={i} className="d-flex flex-row justify-content-end">
                                                <div>
                                                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                                                        {item.content}
                                                    </p>
                                                <p className="small me-3 mb-3 rounded-3 text-muted">
                                                    {item.time}
                                                </p>
                                                </div>
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                                alt="avatar 1" style={{width: 45, height: 100+'%'}}/>
                                            </div>)
                                        })
                                    }
                                    
                                    <div style={{height:100}}></div>
                                    <span className="end" style={{background:'red'}}></span>
                                </div>

                                <div className="text-muted rounded-3 d-flex justify-content-start align-items-center bg-secondary">
                                    <img className="ms-2" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                        alt="avatar 3" style={{width: 40, height: 100+'%'}}/>
                                    <input type="text" className="ms-2 form-control" id="exampleFormControlInput2" style={{height:32}}
                                        placeholder="Type message" value={context.message} onChange={e=>context.setMessage(e.target.value)} onKeyDown={(e)=>context.handleSendKeyDown(e)}/>
                                    <i className="bi bi-send ms-2 me-3" style={{fontSize:22,color:'white'}} onClick={()=>context.handleSendMessage()}></i>
                                </div>
                            </div>
                        </div>

                    </div> */}
                </div>
                
            </div>
            

            <div className="modal fade" id="DeleteModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Xóa {context.typeTable}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Bạn có muốn xóa sản phẩm <span className="fw-bold">{context.itemDelete}</span> không?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-danger"  data-bs-dismiss="modal" onClick={()=>context.handleDelete()}>Delete</button>
                    </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="EditModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Cập nhật {context.typeTable}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            

                            <div className="row">
                                <div className="col-3">
                                    {Object.keys(context.itemUpdate).map((item,x)=>{
                                        return(
                                            <div style={{height:50}} key={x}>
                                                {item}
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="col-9">
                                    {Object.values(context.itemUpdate).map((item,i)=>{
                                        return(
                                            <div style={{height:50}} key={i}>
                                                <input type="email" className="form-control" value={item} onChange={e=>context.handleChangeUpdate(e,i)} readOnly={i===0} />
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={()=>context.handleUpdate()}>Update</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="DetailModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Xem chi tiết hóa đơn</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <table className="table table-sm table-bordered">
                            <thead>
                                <tr>
                                <th scope="col">Ảnh</th>
                                <th scope="col">Tên sản phẩm</th>
                                <th scope="col">Số lượng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {context.detailBillDB.map((item,i)=>{
                                    if(item.id_bill===context.idWatch)
                                    {
                                        return(
                                        <tr key={i}>
                                            <td>
                                                <img src={item.id_product.img} style={{width:50,height:50}}/>
                                            </td>
                                            <td>{item.id_product.name}</td>
                                            <td>{item.quantity}</td>
                                        </tr>
                                    )}
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="CreateModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Thêm sản phẩm</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row mt-2">
                                <div className="col-4">
                                    <span>Ảnh</span>
                                </div>
                                <div className="col-8">
                                    <input type="text" className="form-control" value={context.imgAddProduct} onChange={e=>context.setImgAddProduct(e.target.value)}/>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-4">
                                    <span>Tên sản phẩm</span>
                                </div>
                                <div className="col-8">
                                    <input type="text" className="form-control" value={context.productAddProduct} onChange={e=>context.setProductAddProduct(e.target.value)}/>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-4">
                                    <span>Giá</span>
                                </div>
                                <div className="col-8">
                                    <input type="number" className="form-control" value={context.priceAddProduct} onChange={e=>context.setPriceAddProduct(e.target.value)}/>
                                </div>
                            </div>

                            <div className="row mt-2">
                                <div className="col-4">
                                    <span>Thương hiệu</span>
                                </div>
                                <div className="col-8">
                                    <input type="text" className="form-control" value={context.trademarkAddProduct} onChange={e=>context.setTrademarkAddProduct(e.target.value)}/>
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                            <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={()=>context.handleAddProduct()}>Thêm</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="AvatarModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Sửa ảnh đại diện</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>context.setNewAvatarUsersInAdminPage('')}></button>
                            </div>
                            <div className="modal-body">
                                <div className="row m-2">
                                    <div className="col-5 d-flex justify-content-center">
                                        <img className="rounded-circle" width={120} height={120} src={context.avatarUsersInAdminPage?('https://shoppingbe.onrender.com/img/'+context.avatarUsersInAdminPage):'https://img6.thuthuatphanmem.vn/uploads/2022/02/11/anh-con-gai-buon-de-thuong_050949344.jpg'}/>
                                    </div>
                                    <div className="col-2 d-flex justify-content-center align-items-center">
                                        <span style={{fontSize:30}}>
                                            <i className="bi bi-arrow-right"></i>
                                        </span>
                                    </div>
                                    <div className="col-5">
                                        <img className="rounded-circle" width={120} height={120} src={context.newAvatarUsersInAdminPage||'https://cdn-icons-png.flaticon.com/512/6596/6596121.png'}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col d-flex justify-content-center">
                                        <button className="btn btn-secondary  d-flex justify-content-center">
                                            <label htmlFor="avatar" style={{fontSize:16}}>
                                                <i className="bi bi-camera me-3"></i>
                                                Sửa ảnh
                                            </label>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>context.setNewAvatarUsersInAdminPage('')}>Hủy</button>
                                <form action="https://shoppingbe.onrender.com/img/update" encType="multipart/form-data" method="post" onSubmit={(e)=>context.handleUpdateAvatarUser(e)}>
                                    <input type="file"  name="myfile" id="avatar" style={{display:'none'}} onChange={(e)=>context.handleOnchangeAvatarUser(e)}/>
                                    <input type="submit" value={'Lưu'} className="btn btn-success" data-bs-dismiss="modal"  onClick={()=>context.setNewAvatarUsersInAdminPage('')} />
                                </form>
                            </div>
                        </div>

                </div>
            </div>

            <Footer/>
        
            <Order/>


        </div>
    );
}

export default Admin;
