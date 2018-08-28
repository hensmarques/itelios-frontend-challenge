import http from './http.js'

class Products {
    constructor() {
        //Defining the app's model structure
        this.data = {
            item : {},
            recomendation : [],
            widget : { size : 0 }
        }
    }

    fetchProducts() {
        return new Promise((resolve, reject) => {
            http.get(`/products.json`, (response) => {
                if (response.length > 0) {
                    this.data = response[0].data
                    this.renderProducts()
                    
                    resolve()
                }
            })
        })
    }

    renderProducts() {
        document.getElementById('js--visited-product').innerHTML = '';
        document.getElementById('js--interested-products').innerHTML = '';

        this.renderProduct(this.data.item, 'js--visited-product')

        if (this.data.widget.size > 0) {
            this.data.recommendation.map((item) => this.renderProduct(item, 'js--interested-products'))
        }
    }

    renderProduct(product, containerSelector) {

        document.getElementById(containerSelector).innerHTML += `
        <div class="product-card--wrapper product-slider--item">
            <img src="${ product.imageName.replace('//www.itelios.com.br/arquivos/imagens', '/images')}" alt="${product.name}" class="product-card--image">
            <p class="product-card--name">${ this.substringText(product.name)}</p>
            <h3 class="product-card--price"><small>Por:</small> ${ product.price}</h3>
            <p class="product-card--payment-condition">${ this.getPaymentMethodHTML(product.productInfo.paymentConditions) }</p>

            <a href="#" class="button product-card--add-to-cart">Adicionar ao Carrinho <i class="material-icons">add_shopping_cart</i></a>
        </div>
        `
    }

    substringText(str, charLength) {
        let formattedStr = str.replace(/^(.{70}[^\s]*).*/, "$1");

        if (formattedStr.endsWith(',')) {
            formattedStr = formattedStr.substr(0, formattedStr.length - 1)
        }

        if (str.length > 90) {
            formattedStr += '...'
        }

        return formattedStr
    }

    getPaymentMethodHTML(str){
        const reg = /(?<=ou até)(.*)(?=sem juros)/
        const regMatch = str.match(reg)
        
        return regMatch ? str.replace(regMatch[0], `<strong>${regMatch[0]}</strong>`) : str
    }
}

export default Products
