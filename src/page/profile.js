import Header from "../component/Nav";
import Footer from "../component/footer";
import { useContext } from "react";
import { HandleAllContext } from "../handleAllContext";

export default function Profile(){
    const context=useContext(HandleAllContext)
    
    return(
        <>
            <Header/>
            <div className="container rounded-3 bg-light mb-5" style={{marginTop:100}}>
            <div className="row">
                <div className="col-md-4 border-right d-flex justify-content-center">
                    <div className="d-flex flex-column align-items-center justify-content-center text-center p-3 py-5">
                        <img className="rounded-circle" width="150px" alt="" style={{height:150,objectFit:'cover'}}  src={context.newAvatarUsersInAdminPage||context.avatarUser}/>
                        <div className="mt-1 text-center mb-3">
                            <div className="input-group">
                                <div className="custom-file">
                                    <label className="btn btn-outline-secondary rounded-circle" htmlFor="a">
                                        <i className="bi bi-camera"></i>
                                    </label>
                                </div>
                                <form action="https://shoppingbe.onrender.com/img/update" encType="multipart/form-data" method="post" onSubmit={(e)=>context.handleUpdateAvatarUser(e)}>
                                    <input type="file" id="a" className="btn btn-outline-primary"  style={{display:'none'}} onChange={(e)=>context.handleOnchangeAvatarUser(e)} />
                                    {context.newAvatarUsersInAdminPage&&
                                        <>
                                            <button type="submit" className="btn btn-outline-success ms-3 rounded-circle"  onClick={(e)=>context.handleUpdateAvatarUser(e)}>
                                                <i className="bi bi-check-lg"></i> 
                                            </button>
                                            <button className="btn btn-outline-secondary ms-3 rounded-circle" onClick={()=>context.setNewAvatarUsersInAdminPage('')}>
                                                <i className="bi bi-x-circle"></i>
                                            </button>  
                                        </>
                                    }
                                </form>
                            </div>
                        </div>
                        <span className="font-weight-bold">{context.acount}</span>
                        <span className="text-black-50">{context.emailAcount}</span>
                    </div>
                </div>
                <div className="col-md-6 border-right">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h3 className="text-right">Hồ sơ của tôi</h3>
                            <button className="btn btn-outline-warning ms-5" onClick={()=>context.setShowInputProfile(!context.showInputProfile)}>    
                                <i className="bi bi-pencil-fill" style={{fontSize:12}}></i>
                            </button>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12 mt-3">
                                <label className="form-label">Tên người dùng: </label>
                                <input type="text" className="form-control" name="username" placeholder="Tài khản" value={context.acountProfile.username} readOnly={context.showInputProfile}  onChange={e=>context.handleInputChangeUpdate(e)}/>
                            </div>
                            <div className="col-md-12 mt-3">
                                <label className="form-label">Email: </label>
                                <input type="email" className="form-control" name="email" placeholder="Email" value={context.acountProfile.email}  readOnly={context.showInputProfile} onChange={e=>context.handleInputChangeUpdate(e)}/>
                            </div>
                            <div className="col-md-12 mt-3">
                                <label className="form-label">Số điện thoại: </label>
                                <input type="number" className="form-control" name="phone" placeholder="Số điện thoại" value={context.acountProfile.phone} readOnly={context.showInputProfile} onChange={e=>context.handleInputChangeUpdate(e)}/>
                            </div>
                            <div className="col-md-12 mt-3">
                                <label className="form-label">Địa chỉ:</label>
                                <input type="text" className="form-control" name="address" placeholder="Địa chỉ"  value={context.acountProfile.address} readOnly={context.showInputProfile} onChange={e=>context.handleInputChangeUpdate(e)}/>
                            </div>
                        </div>

                        <div className="mt-5">
                            <button className="btn btn-primary profile-button" type="button" onClick={()=>context.handleUpdateProfile()}>Lưu hồ sơ</button>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
        <Footer/>
        </>

    )
}