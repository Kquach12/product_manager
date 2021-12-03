import React from 'react'
const ProductList = (props) => {
    return (
        <div>
            {props.products.map((product, idx)=>{
                return <p>
                    <a key={idx} href={`/products/${product._id}`}>{product.title}: ${product.price}</a>
                    </p> 
            })}
        </div>
    )
}
export default ProductList;