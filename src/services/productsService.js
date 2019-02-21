import products from "./products";

import _ from 'lodash'



class ProductsService {
  static getProducts() {
    return products;
  }
  static getManufacture(){
    return _.uniq(products.map(prod=>prod.manufacture))
     
  }

}

export default ProductsService;