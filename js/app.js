import Products from './Products.js' 

class App{
    constructor() {
        this.products = new Products(); 
        this.ready();
    }

    ready() {
        this.products.fetchProducts()   
    }

}

export default App