// eslint-disable-next-line no-unused-vars
import { useContext } from "react";
import { HandleAllContext } from "../handleAllContext";
import Header from "../componentChild/header";

function Login() {
    const context=useContext(HandleAllContext)
    return (
        <div className="App">
            <Header/>
            <div className="d-flex justify-content-center" style={{width:100+'%',height:100+'%',background:'#f9fafb'}}>
                <div className="text-start" style={{width:600+'px',height:400+'px',marginTop:200+'px',marginBottom:200+'px',borderRadius:10,background:'gainsboro',padding:30+'px'}}>
                    <h1 className="text-center mb-4">Sign in</h1>
                    <div className="">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name="user" onChange={e=>context.setUser(e.target.value)}/>
                    </div>
                    <div className="">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={e=>context.setPassword(e.target.value)} />
                    </div>
                    <div className=" form-check">
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Don't have an account?
                            <span className="text-primary" onClick={()=>context.navigate('/register')}>
                                Join now
                            </span>
                        </label>
                    </div>
                    <button type="submit" className="btn btn-secondary col-12 mt-3" onClick={()=>context.handleLogin()} >
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
