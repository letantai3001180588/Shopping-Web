export default function SkeletonProduct(){
    const Loading=[1,2,3,4]

    return(
        <div className="container mb-5">
            <div className="row" >
            {Loading.map((arr,i)=>{return(
                <div className="col" key={i}>
                    <div className="h-100">
                        <span className="skeleton" style={{width:100+'%',height:250,borderRadius:8}}></span>
                        <div className="card-body">
                            <h5 className="skeleton" style={{width:90+'%',height:30,fontSize:16,borderRadius:8}}></h5>
                            <div className="row">
                                <div className="col-9">
                                    <div className="mt-1 d-flex justify-content-between align-items-center">
                                        <div className="small-ratings skeleton" style={{width:100+'%',height:20,borderRadius:8,marginBottom:5}}></div>
                                    </div>
                                    <p className="card-text skeleton" style={{width:70+'%',height:20,borderRadius:8}}></p>
                                </div>
                                <div className="col-3" style={{float:'right'}}>
                                    <div className="skeleton mt-2" style={{width:40,height:40,borderRadius:50+'%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )})}
            </div>
        </div>
    )
}