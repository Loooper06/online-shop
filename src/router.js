import React from 'react';
import Home from './page/home/Home';
import Shop from './page/shop/Shop';
import Blog from './page/blog/Blog';
import MainProduct from './page/MainProduct/MainProduct';
import About from './page/about/About';
import Contact from './page/contact/Contact';
import Login from './page/login/Login';
import Register from './page/register/Register';
import ClothesCategory from './page/shop/clothesCategory/ClothesCategory';
import AccessoryCategory from './page/shop/accessoryCategory/AccessoryCategory';
import FootwearCategory from './page/shop/footwearCategory/FootwearCategory';
import KidsCategory from './page/shop/kidsCategory/KidsCategory';
import TechCategory from './page/shop/techCategory/TechCategory';
import FitnessCategory from './page/shop/fitnessCategory/FitnessCategory';
import ShopAllProducts from './page/shop/shopAllProducts/ShopAllProducts';
import ClothesMen from './page/shop/clothesCategory/clothesMen/ClothesMen'
import ClothesWomen from './page/shop/clothesCategory/clothesWomen/ClothesWomen'
import ClothesKid from './page/shop/clothesCategory/clothesKid/ClothesKid'
import ClothesJacket from './page/shop/clothesCategory/clothesJacket/ClothesJacket'
import AccessoryStaitionary from './page/shop/accessoryCategory/accessoryStaitionary/AccessoryStaitionary';
import AccessoryHome from './page/shop/accessoryCategory/accessoryHome/AccessoryHome';
import AccessoryBabyShoes from './page/shop/accessoryCategory/accessoryBabyShoes/AccessoryBabyShoes';
import AccessoryHatsAndCaps from './page/shop/accessoryCategory/accessoryHats&Caps/AccessoryHatsAndCaps';
import KidsBabySuits from './page/shop/kidsCategory/kidsBabySuits/KidsBabySuits';
import KidsJeans from './page/shop/kidsCategory/kidsJeans/KidsJeans';
import KidsScarves from './page/shop/kidsCategory/kidsScarves/KidsScarves';
import KidsSunglasses from './page/shop/kidsCategory/kidsSunglasses/KidsSunglasses';
import PassRecovery from './page/login/PassRecovery';
import MainBlog from './page/mainBlog/MainBlog'
import Cart from './page/cart/Cart';


let routes = [
    { path: '/', element: <Home /> },
    { path: '/shop/*', element: <Shop /> , children : [
        {path : 'allProducts' , element : <ShopAllProducts/>},
        {path : 'clothes/*' , element : <ClothesCategory/> , children : [
            {path : 'men' , element : <ClothesMen/>},
            {path : 'women' , element : <ClothesWomen/>},
            {path : 'kid' , element : <ClothesKid/>},
            {path : 'jacket' , element : <ClothesJacket/>},
        ]},
        {path : 'accessory/*' , element : <AccessoryCategory/> ,children : [
            {path : 'staitionary' , element : <AccessoryStaitionary/>},
            {path : 'homeAccessories' , element : <AccessoryHome/>},
            {path : 'babyShoes' , element : <AccessoryBabyShoes/>},
            {path : 'hatsAndCaps' , element : <AccessoryHatsAndCaps/>},
        ]},
        {path : 'kid/*' , element : <KidsCategory/> , children : [
            {path : 'babysuits' , element : <KidsBabySuits/>},
            {path : 'jeans' , element : <KidsJeans/>},
            {path : 'scarves' , element : <KidsScarves/>},
            {path : 'sunglasses' , element : <KidsSunglasses/>},
        ]},
        {path : 'footwear' , element : <FootwearCategory/>},
        {path : 'fitness' , element : <FitnessCategory/>},
        {path : 'tech' , element : <TechCategory/>},
    ]},
    { path: '/blog', element: <Blog /> },
    {path : '/cart' , element : <Cart/>},
    { path: '/aboutus', element: <About /> },
    { path: '/contactus', element: <Contact /> },
    { path: '/login/*', element: <Login /> , children : [
        {path : 'passwordRecovery' , element : <PassRecovery/>}
    ] },
    { path: '/register', element: <Register /> },
    {path : '/product/:productID' , element : <MainProduct/>},
    {path : '/Blog/:blogID' , element : <MainBlog/>},
    // { path: '/favorites', element: <Favorites /> },
];

export default routes