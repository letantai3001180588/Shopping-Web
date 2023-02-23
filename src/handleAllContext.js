/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { useState,createContext } from "react";

const HandleAllContext=createContext()

function HandleAllProvider({children}){
    const [listProduct,setListProduct]=useState([
        {
            id:1,
            nameShoe:'Giày Adidas Ultra Boost 21 White Stripes Black',
            price:159,
            img:'https://shopgiayreplica.com/wp-content/uploads/2022/09/adidas-ultra-boost-21-white-black.jpg'
        },
        {
            id:2,
            nameShoe:'Giày adidas Superstar Primeknit Bounce',
            price:400,
            img:'https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/12/giay-the-thao-nam-adidas-runfalcon-f36201-mau-xanh-dam-size-42-5-638847d4ae3d4-01122022132108.jpg'
        },
        {
            id:3,
            nameShoe:'Giày Sneakers Louis Vuitton LV Trainer 1A9G50 Màu Trắng',
            price:95,
            img:'https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/12/giay-sneakers-louis-vuitton-lv-trainer-1a9g50-mau-trang-639d243577262-17122022090645.jpg'
        },
        {
            id:4,
            nameShoe:'Giày Thể Thao Louis Vuitton 1AAHRJ Richelieu Ollie',
            price:90,
            img:'https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/12/giay-the-thao-louis-vuitton-1aahrj-richelieu-ollie-mau-xanh-denim-size-41-5-63a9255b1d257-26122022113851.png'
        },
        {
            id:5,
            nameShoe:'Giày Thể Thao Louis Vuitton LV Trainer Sneaker',
            price:70,
            img:'https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/07/giay-the-thao-louis-vuitton-lv-trainer-sneaker-mau-den-trang-62d77a9b0030c-20072022104635.jpg'
        },
        {
            id:6,
            nameShoe:'Giày Thể Thao Adidas Grand Court',
            price:230,
            img:'https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/02/giay-the-thao-adidas-grand-court-f36483-mau-trang-size-41-621302b5984ef-21022022101045.jpg'
        },
        {
            id:7,
            nameShoe:'Giày Lười Louis Vuitton LV Driver Mocassin',
            price:399,
            img:'https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/05/giay-luoi-louis-vuitton-lv-driver-mocassin-1aaf3e-mau-den-627b70e8474d9-11052022151640.jpg'
        },
        {
            id:8,
            nameShoe:'Giày Thể Thao Adidas Ultraboost',
            price:499,
            img:'https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/08/giay-the-thao-adidas-ultraboost-22-legacy-indigo-blue-rush-turbo-gx3061-mau-xanh-navy-size-41-62f99f0e7638d-15082022081910.jpg'
        },
        {
            id:9,
            nameShoe:'Giày Thể Thao Adidas 4D Fusio',
            price:65,
            img:'https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/07/giay-the-thao-adidas-4d-fusio-fy5929-mau-cam-size-42-62d7ac3bd57fe-20072022141819.jpg'
        },
        {
            id:10,
            nameShoe:'Giày Thể Thao Nike Lebron Lebron Soldier',
            price:567,
            img:'https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/06/giay-the-thao-nike-lebron-lebron-soldier-14-usa-ck6024-100-size-42-62a967faaa06f-15062022120250.jpg'
        },
        {
            id:11,
            nameShoe:'Giày Thể Thao Nike Jordan 1 Low Bred Toe',
            price:578,
            img:'https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/11/giay-the-thao-nike-jordan-1-low-bred-toe-553558-612-mau-do-den-size-40-638461110cbcd-28112022141945.jpg'
        },
        {
            id:12,
            nameShoe:'Giày Thể Thao Nike Air Jordan 1 Zoom CMFT Pink',
            price:455,
            img:'https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2022/10/giay-the-thao-nike-air-jordan-1-zoom-cmft-pink-oxford-phoi-mau-size-36-6340043ae7c1c-07102022174930.jpg'
        },
        // {
        //   nameShoe:'',
        //   price:'',
        //   img:''
        // }
    ]);

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
        if(cart.some(item=>item.data.id===data.id)){
            setCart(cart => 
            cart.map(item => 
                item.data.id===data.id
                ?{...item,amount:item.amount++}
                :item
            ))
            return;
        }
        setCart(a=>[...a,{data,amount:1}])
        setShow(true)
    }

    const handleChangeAmount=(id,value)=>{
        setCart(cart => 
            cart.map(item => 
            item.data.id===id
            ?{...item,amount:value}
            :item
            ))
    }

    const handleDeleteItem=(id)=>{
        const arr=cart.filter(item=>item.data.id!==id)
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

    const handleUpdate=(value,id)=>{
        // const arr=listProduct.filter(item=>item.id !==Number(idUpdate))
        // arr.push(itemUpdate)
        // setListProduct(arr)
        // setShow(cart.length===1?false:true)
        // setIdUpdate(null)
        console.log(itemUpdate)
        console.log(idUpdate)
        console.log(typeTable)
    }



    const value={
        listProduct,cart,show,itemDelete,itemUpdate,listUsers,bill,detailBill,idWatch,
        setIdWatch,setTypeTable,handleAddToCart,handleChangeAmount,handleDeleteItem,handleTotal,
        handleItemDelete,handleItemUpdate,handleChangeUpdate,handleUpdate,handleDelete
    }

    return (
        <HandleAllContext.Provider value={value}>
            {children}
        </HandleAllContext.Provider>
    )
}

export {HandleAllProvider,HandleAllContext}