/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
import { useContext } from "react";
import Footer from "../componentChild/footer";
import Header from "../componentChild/header";
import { HandleAllContext } from "../handleAllContext";

function Admin() {
    const context=useContext(HandleAllContext)             
    console.log(context.detailBill)
    return (
        <div className="App">
            <Header/>
            
            <nav className="container" style={{marginTop:150+'px',marginBottom:20+'px'}}>
                <div className="nav nav-tabs bg-light" id="nav-tab" role="tablist">
                    <button className="nav-link active ms-5" onClick={()=>context.setTypeTable('Product')} id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-product" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Product</button>
                    <button className="nav-link" onClick={()=>context.setTypeTable('User')} id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-customer" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Customer</button>
                    <button className="nav-link" onClick={()=>context.setTypeTable('Bill')} id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-bill" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Bill</button>
                </div>
            </nav>

            <div className="container" style={{marginBottom:100+'px',maxHeight:500+'px',minHeight:500+'px',overflowY:'scroll'}}>
                <div className="tab-content" id="nav-tabContent mt-3">
                    <div className="tab-pane fade show active" id="nav-product" role="tabpanel" aria-labelledby="nav-home-tab">
                        <table className="table table-sm table-bordered table-striped">
                            <thead className=" bg-secondary text-white text-center">
                                <tr>
                                    <th>ID</th>
                                    <th >Img</th>
                                    <th>Product</th>
                                    <th >Price</th>
                                    <th>Inventory</th>
                                    <th>Sold goods</th>
                                    <th  colSpan={3}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {context.listProduct.map((item,i)=>{
                                    return(
                                        <tr key={i} className='align-middle justify-content-center' >
                                            <th >{item.id}</th>
                                            <td style={{width:80+'px'}}>
                                                {/* {item.img} */}
                                                <img src={item.img} style={{width:50+'px',height:50+'px'}}/>
                                            </td>
                                            <td>{item.nameShoe}</td>
                                            <td>${item.price}</td>
                                            <td>100 a pair</td>
                                            <td>50 a pair</td>
                                            <td style={{width:50}}>    
                                                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#DeleteModal" onClick={()=>context.handleItemDelete(item.nameShoe,item.id,'Product')}>
                                                    <i className="bi bi-trash3"></i>
                                                </button>
                                            </td>
                                            <td style={{width:50}}>
                                                <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#EditModal" onClick={()=>context.handleItemUpdate(item,item.id,'Product')}>
                                                    <i className="bi bi-pencil"></i>
                                                </button>
                                            </td>
                                            <td style={{width:50}}>
                                                <button type="button" className="btn btn-success">
                                                    <i className="bi bi-eye"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        
                                )})}
                            </tbody>
                        </table>
                    </div>

                    <div className="tab-pane fade" id="nav-customer" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <table className="table table-sm table-bordered table-striped">
                            <thead className=" bg-secondary text-white text-center">
                                <tr>
                                    <th>ID</th>
                                    <th>User</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th >Phone</th>
                                    <th  colSpan={3}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {context.listUsers.map((item,i)=>{
                                    return(
                                        <tr key={i} className='align-middle justify-content-center text-center'>
                                            <th>{item.id}</th>
                                            <td>{item.nameUser}</td>
                                            <td>{item.email}</td>
                                            <td>{item.address}</td>
                                            <td>{item.phone}</td>
                                            <td style={{width:50}}>    
                                                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#DeleteModal"  onClick={()=>context.handleItemDelete(item.nameUser,item.id,'User')}>
                                                    <i className="bi bi-trash3"></i>
                                                </button>
                                            </td>
                                            <td style={{width:50}}>
                                                <button type="button" className="btn btn-warning" data-bs-toggle="modal"  data-bs-target="#EditModal" onClick={()=>context.handleItemUpdate(item,item.id,'User')}>
                                                    <i className="bi bi-pencil"></i>
                                                </button>
                                            </td>
                                            <td style={{width:50}}>
                                                <button type="button" className="btn btn-success">
                                                <i className="bi bi-eye"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        
                                )})}
                            </tbody>
                        </table>
                    </div>
                    <div className="tab-pane fade" id="nav-bill" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <table className="table table-sm table-bordered table-striped">
                            <thead className=" bg-secondary text-white text-center">
                                <tr>
                                    <th>ID</th>
                                    <th>Customer</th>
                                    <th>Total Bill</th>
                                    <th>Create At</th>
                                    <th>Status</th>
                                    <th  colSpan={4}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {context.bill.map((item,i)=>{
                                    return(
                                        <tr key={i} className='align-middle justify-content-center text-center'>
                                            <th>{item.id}</th>
                                            <td>{item.name}</td>
                                            <td>{item.total}</td>
                                            <td>{item.createat}</td>
                                            <td>{item.status}</td>
                                            <td style={{width:50}}>    
                                                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#DeleteModal"  onClick={()=>context.handleItemDelete("Hoa don "+(i+1),item.id)}>
                                                    <i className="bi bi-trash3"></i>
                                                </button>
                                            </td>
                                            <td style={{width:50}}>
                                                <button type="button" className="btn btn-warning">
                                                    <i className="bi bi-pencil"></i>
                                                </button>
                                            </td>
                                            <td style={{width:50}}>
                                                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#DetailModal" onClick={()=>context.setIdWatch(item.id)}>
                                                    <i className="bi bi-eye"></i>
                                                </button>
                                            </td>
                                            <td style={{width:50}}>
                                                <button type="button" className="btn btn-primary">
                                                    <i className="bi bi-chat-dots"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        
                                )})}
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
            

            <div className="modal fade" id="DeleteModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Delete</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you wan to delete <span className="fw-bold">{context.itemDelete}</span>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-danger"onClick={()=>context.handleDelete()}>Delete</button>
                    </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="EditModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Update</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-3">
                                    {Object.keys(context.itemUpdate).map((item,x)=>{
                                        return(
                                            <div className="m-3" key={x}>
                                                {item}
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="col-9">
                                    {Object.values(context.itemUpdate).map((item,i)=>{
                                        return(
                                            <div className="m-1" key={i}>
                                                <input type="email" className="form-control" value={item} onChange={e=>context.handleChangeUpdate(e,i)} id="exampleInputEmail1" aria-describedby="emailHelp" />
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
                        <h5 className="modal-title" id="staticBackdropLabel">Detail</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {context.detailBill.map((item,i)=>(
                            item.id===context.idWatch
                            &&<>
                                <div key={i}>
                                    {item.name}
                                </div>
                            </>
                        ))}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
            
            <Footer/>

        </div>
    );
}

export default Admin;
