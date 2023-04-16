import { useContext } from "react";
import { HandleAllContext } from "../handleAllContext";

export default function SortProduct(){
    const context=useContext(HandleAllContext)

    return(
        <div className="container">
            <div className="row">
                <div className="col-12" style={{paddingTop:50+'px',paddingBottom:50+'px',marginBottom:20+'px',background:'white',borderRadius:10+'px'}}>
                    <div className="row row-cols-1  row-cols-lg-4">
                        <div className="col">
                            <select className="form-select" value={context.trademarkFilter} onChange={(e)=>context.handleChangeTrademarkFilter(e)}>
                                <option value="%20" defaultValue>Thương hiệu</option>
                                <option value="Adidas">Adidas</option>
                                <option value="Louis Vuitton">Louis Vuitton</option>
                                <option value="Nike">Nike</option>
                                <option value="Dior">Dior</option>
                                <option value="Gucci">Gucci</option>
                            </select>
                        </div>

                        <div className="col">
                            <select className="form-select" value={context.designFilter} onChange={(e)=>context.handleChangeDesignFilter(e)}>
                                <option value="%20" defaultValue>Kiểu dáng</option>
                                <option value="Giày thể thao">Giày thể thao</option>
                                <option value="Giày Sneaker">Giày Sneaker</option>
                                {/* <option value="Giày Boots">Giày Boots</option> */}
                                <option value="Giày lười">Giày lười</option>
                            </select>
                        </div>

                        <div className="col">
                            <select className="form-select" value={context.priceFilter} onChange={(e)=>context.handleChangePriceFilter(e)}>
                                <option value="%20" defaultValue>Giá tiền</option>
                                <option value="1">Giá từ thấp đến cao</option>
                                <option value="-1">Giá từ cao đến thấp</option>
                            </select>
                        </div>

                        <div className="col">
                            <div className="d-grid gap-2">
                                <button className="btn btn-secondary" onClick={()=>context.handleFilterProduct()}>
                                    Áp dụng
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}