/* eslint-disable no-const-assign */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { useState,createContext, useEffect } from "react";
import axios from'axios';
import { useNavigate } from "react-router-dom";

const HandleAllContext=createContext()
function HandleAllProvider({children}){
    const navigate = useNavigate();

    axios.defaults.withCredentials = true
    const getCookie=(cname)=> {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
        }
        return "";
    }
    const setCookie=(cname, cvalue, exdays)=> {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
    const handleLoader=()=>{
        const token=getCookie('token')
        const role=getCookie('role')
        if(token&&role==='user'){
            axios.get(`https://shoppingbe.onrender.com/home`,
                { headers: {"Authorization" : token} }
            )
            .then(res=>{
                if(res.data.acount){
                    setAcount(res.data.acount[0].user)
                    setIdAcount(res.data.acount[0]._id)
                    setShowAcount(true)
                    setShowAdmin(false)
                }
            })
        }
        if(token&&role==='admin'){
            axios.get(`https://shoppingbe.onrender.com/admin`,
                { headers: {"Authorization" : token} }
            )
            .then(res=>{
                setAcount(res.data.acount[0].user)
                setIdAcount(res.data.acount[0]._id)

                setListProductDB(res.data.product)
                setListUsersDB(res.data.acountDB)
                setBillDB(res.data.bill)
                setDetailBillDB(res.data.detailBill)
                setShowAdmin(true)

                setShowAcount(true)
                navigate('/admin')
            })
            .catch(error => console.log(error))
        }
    }

    useEffect(()=>{
        axios.get(`https://shoppingbe.onrender.com/product`)
        .then(res => {
            setListProduct(res.data)
        })
        .catch(error => console.log(error));
        handleLoader();
    },[])

    const [listProduct,setListProduct]=useState([]);
    const [listUsersDB,setListUsersDB]=useState([]);
    const [listProductDB,setListProductDB]=useState([]);
    const [billDB,setBillDB]=useState([])
    const [detailBillDB,setDetailBillDB]=useState([])

    const [cart,setCart]=useState([])
    const [show,setShow]=useState(false);

    const [typeTable,setTypeTable]=useState('Product');

    const [itemDelete,setItemDelete]=useState([]);
    const [idDelete,setIdDelete]=useState([]);

    const [itemUpdate,setItemUpdate]=useState([]);
    const [idUpdate,setIdUpdate]=useState();
    const [idWatch,setIdWatch]=useState();

    const [user,setUser]=useState('')
    const [password,setPassword]=useState('')
    const [acount,setAcount]=useState([])
    const [showAdmin,setShowAdmin]=useState(false)
    const [idAcount,setIdAcount]=useState('')
    const [showAcount,setShowAcount]=useState(false)

    const [userRegister,setUserRegister]=useState('')
    const [passwordRegister,setPasswordRegister]=useState('')
    const [addressRegister,setAddressRegister]=useState('')
    const [phoneRegister,setPhoneRegister]=useState('')
    const [emailRegister,setEmailRegister]=useState('')

    const [idBill,setIdBill]=useState('')
    const [imgAddProduct,setImgAddProduct]=useState('')
    const [productAddProduct,setProductAddProduct]=useState('')
    const [priceAddProduct,setPriceAddProduct]=useState('')

    const handleAddToCart=(data)=>{
        if(cart.some(item=>item.data._id===data._id)){
            setCart(cart => 
                cart.map(item => 
                    item.data._id===data._id
                    ?{...item,amount:item.amount++}
                    :item
            )
        )
            return;
        }
        setCart(a=>[...a,{data,amount:1}])
        setShow(true)
    }

    const handleChangeAmount=(id,value)=>{
        setCart(cart => 
            cart.map(item => 
            item.data._id===id
            ?{...item,amount:value}
            :item
            ))
    }

    const handleDeleteItem=(id)=>{
        const arr=cart.filter(item=>item.data._id!==id)
        setCart(arr)        
        setShow(cart.length===1?false:true)

    }

    const handleTotal=()=>{
        return cart.reduce((sum,item)=>sum+item.data.price*item.amount,0)
    }

    const handleItemDelete=(data,i)=>{
        setItemDelete(data)
        setIdDelete(i)
    }
    
    const handleDelete=(data,i)=>{
        const token=getCookie('token')
        axios.delete('https://shoppingbe.onrender.com/'+typeTable+'/delete/'+idDelete,
        { headers: {"Authorization" : token} })
        .then((res)=>{
            handleLoader();
        })
        
    }

    const handleItemUpdate=(data,i)=>{
        setItemUpdate(data)
        setIdUpdate(i)
    }

    const handleChangeUpdate=(e,i)=>{
        let b=Object.assign({}, itemUpdate)
        const a=Object.keys(itemUpdate)[i]
        b[a]=e.target.value
        setItemUpdate(b)
    }

    const handleDecrease=(id,value)=>{
        setCart(cart => 
            cart.map(item => 
            item.data._id===id
            ?{...item,amount:(value-1>0?value-1:1)}
            :item
            ))
    }

    const handleIncrease=(id,value)=>{
        setCart(cart => 
            cart.map(item => 
            item.data._id===id
            ?{...item,amount:value+1}
            :item
            ))
    }

    const handleUpdate=(value,id)=>{
        const token=getCookie('token')
        axios.put('https://shoppingbe.onrender.com/'+typeTable+'/update/'+idUpdate,itemUpdate,
        { headers: {"Authorization" : token} })
        .then((res)=>{
            handleLoader();
        })
    }

    const handleLogin=()=>{
        const URL_login=`https://shoppingbe.onrender.com/login`
        const acount={
            user:user,
            password:password
        }
        if(user&&password){
            axios.post(URL_login,acount)
            .then(res => {
                if(res.data==='Failure')
                alert('dang nhap that bai')
                else{
                    setCookie('token',Object(res.data.accessToken),15)
                    setCookie('role',Object(res.data.role),15)
                    const token=getCookie('token')
                    if(res.data.role==='user'){
                        axios.get(`https://shoppingbe.onrender.com/home`,
                            { headers: {"Authorization" : token} }
                        )
                        .then(res=>{
                            setAcount(res.data.acount[0].user)
                            setIdAcount(res.data.acount[0]._id)
                            setShowAcount(true)
                            setShowAdmin(false)
                            navigate('/');
                        })
                        .catch(error => console.log(error))
                    }
                    else if(res.data.role==='admin'){
                        axios.get(`https://shoppingbe.onrender.com/admin`,
                            { headers: {"Authorization" : token} }
                        )
                        .then(res=>{
                            setAcount(res.data.acount[0].user)
                            setIdAcount(res.data.acount[0]._id)

                            setListProductDB(res.data.product)
                            setListUsersDB(res.data.acountDB)
                            setBillDB(res.data.bill)
                            setDetailBillDB(res.data.detailBill)
                            setShowAdmin(true)

                            setShowAcount(true)
                            navigate('/admin')
                        })
                        .catch(error => console.log(error))
                    }
                }
            })
            .catch(error => console.log(error));
        }
        else
            alert('Can nhap day du thong tin')
    }

    const handleRegister=()=>{
        if(userRegister && passwordRegister && addressRegister && phoneRegister && emailRegister){
            axios.post(`https://shoppingbe.onrender.com/register`,{
                user:userRegister,
                password:passwordRegister,
                address:addressRegister,
                phone:phoneRegister,
                email:emailRegister,
                role:'user'
            })
            .then(res=>{
            })
            .catch(error => console.log(error))
        }
        else{
            alert('Ban can nhap thong tin day du')
        }
        navigate('/login')
    }

    const handleLogout=()=>{
        setCookie('token','',0)
        setShowAdmin(false)
        navigate('/')
        window.location.reload()
    }

    const handleOrderProduct=()=>{
        const total=cart.reduce((sum,item)=>sum+item.data.price*item.amount,0)
        const token=getCookie('token')
        axios.post('https://shoppingbe.onrender.com/bill/create', 
        {id_user:idAcount,total:total},
        { headers: {"Authorization" : token} },
        )
        .then(res=>{
            setIdBill(res.data._id);
            const data=cart.map(item=>{
                return{quantity:Number(item.amount),id_product:item.data._id,id_bill:res.data._id}
            })
            axios.post('https://shoppingbe.onrender.com/detailBill/create',
                data,
                { headers: {"Authorization" : token} },
            ).then((respon)=>{
                navigate('/')
                setCart([])
                setShow(false)
            })
            .catch()
        })
        .catch()
        
        alert('Chuc mung ban da dat hang thanh cong, dich vu van chuyen hang den ban trong vong 24h')
    }

    const handleAddProduct= ()=>{
        
        console.log(imgAddProduct)
        console.log(priceAddProduct)
        console.log(productAddProduct)
        const token=getCookie('token')
        if(token&&imgAddProduct&&priceAddProduct&&productAddProduct){
            axios.post('https://shoppingbe.onrender.com/product/create',
                {
                    name:productAddProduct,
                    price:priceAddProduct,
                    img:imgAddProduct,
                },
                { headers: {"Authorization" : token} }
            )
            .then((res)=>{
                console.log(res.data)
            })
            .catch()
            
            handleLoader();
            setImgAddProduct('')
            setProductAddProduct('')
            setPriceAddProduct('')
        }
    }

    const handleCheckOut=()=>{
        if(!cart.length){
            alert('You can chose product')
            return
        }
        else if(!acount.length){
            alert('You can Login')
            return
        }
        else
            navigate('/checkout')
        
    }


    const value={
        listProduct,cart,show,itemDelete,itemUpdate,showAdmin,
        listUsersDB,billDB,detailBillDB,listProductDB,idWatch,
        acount,showAcount,typeTable,
        imgAddProduct,productAddProduct,priceAddProduct,
        setImgAddProduct,setProductAddProduct,setPriceAddProduct,
        navigate,
        setUserRegister,setPasswordRegister,setAddressRegister,setPhoneRegister,setEmailRegister,
        setIdWatch,setTypeTable,setUser,setPassword,
        handleAddToCart,handleChangeAmount,handleDeleteItem,handleTotal,
        handleItemDelete,handleItemUpdate,handleChangeUpdate,handleUpdate,handleDelete,
        handleIncrease,handleDecrease,
        handleLogin,handleRegister,handleLogout,
        handleOrderProduct,
        handleAddProduct,
        handleCheckOut
        
    }

    return (
        <HandleAllContext.Provider value={value}>
            {children}
        </HandleAllContext.Provider>
    )
}

export {HandleAllProvider,HandleAllContext}