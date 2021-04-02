import React from 'react'
import productsData from '../../data/products'
import './ProductsStyle.css'

const ProductsTable = () =>  {

    const products = productsData;

    const Table = products.map((product, i) => {
            return (
                <tr key={product.id} className={i % 2 === 0 ? 'Even' : 'Odd' }>
                    <td>{product.productName}</td>
                    <td>{product.price}</td>
                </tr>
            )
        }
    )

    return (
        <div  className="ProductsStyle">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                {Table}
            </table>
        </div>
    )
}

export default ProductsTable;
