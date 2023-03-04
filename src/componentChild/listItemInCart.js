/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext} from "react";
import { HandleAllContext } from "../handleAllContext";

function ListItem() {
    const context=useContext(HandleAllContext);
    return (
        <>  
            {context.show
            ?<div className="" style={{height:'auto',overflowY:'scroll'}}>
                {context.cart.map((item,i)=>{
                    return(
                        <div className="card m-1" key={i}>
                            {/* <div className="card-body">
                                <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div>
                                    <img
                                        src={item.data.img}
                                        className=" rounded-3" alt="Shopping item" style={{width: 65+"px"}}/>
                                    </div>
                                    <div className="ms-1">
                                    <h6>{item.data.nameShoe}</h6>
                                    <p className="small mb-0">Color:white, Size:38</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                    <input className="text-center" type={"number"} 
                                        min={1} value={item.amount} style={{width:60+'px'}}
                                        onChange={e=>context.handleChangeAmount(item.data.id,e.target.value)} />
                                    <div style={{width: 80+"px"}}>
                                    <h5 className="mb-0 ms-3">${item.data.price*item.amount}</h5>
                                    </div>
                                    <a  style={{color: "#cecece"}} onClick={()=>context.handleDeleteItem(item.data.id)}>
                                        <i className="bi bi-trash3"></i>
                                    </a>
                                </div>
                                </div>
                            </div> */}
                            
                            <div className="d-flex align-items-center m-1">
                                <div className="flex-shrink-0">
                                    <img src={item.data.img} className="img-fluid" style={{width:90+"px"}} alt="Generic placeholder image"/>
                                </div>
                                <div className="flex-grow-1 ms-2">
                                    <span className="float-end text-black ms-1 me-2" onClick={()=>context.handleDeleteItem(item.data._id)}>
                                        <i className="bi bi-x-lg"></i>
                                    </span>
                                    <h6>{item.data.name}</h6>
                                    <div className="small" style={{color: "#9e9e9e",marginTop:-10+'px'}}>Color: white, Size: 38</div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="mb-0 me-5" style={{fontSize:20+'px',fontWeight:600}}>${item.data.price*item.amount}</div>
                                        <div className="def-number-input number-input safari_only" style={{marginRight:30}}>
                                            <span className="me-2 text-secondary" onClick={()=>context.handleDecrease(item.data._id,item.amount)}>
                                                <i className="bi bi-dash-circle"></i>
                                            </span>
                                            <input className="quantity text-black text-center" 
                                            type={"number"} min={1} value={item.amount}onChange={e=>context.handleChangeAmount(item.data._id,e.target.value)} 
                                            style={{width:50+'px',fontWeight:600,appearance: 'textfield'}}/>
                                            <span className="ms-2 text-primary" onClick={()=>context.handleIncrease(item.data._id,item.amount)}>
                                                <i className="bi bi-plus-circle"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            :<div className="d-flex justify-content-center align-items-center" style={{minHeight:490+'px',overflowY:'hidden'}}>
                <svg style={{width:300+'px',height:300+'px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120" preserveAspectRatio="xMidYMid slice" strokeWidth={{width: 100+'%', height: 100+'%', transform: 'translate3d(0px, 0px, 0px)', contentVisibility: 'visible'}}>
                    <defs>
                        <clipPath id="__lottie_element_2">
                            <rect width="120" height="120" x="0" y="0"></rect>
                        </clipPath>
                    </defs>
                    <g clipPath="url(#__lottie_element_2)">
                        <g transform="matrix(1,0,0,1,0,0)" opacity="1" strokeWidth={{display:'block'}}>
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                            <g opacity="1" transform="matrix(1,0,0,1,60,83.33000183105469)">
                                <path fill="rgb(204,209,217)" fillOpacity={1} d=" M-32.143001556396484,-24.17099952697754 C-32.143001556396484,-24.17099952697754 -32.143001556396484,11.310999870300293 -32.143001556396484,11.310999870300293 C-32.143001556396484,11.310999870300293 -0.0010000000474974513,24.17099952697754 -0.0010000000474974513,24.17099952697754 C-0.0010000000474974513,24.17099952697754 32.14400100708008,11.310999870300293 32.14400100708008,11.310999870300293 C32.14400100708008,11.310999870300293 32.14400100708008,-24.17099952697754 32.14400100708008,-24.17099952697754 C32.14400100708008,-24.17099952697754 -32.143001556396484,-24.17099952697754 -32.143001556396484,-24.17099952697754z">
                                </path>
                            </g>
                            <g opacity="1" transform="matrix(1,0,0,1,76.0719985961914,83.33000183105469)">
                                <path fill="rgb(230,233,236)" fillOpacity="1" d=" M-16.07200050354004,24.17099952697754 C-16.07200050354004,24.17099952697754 16.07200050354004,11.312000274658203 16.07200050354004,11.312000274658203 C16.07200050354004,11.312000274658203 16.07200050354004,-24.17099952697754 16.07200050354004,-24.17099952697754 C16.07200050354004,-24.17099952697754 -16.07200050354004,-24.17099952697754 -16.07200050354004,-24.17099952697754 C-16.07200050354004,-24.17099952697754 -16.07200050354004,24.17099952697754 -16.07200050354004,24.17099952697754z">
                                </path>
                            </g>
                            <g opacity="1" transform="matrix(1,0,0,1,60,55.74800109863281)">
                                <path fill="rgb(244,244,244)" fillOpacity="1" d=" M12.855999946594238,-23.249000549316406 C12.855999946594238,-23.249000549316406 0,-16.604999542236328 0,-16.604999542236328 C0,-16.604999542236328 -12.857000350952148,-23.249000549316406 -12.857000350952148,-23.249000549316406 C-12.857000350952148,-23.249000549316406 -45,-6.640999794006348 -45,-6.640999794006348 C-45,-6.640999794006348 -32.14400100708008,0.0010000000474974513 -32.14400100708008,0.0010000000474974513 C-32.14400100708008,0.0010000000474974513 -45,6.644999980926514 -45,6.644999980926514 C-45,6.644999980926514 -12.857000350952148,23.249000549316406 -12.857000350952148,23.249000549316406 C-12.857000350952148,23.249000549316406 0,16.608999252319336 0,16.608999252319336 C0,16.608999252319336 12.855999946594238,23.249000549316406 12.855999946594238,23.249000549316406 C12.855999946594238,23.249000549316406 45,6.644999980926514 45,6.644999980926514 C45,6.644999980926514 32.143001556396484,0.0010000000474974513 32.143001556396484,0.0010000000474974513 C32.143001556396484,0.0010000000474974513 45,-6.640999794006348 45,-6.640999794006348 C45,-6.640999794006348 12.855999946594238,-23.249000549316406 12.855999946594238,-23.249000549316406z"></path>
                            </g>
                            <g opacity="1" transform="matrix(1,0,0,1,60,55.75)">
                                <path fill="rgb(204,209,217)" fillOpacity="1" d=" M-0.0010000000474974513,-16.60700035095215 C-0.0010000000474974513,-16.60700035095215 -32.143001556396484,-0.0020000000949949026 -32.143001556396484,-0.0020000000949949026 C-32.143001556396484,-0.0020000000949949026 -0.0010000000474974513,16.60700035095215 -0.0010000000474974513,16.60700035095215 C-0.0010000000474974513,16.60700035095215 32.14400100708008,-0.0020000000949949026 32.14400100708008,-0.0020000000949949026 C32.14400100708008,-0.0020000000949949026 -0.0010000000474974513,-16.60700035095215 -0.0010000000474974513,-16.60700035095215z">
                                </path>
                            </g>
                            </g>
                        </g>
                        <g transform="matrix(1,0,0,1,-0.75,-0.75)" opacity="1" strokeWidth="display: block;">
                            <g opacity="1" transform="matrix(1,0,0,1,67.87000274658203,37.63100051879883)">
                            <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" strokeDasharray=" 2.028 2.028" strokeDashoffset="0" stroke="rgb(159,159,159)" strokeOpacity="1" strokeWidth="1" d=" M-7.382999897003174,24.760000228881836 C-12.057999610900879,20.631999969482422 -20.95599937438965,10.812999725341797 -7.046000003814697,5.539999961853027 C5.769999980926514,0.6819999814033508 9.795000076293945,1.4609999656677246 14.34000015258789,-2.2730000019073486 C17.514999389648438,-4.882999897003174 18.22100067138672,-9.887999534606934 15.883000373840332,-14.522000312805176">
                            </path>
                            </g>
                        </g>
                        <g transform="matrix(1,0,0,1,19.775558471679688,10.814558029174805)" opacity="1" strokeWidth={{display: 'block'}}>
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                            <g opacity="1" transform="matrix(1,0,0,1,57.957000732421875,10.552000045776367)">
                                <path fill="rgb(255,255,255)" fillOpacity="1" d=" M0,-3.614000082015991 C1.996000051498413,-3.614000082015991 3.614000082015991,-1.996000051498413 3.614000082015991,0 C3.614000082015991,1.996000051498413 1.996000051498413,3.614000082015991 0,3.614000082015991 C-1.996000051498413,3.614000082015991 -3.614000082015991,1.996000051498413 -3.614000082015991,0 C-3.614000082015991,-1.996000051498413 -1.996000051498413,-3.614000082015991 0,-3.614000082015991z">
                                </path>
                                <path strokeLinecap="butt" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="10" stroke="rgb(134,134,134)" strokeOpacity="1" strokeWidth="0.7" d=" M0,-3.614000082015991 C1.996000051498413,-3.614000082015991 3.614000082015991,-1.996000051498413 3.614000082015991,0 C3.614000082015991,1.996000051498413 1.996000051498413,3.614000082015991 0,3.614000082015991 C-1.996000051498413,3.614000082015991 -3.614000082015991,1.996000051498413 -3.614000082015991,0 C-3.614000082015991,-1.996000051498413 -1.996000051498413,-3.614000082015991 0,-3.614000082015991z"></path>
                            </g>
                            <g opacity="1" transform="matrix(1,0,0,1,64.1449966430664,9.605999946594238)">
                                <path fill="rgb(255,255,255)" fillOpacity="1" d=" M0.0010000000474974513,-2.5739998817443848 C1.4220000505447388,-2.5739998817443848 2.5739998817443848,-1.4220000505447388 2.5739998817443848,0 C2.5739998817443848,1.4220000505447388 1.4220000505447388,2.5739998817443848 0.0010000000474974513,2.5739998817443848 C-1.4210000038146973,2.5739998817443848 -2.5739998817443848,1.4220000505447388 -2.5739998817443848,0 C-2.5739998817443848,-1.4220000505447388 -1.4210000038146973,-2.5739998817443848 0.0010000000474974513,-2.5739998817443848z"></path>
                                <path strokeLinecap="butt" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="10" stroke="rgb(134,134,134)" strokeOpacity="1" strokeWidth="0.7" d=" M0.0010000000474974513,-2.5739998817443848 C1.4220000505447388,-2.5739998817443848 2.5739998817443848,-1.4220000505447388 2.5739998817443848,0 C2.5739998817443848,1.4220000505447388 1.4220000505447388,2.5739998817443848 0.0010000000474974513,2.5739998817443848 C-1.4210000038146973,2.5739998817443848 -2.5739998817443848,1.4220000505447388 -2.5739998817443848,0 C-2.5739998817443848,-1.4220000505447388 -1.4210000038146973,-2.5739998817443848 0.0010000000474974513,-2.5739998817443848z"></path>
                            </g>
                            <g opacity="1" transform="matrix(1,0,0,1,62.400001525878906,13.144000053405762)">
                                <path fill="rgb(134,134,134)" fillOpacity="1" d=" M-0.0010000000474974513,-1.8009999990463257 C0.9940000176429749,-1.8009999990463257 1.8009999990463257,-0.9950000047683716 1.8009999990463257,-0.0010000000474974513 C1.8009999990463257,0.9929999709129333 0.9940000176429749,1.8009999990463257 -0.0010000000474974513,1.8009999990463257 C-0.9950000047683716,1.8009999990463257 -1.8009999990463257,0.9929999709129333 -1.8009999990463257,-0.0010000000474974513 C-1.8009999990463257,-0.9950000047683716 -0.9950000047683716,-1.8009999990463257 -0.0010000000474974513,-1.8009999990463257z">
                                </path>
                            </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            }
        </>
    );
}  
export default ListItem; 