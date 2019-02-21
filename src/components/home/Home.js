import React from 'react';

import Container from '../helperComponents/Container';
import Products from '../helperComponents/Products';
import Product from '../helperComponents/Product';

import ProductsService from '../../services/productsService';




const Home = ()=>{

    const products = ProductsService.getProducts();
    const productsDesktop = products.filter(product=>product.category==="desktop");
    const productsTablet = products.filter(product=>product.category==="tablet");
    

    const productsDesktopTable=[];
    const productsTabletTable=[];

    for(let i=0;i<4;i++){
        const rand = Math.floor(Math.random()*productsDesktop.length);
        productsDesktopTable.push(<Product   key={i} product={productsDesktop[rand]}/>)
    }
    for(let i=0;i<4;i++){
        const rand = Math.floor(Math.random()*productsTablet.length);
        productsTabletTable.push(<Product  key={i} product={productsTablet[rand]}/>)
    }

    
    return (
        <Container>
            <h1 className="header-big">Welcome to our store</h1>

            <h2 className="header-small">Desktops</h2>
            <Products>

                {productsDesktopTable}
                
            </Products>

            <h2 className="header-small">Tablets</h2>
            <Products>

                {productsTabletTable}
                
            </Products>
        </Container>
    )
}

export default Home;