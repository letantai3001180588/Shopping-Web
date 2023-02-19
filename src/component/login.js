function Login() {
    return (
        <>
            <div className="d-flex justify-content-center" style={{width:100+'%',height:100+'%',background:'#f9fafb'}}>
                <div className="text-start" style={{width:600+'px',height:400+'px',marginTop:200+'px',marginBottom:200+'px',background:'white',padding:30+'px'}}>
                    <h1 className="text-center mb-4">Sign in</h1>
                    <form >
                        <div className="">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className=" form-check">
                            <label className="form-check-label" htmlFor="exampleCheck1">Don't have an account? Join now</label>
                        </div>
                        <button type="submit" className="btn btn-secondary col-12 mt-3">Sign in</button>
                    </form>
                </div>
            </div>
        </>
    );
  }
  
  export default Login;
  