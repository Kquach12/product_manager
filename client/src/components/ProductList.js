import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';


const ProductList = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data));
    }, [])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId))
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, idx)=>{
                        return(
                            <tr>
                                <td><a key={idx} href={`/products/${product._id}`}>{product.title}</a></td>
                                
                                <td>
                                    <Link to={"/products/" + product._id + "/edit"}>Edit</Link> 
                                    |  
                                    <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)} />
                                </td>
                            </tr>
                            
                    )})}
                    
                </tbody>
            </table>
        </div>
    )
}
export default ProductList;