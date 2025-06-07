import { useContext, useEffect, useRef, useState } from "react";
import { HandleAllContext } from "../handleAllContext";



export default function Chat(){
    const context=useContext(HandleAllContext)

    return(
        <div>
            {context.showMessage
                ?<div className=""  style={{width:350,height:400,background:'white',position:'fixed',bottom:135,right:30,zIndex:2,borderRadius:8}}>
                    <div className=" mt-3" id="collapseExample" style={{height:400,overflow:'hidden'}}>
                        <div className="card" id="chat4" style={{overflow:'scroll'}}>
                            <div className="card-body" data-mdb-perfect-scrollbar="true" style={{position: 'relative', height: 400}}>
                                {context.chat.map((item,i)=>{
                                    if(item.role==='user'){
                                    return(
                                        <div key={i} className= {"d-flex flex-row justify-content-start"}>
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                                                alt="avatar 1" style={{width: 30, height: 70+'%'}}/>
                                            <div>
                                            <p className="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor:  '#f5f6f7'}}>
                                                {item.content}
                                            </p>
                                            <p className="small ms-3 mb-3 rounded-3 text-muted">
                                                {item.time}
                                            </p>
                                            </div>
                                        </div>)
                                    }
                                    else
                                        return(
                                            <div key={i} className="d-flex flex-row justify-content-end">
                                                <div>
                                                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-info">
                                                        {item.content}
                                                    </p>
                                                    <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                                                        {item.time}
                                                    </p>
                                                </div>
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                                    alt="avatar 1" style={{width: 45, height: 100+'%'}}/>
                                            </div>
                                        )
                                })}
                                <div style={{height:100}}></div>
                                <span className="end" style={{background:'red'}}></span>
                            </div>
                        </div>
                    </div>
                    <div className="text-muted d-flex justify-content-start align-items-center bg-secondary">
                        <img className="ms-1" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                            alt="avatar 3" style={{width: 40, height: 100+'%'}}/>
                        <input type="text" className="form-control ms-2 me-2" id="exampleFormControlInput3"
                            placeholder="Type message" value={context.message} onChange={e=>context.setMessage(e.target.value)} onKeyDown={e=>context.handleSendKeyDown(e)}/>
                        <i className="bi bi-send me-2" style={{color:'white',fontSize:22}} onClick={()=>context.handleSendMessage()}></i>
                    </div>

                </div>
                :''
            }

            <button className="btn btn-outline-secondary" type="button" style={{width:40,height:40,position:'fixed',bottom:30,right:30,borderRadius:50+'%'}} onClick={()=>context.setShowMessage(!context.showMessage)}>
                <i className="bi bi-chat-dots-fill"></i>
            </button> 


        </div>
    )
}