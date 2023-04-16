import { useState,createContext, useEffect, useRef } from "react";
import axios from'axios';
import { useNavigate } from "react-router-dom";
import  {io}  from "socket.io-client";
import { toast, ToastContainer, useToast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const HandleAllContext=createContext()
function HandleAllProvider({children}){
    const navigate = useNavigate();

    const [page,setPage]=useState(1);
    const [searchProduct,setSearchProduct]=useState('');
    
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
    const [emailAcount,setEmailAcount]=useState('')
    const [phoneAcount,setPhoneAcount]=useState('')
    const [addressAcount,setAddressAcount]=useState('')


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
    const [trademarkAddProduct,setTrademarkAddProduct]=useState('')
    
    const [avatarUser,setAvatarUser]=useState('')
    const [avatarUsersInAdminPage,setAvatarUsersInAdminPage]=useState('')
    const [acountProfile,setAcountProfile]=useState({username:'',email:'',phone:'',address:''})
    const [showInputProfile,setShowInputProfile]=useState(true)
    const [avatarProfile,setAvatarProfile]=useState('')


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
                    setAcountProfile({username:res.data.acount[0].username,email:res.data.acount[0].email,phone:res.data.acount[0].phone,address:res.data.acount[0].address})
                    setAcount(res.data.acount[0].username)
                    setIdAcount(res.data.acount[0]._id)
                    setEmailAcount(res.data.acount[0].email)
                    setPhoneAcount(res.data.acount[0].phone)
                    setAddressAcount(res.data.acount[0].address)

                    setAvatarUser(`https://shoppingbe.onrender.com/img/`+res.data.acount[0].avatar)
                    setAvatarUsersInAdminPage(res.data.acount[0].avatar)
                    setIdAvatarUsersInAdminPage(res.data.acount[0]._id)

                    console.log(res.data)
                    

                    setShowAcount(true)
                    setShowAdmin(false)

                    handleGetBillOrder(res.data.acount[0]._id)
                    handleGetProductOrder()
                }
            })
        }
        if(token&&role==='admin'){
            axios.get(`https://shoppingbe.onrender.com/admin`,
                { headers: {"Authorization" : token} }
            )
            .then(res=>{
                setAcountProfile({username:res.data.acount[0].username,email:res.data.acount[0].email,phone:res.data.acount[0].phone,address:res.data.acount[0].address})
                
                setAcount(res.data.acount[0].username)
                setIdAcount(res.data.acount[0]._id)
                setEmailAcount(res.data.acount[0].email)
                setPhoneAcount(res.data.acount[0].phone)
                setAddressAcount(res.data.acount[0].address)

                setAvatarUser(`https://shoppingbe.onrender.com/img/`+res.data.acount[0].avatar)
                setAvatarUsersInAdminPage(res.data.acount[0].avatar)
                setIdAvatarUsersInAdminPage(res.data.acount[0]._id)



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

    const [billOrder,setBillOrder]=useState([])
    const [productOrder,setProductOrder]=useState([])

    const handleGetBillOrder=(id)=>{
        axios.get(`https://shoppingbe.onrender.com/bill/`+id)
        .then(res=>{
            setBillOrder(res.data)
        })
    }

    const handleGetProductOrder=()=>{
        axios.get(`https://shoppingbe.onrender.com/detailBill/`)
        .then(res=>{
            setProductOrder(res.data)
        })
    }
        
    const handleGetProduct=()=>{
        axios.get(`https://shoppingbe.onrender.com/product/`+page)
        .then(res => {
            setListProduct(res.data)
        })
        .catch(error => console.log(error));
    }


    
    useEffect(()=>{
        handleGetProduct();
        handleLoader();
        window.addEventListener('online',()=>{
            toast.success("Kết nối Internet thành công !", {
                position: toast.POSITION.BOTTOM_LEFT
            });
        })
    
        
        window.addEventListener('offline',()=>{
            toast.error("Không có kết nối Internet !", {
                position: toast.POSITION.BOTTOM_LEFT
            });
        })
        // socketRef.current = io.connect(host)
        // socketRef.current.on('getId', data => {
        //     setIdAcountSocket(data)
        // })

        // socketRef.current.on('sendDataServer', dataGot => {
        //     setChat(oldMsgs => [...oldMsgs, dataGot.data])
        //     // scrollToBottom()
        // })

        // return () => {
        //     socketRef.current.disconnect();
        // };
    },[page])
    



    const handleSearchProductKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearchProduct();
        }
    };

    const handleSearchProduct=()=>{
        axios.get('https://shoppingbe.onrender.com/search/'+searchProduct)
        .then((res)=>{
            setListProduct(res.data)
            setSearchProduct('')
        })
        .catch(error => console.log(error));
    }

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
        toast.success("Thêm vào giỏ hàng thành công !", {
            position: toast.POSITION.TOP_RIGHT
        });
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
        return cart.reduce((sum,item)=>sum+item.data.trademark*item.amount,0)
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

    const [idAvatarUsersInAdminPage,setIdAvatarUsersInAdminPage]=useState('')
    const handleAvatarUpdate=(data,i)=>{
        setAvatarUsersInAdminPage(data.avatar)
        setIdAvatarUsersInAdminPage(i)
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
                            setAcountProfile({username:res.data.acount[0].username,email:res.data.acount[0].email,phone:res.data.acount[0].phone,address:res.data.acount[0].address})
                            setAcount(res.data.acount[0].username)
                            setIdAcount(res.data.acount[0]._id)
                            setEmailAcount(res.data.acount[0].email)
                            setPhoneAcount(res.data.acount[0].phone)
                            setAddressAcount(res.data.acount[0].address)

                            setAvatarUser(`https://shoppingbe.onrender.com/img/`+res.data.acount[0].avatar)
                            setAvatarUsersInAdminPage(res.data.acount[0].avatar)
                            setIdAvatarUsersInAdminPage(res.data.acount[0]._id)

                            setShowAcount(true)
                            setShowAdmin(false)
                            
                            handleGetBillOrder(res.data.acount[0]._id)
                            handleGetProductOrder()
                            toast.success("Đăng nhập thành công!", {
                                position: toast.POSITION.TOP_RIGHT
                            });

                            navigate('/');
                        })
                        .catch(error => console.log(error))
                    }
                    else if(res.data.role==='admin'){
                        axios.get(`https://shoppingbe.onrender.com/admin`,
                            { headers: {"Authorization" : token} }
                        )
                        .then(res=>{
                            setAcountProfile({username:res.data.acount[0].username,email:res.data.acount[0].email,phone:res.data.acount[0].phone,address:res.data.acount[0].address})
                            setAcount(res.data.acount[0].username)
                            setIdAcount(res.data.acount[0]._id)
                            setEmailAcount(res.data.acount[0].email)
                            setPhoneAcount(res.data.acount[0].phone)
                            setAddressAcount(res.data.acount[0].address)
                            
                            setAvatarUser(`https://shoppingbe.onrender.com/img/`+res.data.acount[0].avatar)
                            setAvatarUsersInAdminPage(res.data.acount[0].avatar)
                            setIdAvatarUsersInAdminPage(res.data.acount[0]._id)
                            

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
            alert('Can nhap day du thong tin');
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
        const bill={id_user:idAcount,total:total,statusOrder:0};
        const name=cart.map(({data})=>data.name);
        const img=cart.map(({data})=>data.img);
        const amount=cart.map(({amount})=>amount);

        const data={
            bill:bill,
            email: emailAcount,
            detailBill:[img,name,amount]
        }
        
        console.log(emailAcount)
        axios.post('https://shoppingbe.onrender.com/bill/create', 
            data,
            { headers: {"Authorization" : token} },
        )
        .then(res=>{
            console.log(res.data)
            const dataDetailBill=cart.map(item=>{
                return{quantity:Number(item.amount),id_product:item.data._id,id_bill:res.data._id}
            })
            setIdBill(res.data._id);
            if(res.data){
                axios.post('https://shoppingbe.onrender.com/detailBill/create',
                    dataDetailBill,
                    { headers: {"Authorization" : token} },
                ).then((respon)=>{
                    navigate('/')
                    setCart([])
                    setShow(false)
                })
                .catch()
            }
        })
        
        toast.success("Chúc mừng bạn đẫ đặt hàng thành công, dịch vụ vận sẽ chuyển hàng đến bạn trong vòng 24h !", {
            position: toast.POSITION.TOP_RIGHT
        });
        return
    }

    const handleAddProduct= ()=>{
        
        // console.log(imgAddProduct)
        // console.log(priceAddProduct)
        // console.log(productAddProduct)
        const token=getCookie('token')
        if(token&&imgAddProduct&&priceAddProduct&&productAddProduct&&trademarkAddProduct){
            axios.post('https://shoppingbe.onrender.com/product/create',
                {
                    name:productAddProduct,
                    price:priceAddProduct,
                    img:imgAddProduct,
                    trademark:trademarkAddProduct,
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
            setTrademarkAddProduct('')
        }
    }

    const handleCheckOut=()=>{
        
        if(!acount.length){
            toast.warning("Bạn cần đăng nhập !", {
                position: toast.POSITION.TOP_RIGHT
            });
            return
        }
        else if(acount.length){
            if(!cart.length){
                toast.warn("Bạn cần chọn sản phẩm !", {
                    position: toast.POSITION.TOP_RIGHT
                });
                return
            }
            else
                navigate('/checkout')
        }
        
    }


    const handleTransport=(id)=>{
        const token=getCookie('token')
        // console.log(id)
        axios.put('https://shoppingbe.onrender.com/bill/transport/'+id,{},
        { headers: {"Authorization" : token} })
        .then((res)=>{
            console.log(res)
            handleLoader();
        })
    }

    const handleReceiveOrder=(id)=>{
        const token=getCookie('token')
        axios.put('https://shoppingbe.onrender.com/acount/receive/'+id,{},
            { headers: {"Authorization" : token} }
        )
        .then((res)=>{
            console.log(res.data)
            handleGetBillOrder(idAcount)
            handleGetProductOrder()
        })

        // console.log(idAcount)
    }

    const [trademarkFilter,setTrademarkFilter]=useState('%20')
    const [designFilter,setDesignFilter]=useState('%20')
    const [priceFilter,setPriceFilter]=useState('%20')

    const handleChangeTrademarkFilter = (e) => {
        setTrademarkFilter(e.target.value);
    }

    const handleChangeDesignFilter = (e) => {
        setDesignFilter(e.target.value);
    }

    const handleChangePriceFilter = (e) => {
        setPriceFilter(e.target.value);
    }

    const handleFilterProduct=()=>{
        axios.get('https://shoppingbe.onrender.com/filterProduct/'+trademarkFilter+'/'+designFilter+'/'+priceFilter)
        .then((res)=>{
            console.log(res.data)
            setListProduct(res.data)
            if(res.data !== []){
                toast.success("Lọc sản phẩm thành công!", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
            if(res.data === []){
                toast.error("Không có sản phẩm phù hợp!", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        })
    }

    const [detailProduct,setDetailProduct]=useState('')
    const handleOnchangeDetailProduct=(value)=>{
        setDetailProduct(value)
    }

    const [newAvatarUsersInAdminPage,setNewAvatarUsersInAdminPage]=useState('')
    const [nameAvatarUsersInAdminPage,setNameAvatarUsersInAdminPage]=useState('')
    const handleOnchangeAvatarUser=(e)=>{
        setNewAvatarUsersInAdminPage(URL.createObjectURL(e.target.files[0]))
        setNameAvatarUsersInAdminPage(e.target.files[0])
    }
    const handleUpdateAvatarUser=(event)=>{
        event.preventDefault()
        const myfile = new FormData();
        const token=getCookie('token')
        myfile.append("myfile", nameAvatarUsersInAdminPage);
        
        if(avatarUsersInAdminPage){
            axios.post('https://shoppingbe.onrender.com/img/update',myfile,{})
            .then((res)=>{
                console.log(res.data)
                axios.get('https://shoppingbe.onrender.com/delete/img/'+avatarUsersInAdminPage)
                .then(res=>{
                    console.log('delete img'+res.data)
                    axios.put('https://shoppingbe.onrender.com/acount/update/'+idAvatarUsersInAdminPage,
                        {avatar:nameAvatarUsersInAdminPage.name},
                        { headers: {"Authorization" : token} })
                    .then(res=>{
                        console.log('change data success'+ res.data)
                        setNewAvatarUsersInAdminPage('')
                        handleLoader();
                    })
                })
            })
        }
        
    }


    const handleInputChangeUpdate = (e) => {
        const { name, value } = e.target;
        setAcountProfile({
            ...acountProfile,
            [name]: value,
        });
    };

    const handleUpdateProfile=()=>{
        const token=getCookie('token')
        if(acountProfile&&idAvatarUsersInAdminPage){
            axios.put('https://shoppingbe.onrender.com/acount/update/'+idAvatarUsersInAdminPage,
            acountProfile,
            { headers: {"Authorization" : token} })
            .then(res=>{
                setShowInputProfile(!showInputProfile)
                handleLoader();
            })
        }
    }

    // const host = "http://localhost:4000";
    // const [showMessage,setShowMessage]=useState(false);
    // const [idAcountSocket, setIdAcountSocket] = useState();

    // const socketRef = useRef();

    // const [message,setMessage] = useState('')
    // const [chat,setChat]=useState([]);

    // const handleSendKeyDown = (event) => {
    //     if (event.key === 'Enter') {
    //         handleSendMessage();
    //     }
    // };

    // const handleSendMessage=()=>{
    //     const data={
    //         id_user:'cfsvfs',
    //         role:'user',
    //         content:message,
    //         time:'10:20'
    //     }
    //     if(message !== null){
    //         socketRef.current.emit('sendDataClient',data)
    //         setMessage('')
    //     }
    //     // document.querySelector('.end').scrollIntoView({ behavior: "smooth", block: "center", inline: "end" });
    // }

    // const [acountChat,setAcountChat]=useState()



    const value={
        handleLoader,navigate,handleGetProduct,avatarUser,
        listProduct,cart,show,itemDelete,itemUpdate,showAdmin,
        listUsersDB,billDB,detailBillDB,listProductDB,idWatch,
        acount,emailAcount,phoneAcount,showAcount,addressAcount,
        
        typeTable,
        imgAddProduct,productAddProduct,priceAddProduct,trademarkAddProduct,
        
        setImgAddProduct,setProductAddProduct,setPriceAddProduct,setTrademarkAddProduct,
        setUserRegister,setPasswordRegister,setAddressRegister,setPhoneRegister,setEmailRegister,
        setIdWatch,setTypeTable,setUser,setPassword,
        
        handleAddToCart,handleChangeAmount,handleDeleteItem,handleTotal,
        handleItemDelete,handleItemUpdate,handleChangeUpdate,handleUpdate,handleDelete,
        handleIncrease,handleDecrease,
        
        handleLogin,handleRegister,handleLogout,
        
        handleOrderProduct,handleAddProduct,
        handleCheckOut,

        // showMessage,setShowMessage,chat,setChat,message,setMessage,
        // handleSendMessage,handleSendKeyDown,

        // acountChat,setAcountChat,
        page,setPage,

        searchProduct,setSearchProduct,handleSearchProduct,handleSearchProductKeyDown,

        handleTransport,billOrder,productOrder,handleGetBillOrder,handleGetProductOrder,
        handleReceiveOrder,

        handleChangeTrademarkFilter,handleChangePriceFilter,handleChangeDesignFilter,handleFilterProduct,
        trademarkFilter,designFilter,priceFilter,

        handleOnchangeDetailProduct,detailProduct,

        handleAvatarUpdate, avatarUsersInAdminPage,handleOnchangeAvatarUser,newAvatarUsersInAdminPage,setNewAvatarUsersInAdminPage,
        handleUpdateAvatarUser,

        handleUpdateProfile,acountProfile,setAcountProfile,showInputProfile,setShowInputProfile,avatarProfile,setAvatarProfile,handleInputChangeUpdate,

    }

    return (
        <HandleAllContext.Provider value={value}>
            {children}
        </HandleAllContext.Provider>
    )
}

export {HandleAllProvider,HandleAllContext}