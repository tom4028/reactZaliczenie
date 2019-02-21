import React from 'react';

import styles from './Products.module.css';

const Products = (props)=>{
    return (
        <div className={styles.products}>{props.children}</div>
    )
}



export default Products;