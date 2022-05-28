import React , {useState , useEffect} from 'react';
import ShopProductCard from '../../../components/shopProductCard/ShopProductCard';

const ShopAllProdcuts = () => {

    const [allProducts, setAllProducts] = useState([]);


    useEffect(() => {
        fetch("https://azeno-3045b-default-rtdb.firebaseio.com/allProducts.json")
          .then((response) => response.json())
          .then((data) => setAllProducts(Object.entries(data)));
      }, []);

      

    return (
        <div className='d-flex justify-content-start align-items-center flex-wrap'>
            {allProducts.map(product => (
                <ShopProductCard {...product[1]} key={product[1].id}/>
            ))}
        </div>
     );
}
 
export default ShopAllProdcuts;