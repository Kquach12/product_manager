import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';


const ProductList = (props) => {
    const { removeFromDom, products} = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
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
                    {props.products.map((product, idx)=>{
                        return(
                            <tr>
                                <td><a key={idx} href={`/products/${product._id}`}>{product.title}</a></td>
                                
                                <td>
                                    <Link to={"/products/" + product._id + "/edit"}>Edit</Link> 
                                    |  
                                    <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                                </td>
                            </tr>
                            
                    )})}
                    
                </tbody>
            </table>
        </div>
    )
}
export default ProductList;