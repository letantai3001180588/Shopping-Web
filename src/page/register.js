/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars
import { useContext } from "react";
import { HandleAllContext } from "../handleAllContext";
import Header from "../component/Nav";
import { Link } from "react-router-dom";
import Footer from "../component/footer";
import { ToastContainer } from "react-toastify";
function Register() {
    const context=useContext(HandleAllContext)
    return (
        <div className="App">
            <Header/>
            <div className="d-flex justify-content-center" style={{width:100+'%',height:100+'%',background:'#f9fafb'}}>
                <div className="text-start" style={{width:600+'px',minHeight:400+'px',marginTop:150+'px',marginBottom:200+'px',borderRadius:10,background:'gainsboro',padding:30+'px'}}>
                    <h1 className="text-center mb-4">Đăng kí</h1>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Tên người dùng</label>
                        <input type="text" className="form-control" onChange={e=>context.setUserRegister(e.target.value)}/>
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" onChange={e=>context.setEmailRegister(e.target.value)}/>
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputPassword1" className="form-label">Mật khẩu</label>
                        <input type="password" className="form-control" onChange={e=>context.setPasswordRegister(e.target.value)} />
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Địa chỉ</label>
                        <input type="text" className="form-control" onChange={e=>context.setAddressRegister(e.target.value)}/>
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Số điện thoại</label>
                        <input type="number" className="form-control" onChange={e=>context.setPhoneRegister(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-secondary col-12 mt-5" onClick={()=>{context.handleRegister()}} >
                        Đăng kí
                    </button>
                </div>
            </div>
            <Footer/>
            <ToastContainer />
        </div>
    );
}

export default Register;
