import React,{Component} from 'react';

import Container from '../helperComponents/Container';
import Products from '../helperComponents/Products';
import Product from '../helperComponents/Product';
import InputManufacture from '../helperComponents/InputManufacture';

import ProductsService from '../../services/productsService';
import styles from './Style.module.css'

class Catalog extends Component{

    constructor(props){
        super(props);
        this.state = {
            products:ProductsService.getProducts(),
            manufacture:['All'],
            value:'all',
            searchValue:'',
            checked:false            
        };
        this.displayProducts = this.displayProducts.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.clearValue = this.clearValue.bind(this)
    }


    componentDidMount(){
        this.setState((prevState)=>{
            return{
                manufacture:[prevState.manufacture,...ProductsService.getManufacture()]
            }  
        })
    }
    
    
    
    componentWillUnmount(){
        this.setState({
            products:'',
            manufacture:''
        })
    }

    

    displayProducts(){
        const filteredProductsByManufacture = this.state.products.filter(prod=>prod.manufacture.toLowerCase().includes(this.state.value));
        const filteredProductsByName = this.state.products.filter(prod=>prod.name.toLowerCase().includes(this.state.value));
        

        if(this.state.value ==='all'){
            return (this.state.products.map((prod,index)=>{
                return( <Product key={index} product={prod} />)
            }))
        }
        if(filteredProductsByManufacture.length<1 && filteredProductsByName.length>=1){
            return (filteredProductsByName.map((prod,index)=>{
                return( <Product key={index} product={prod} />)
            }))
        }else if(filteredProductsByManufacture.length>=1 && filteredProductsByName.length<1){
            return (filteredProductsByManufacture.map((prod,index)=>{
                return( <Product key={index} product={prod} />)
            }))
        }else if(filteredProductsByManufacture.length>=1 && filteredProductsByName.length>=1){
            return (filteredProductsByManufacture.map((prod,index)=>{
                return( <Product key={index} product={prod} />)
            }))
        }
        else{
            return (
                <p>No products in shop</p>
            )
        }
        
    
            
    }
    handleChange(e){

        const changeValue = e.target.value;
        this.setState({
                value:changeValue.toLowerCase(),
                checked:true
        })
        console.log(this.state.checked);
        console.log(this.state.value)
    }
    clearValue(){
        this.setState({
            value:'all',
            searchValue:''
        });       
    }

    
  
    render(){
        return(
            <Container>
                <h1 className="header-big">Catalog</h1>

                <div className={styles.catalog}>

                    <div className={styles.columnLeft}>
                        <div className={styles.filter}>
                            <div className={styles.filterHeader}>
                                <h4>Search</h4>
                                <button className={styles.clear} value="clear" onClick={this.clearValue}>Clear</button>
                            </div>
                            <div>
                                <input type="text" id="search" onChange={this.handleChange} placeholder="search..."  />
                            </div>
                            <h4>Manufacturer</h4>
                            <div>
                                {this.state.manufacture.map((m,index)=>{
                                        return(<InputManufacture key={index} onChange={this.handleChange} manufacture={m} checked={this.state.checked}/>) 
                                })}
                            </div>
                        </div>
                    </div>

                    <div className={styles.columnRight}>
                        <Products>
                            {this.displayProducts()}
                        </Products>
                    </div>
                </div>

            </Container>
        )
    }
}

export default Catalog;