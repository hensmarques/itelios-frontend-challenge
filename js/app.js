import http from './http.js'

class App{
    constructor() {
        //Defining the app's model structure
        this.data = {
            item : {},
            recomendation : [],
            widget : { size : 0 }
        }

        this.ready();
    }

    ready() {
        this.fetchProducts()   
    }

    fetchProducts() {
        return http.get(`/products.json`, (response) => {
            if (response.length > 0) {
                this.data = response[0].data
            }
        });
    }
}

export default App