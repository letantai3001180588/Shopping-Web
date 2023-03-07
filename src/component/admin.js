/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
import { useContext } from "react";
import Footer from "../componentChild/footer";
import Header from "../componentChild/header";
import { HandleAllContext } from "../handleAllContext";

function Admin() {
    const context=useContext(HandleAllContext)
    if(context.showAdmin)         
    return (   
        <div className="App">
            <Header/>

            <nav className="container" style={{marginTop:150+'px',marginBottom:20+'px'}}>
                <div className="nav nav-tabs bg-light" id="nav-tab" role="tablist">
                    <button className="nav-link active ms-5" onClick={()=>context.setTypeTable('Product')} id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-product" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Product</button>
                    <button className="nav-link" onClick={()=>context.setTypeTable('Acount')} id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-customer" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Customer</button>
                    <button className="nav-link" onClick={()=>context.setTypeTable('Bill')} id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-bill" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Bill</button>
                </div>
            </nav>

            <div className="container" style={{marginBottom:100+'px',maxHeight:500+'px',minHeight:500+'px',overflowY:'scroll'}}>
                <div className="tab-content" id="nav-tabContent mt-3">
                    <div className="tab-pane fade show active" id="nav-product"  style={{borderRadius:8+'px'}} role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="row mt-2 mb-2">
                            <div className="col-3">
                                <input className="form-control border rounded-pill" type="search" placeholder={`Search ${context.typeTable.toLowerCase()} ...`} id="example-search-input"/>
                            </div>
                            <div className="col-9">
                                <button className="btn btn-success float-end" type="submit" data-bs-toggle="modal" data-bs-target="#CreateModal">
                                    <i className="bi bi-plus-circle me-2"></i>
                                    Add Product
                                </button>
                            </div>
                        </div>
                        <table className="table table-sm table-bordered table-striped">
                            <thead className=" bg-secondary text-white text-center">
                                <tr>
                                    <th>ID</th>
                                    <th >Img</th>
                                    <th>Product</th>
                                    <th >Price</th>
                                    <th  colSpan={2}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {context.listProductDB.map((item,i)=>{
                                    return(
                                        <tr key={i} className='align-middle justify-content-center' >
                                            <th >{i+1}</th>
                                            <td style={{width:80+'px'}}>
                                                {/* {item.img} */}
                                                <img src={item.img} style={{width:50+'px',height:50+'px'}}/>
                                            </td>
                                            <td>{item.name}</td>
                                            <td>${item.price}</td>
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

                    <div className="tab-pane fade" id="nav-customer" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div className="row mt-2 mb-2">
                            <div className="col-3">
                                <input className="form-control border rounded-pill" type="search" placeholder={`Search ${context.typeTable.toLowerCase()} ...`} id="example-search-input"/>
                            </div>
                            <div className="col-9">
                                <button className="btn btn-success float-end" type="submit" onClick={()=>context.navigate('/register')}>
                                    <i className="bi bi-plus-circle me-2"></i>
                                    Register
                                </button>
                            </div>
                        </div>
                        <table className="table table-sm table-bordered table-striped" style={{borderRadius:8+'px'}}>
                            <thead className=" bg-secondary text-white text-center">
                                <tr>
                                    <th>ID</th>
                                    <th>User</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th >Phone</th>
                                    <th >Role</th>
                                    <th  colSpan={3}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {context.listUsersDB.map((item,i)=>{
                                    return(
                                        <tr key={i} className='align-middle justify-content-center text-center'>
                                            <th>{i+1}</th>
                                            <td>{item.user}</td>
                                            <td>{item.email}</td>
                                            <td>{item.address}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.role}</td>
                                            <td style={{width:50}}>    
                                                <div className="text-center text-danger" data-bs-toggle="modal" data-bs-target="#DeleteModal"  onClick={()=>context.handleItemDelete(item.user,item._id)}>
                                                    <i className="bi bi-trash3"></i>
                                                </div>
                                            </td>
                                            <td style={{width:50}}>
                                                <div className="text-center text-warning" data-bs-toggle="modal"  data-bs-target="#EditModal" onClick={()=>context.handleItemUpdate(item,item._id)}>
                                                    <i className="bi bi-pencil"></i>
                                                </div>
                                            </td>
                                            <td style={{width:50}}>
                                                <div className="text-center text-success">
                                                <i className="bi bi-eye"></i>
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
                                    <th>ID</th>
                                    <th>Customer</th>
                                    <th>Email</th>
                                    <th>Total Bill</th>
                                    <th>Create At</th>
                                    <th  colSpan={2}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {context.billDB.map((item,i)=>{
                                    return(
                                        <tr key={i} className='align-middle justify-content-center text-center'>
                                            <th>{i+1}</th>
                                            <td>{item.id_user.user}</td>
                                            <td>{item.id_user.email}</td>
                                            <td>$ {item.total}</td>
                                            <td>{item.createdAt}</td>
                                            <td style={{width:50}}>    
                                                <div className="text-center text-danger" data-bs-toggle="modal" data-bs-target="#DeleteModal"  onClick={()=>context.handleItemDelete("Bill "+(i+1),item._id)}>
                                                    <i className="bi bi-trash3"></i>
                                                </div>
                                            </td>
                                            <td style={{width:50}}>
                                                <div className="text-center text-success" data-bs-toggle="modal" data-bs-target="#DetailModal" onClick={()=>context.setIdWatch(item._id)}>
                                                    <i className="bi bi-eye"></i>
                                                </div>
                                            </td>
                                        </tr>   
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
            

            <div className="modal fade" id="DeleteModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Delete {context.typeTable}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you wan to delete <span className="fw-bold">{context.itemDelete}</span>
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
                            <h5 className="modal-title" id="staticBackdropLabel">Update {context.typeTable}</h5>
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
                                                <input type="email" className="form-control" value={item} onChange={e=>context.handleChangeUpdate(e,i)} />
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
                        <h5 className="modal-title" id="staticBackdropLabel">Watch Detail Bill</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <table className="table table-sm table-bordered">
                            <thead>
                                <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Product</th>
                                <th scope="col">Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {context.detailBillDB.map((item,i)=>{
                                    if(item.id_bill===context.idWatch){
                                        return(<tr key={i}>
                                            <td>
                                                <img src={item.id_product.img} style={{width:50,height:50}}/>
                                            </td>
                                            <td>{item.id_product.name}</td>
                                            <td>{item.quantity}</td>
                                        </tr>)
                                        
                                    }
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

            <Footer/>

        </div>
    );
}

export default Admin;
