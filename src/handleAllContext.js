/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { useState,createContext, useEffect } from "react";
import axios from'axios';
// import { Navigate } from "react-router-dom";

const HandleAllContext=createContext()
function HandleAllProvider({children}){
    const [listProduct,setListProduct]=useState([]);

    useEffect(()=>{
        axios.get(`https://shoppingbe.onrender.com/product`)
        .then(res => {
            setListProduct(res.data)
        })
        .catch(error => console.log(error));
        const token=getCookie('token')

        axios.get(`https://shoppingbe.onrender.com/home`,
        { headers: {"Authorization" : token} }
        )
        .then(res=>{
            setAcount(res.data.acount[0].user)
            setShowAcount(true)
        })
        .catch(error => console.log(error))
    },[])

    const [listUsers,setListUsers]=useState([
        {
            id:1,
            nameUser:'Nguyễn Văn A',
            email:'VanA@gmail.com',
            address:'Ha Noi',
            phone:'078 910 1112',
        },
        {
            id:2,
            nameUser:'Tran Van B',
            email:'VanB@gmail.com',
            address:'Da Nang',
            phone:'078 910 1112',
        },
        {
            id:3,
            nameUser:'Le Thi C',
            email:'ThiC@gmail.com',
            address:'Ho chi minh',
            phone:'078 910 1112',
        }
    ]);

    const bill=[
        {
            id:1,
            name:'Nguyễn Văn A',
            email:'VanA@gmail.com',
            total:'550',
            createat:'2-2-2023',
            status:'Pendding'
        },
        {
            id:2,
            name:'Tran Van B',
            email:'VanA@gmail.com',
            total:'550',
            createat:'2-5-2023',
            status:'Completed'
        }
    ]

    const detailBill=[
        {
            id:1,
            name:'Giày Adidas Ultra Boost 21 White Stripes Black',
            quantity:5,
        },
        {
            id:1,
            name:'Giày adidas Superstar Primeknit Bounce',
            quantity:2,
        },
        {
            id:2,
            name:'Giày adidas Superstar Primeknit Bounce',
            quantity:2,
        }
    ]

    const [cart,setCart]=useState([])
    const [show,setShow]=useState(false);

    const [typeTable,setTypeTable]=useState('Product');

    const [itemDelete,setItemDelete]=useState([]);
    const [idDelete,setIdDelete]=useState([]);

    const [itemUpdate,setItemUpdate]=useState([]);
    const [idUpdate,setIdUpdate]=useState();

    const [idWatch,setIdWatch]=useState();



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

    // delete item in cart in product page
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
        console.log(itemDelete)
        console.log(idDelete)
        console.log(typeTable)
        
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
        console.log(itemUpdate)
        console.log(idUpdate)
        console.log(typeTable)
    }
    
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

    axios.defaults.withCredentials = true
    const setCookie=(cname, cvalue, exdays)=> {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
    const [user,setUser]=useState('')
    const [password,setPassword]=useState('')
    const [acount,setAcount]=useState([])
    const [showAcount,setShowAcount]=useState(false)

    const handleLogin=()=>{
        const URL_login=`https://shoppingbe.onrender.com/login`
        const acount={
            user:user,
            password:password
        }
        axios.post(URL_login,acount)
        .then(res => {
            if(res.data==='Failure')
            alert('dang nhap that bai')
            else{
                // console.log(res.data)
                setCookie('token',Object(res.data.accessToken),15)
                const token=getCookie('token')
                axios.get(`https://shoppingbe.onrender.com/home`,
                    { headers: {"Authorization" : token} }
                )
                .then(res=>{
                    setAcount(res.data.acount[0].user)
                    setShowAcount(true)
                    // navigate('/');
                })
                .catch(error => console.log(error))
            }
        })
        .catch(error => console.log(error));
    }


    const value={
        listProduct,cart,show,itemDelete,itemUpdate,listUsers,bill,detailBill,idWatch,acount,showAcount,
        setIdWatch,setTypeTable,setUser,setPassword,
        handleAddToCart,handleChangeAmount,handleDeleteItem,handleTotal,
        handleItemDelete,handleItemUpdate,handleChangeUpdate,handleUpdate,handleDelete,
        handleIncrease,handleDecrease,
        handleLogin
    }

    return (
        <HandleAllContext.Provider value={value}>
            {children}
        </HandleAllContext.Provider>
    )
}

export {HandleAllProvider,HandleAllContext}