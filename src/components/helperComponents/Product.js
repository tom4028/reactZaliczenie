import React from 'react';
import styles from './Products.module.css';

const Product = (props)=>{
    return (
        <div className={styles.product}>
            <img src={props.product.image} alt={props.product.name} />
            <p className={styles.price}>${props.product.amount}</p>
            <h3>{props.product.name}</h3>
        
        </div>
    )
}



export default Product;


// {
//     "id": "5c5e94edd28c711337302817",
//     "name": "Dell Inspion 23",
//     "image": "https://i.imgur.com/qQx2zmv.jpg",
//     "manufacture": "Dell",
//     "amount": "1899.99",
//     "category": "desktop",
//     "featured": true
//   },