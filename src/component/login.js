// eslint-disable-next-line no-unused-vars
import { useContext } from "react";
import { HandleAllContext } from "../handleAllContext";
import Header from "../componentChild/header";
import Footer from "../componentChild/footer";
import { ToastContainer } from "react-toastify";

function Login() {
    const context=useContext(HandleAllContext)
    return (
        <div className="App">
            <Header/>
            <div className="d-flex justify-content-center" style={{width:100+'%',height:100+'%',background:'#f9fafb'}}>
                <div className="text-start" style={{width:600+'px',height:400+'px',marginTop:200+'px',marginBottom:200+'px',borderRadius:10,background:'gainsboro',padding:30+'px'}}>
                    <h1 className="text-center mb-4">Đăng nhập</h1>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email:</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name="user" onChange={e=>context.setUser(e.target.value)}/>
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputPassword1" className="form-label">Mật khẩu:</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={e=>context.setPassword(e.target.value)} />
                    </div>
                    <div className=" form-check">
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Bạn có tài khoản chưa ?
                            <span className="text-primary" onClick={()=>context.navigate('/register')}>
                                Đăng kí ngay.
                            </span>
                        </label>
                    </div>
                    <button type="submit" className="btn btn-secondary col-12 mt-3" onClick={()=>context.handleLogin()} >
                        Đăng nhập
                    </button>
                </div>
            </div>
            <Footer/>
            <ToastContainer />

        </div>
    );
}

export default Login;
