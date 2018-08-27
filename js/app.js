import Products from './Products.js' 
import Slider from './Slider.js'

class App{
    constructor() {
        this.products = new Products(); 
        this.slider = new Slider({ el: '.product-slider', children: '.product-slider--item' });

        this.ready();
    }

    ready() { 
        this.products.fetchProducts().then( () => {
            this.slider.init()
        })
    }

}

export default App