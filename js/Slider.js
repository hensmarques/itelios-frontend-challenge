class Slider {
    constructor(params) {
        this.params = { 
            el : typeof params == 'object' ? params.el : params,
            children : typeof params == 'object' ? params.children : el + ' > *',
        }

        this.data = {
            el : '',
            childre: [],
            childrenLength : 0,
            currentIndex : 0,
            itens_per_page : 3,
        }
    }

    init(){
        this.data.el = document.querySelector(this.params.el);
        this.data.children = document.querySelectorAll(this.params.el + ' ' + this.params.children)
        this.data.childrenLength = this.data.children.length;
        this.data.pagination = document.querySelector(`${this.params.el} + .product-slider--pagination`)

        this.renderPagination()
        this.setItensPerPage()   
        this.addResizeEvent()   
    }

    renderPagination(){
        const dotsQtd = Math.round(this.data.childrenLength / this.data.itens_per_page) + (this.data.childrenLength % this.data.itens_per_page);

        this.data.pagination.innerHTML = ''

        for(let i = 0; i < dotsQtd; i++){
            this.data.pagination.innerHTML += `<li class="${ i == this.data.currentIndex ? 'active' : '' }"></li>`
        }
        
        this.data.pagination_children = document.querySelectorAll(`${this.params.el} + .product-slider--pagination li`)
        this.addPaginationEvent();
    }

    addPaginationEvent(){
        this.data.pagination_children.forEach(li => {

            li.addEventListener("click", (event) => {
                const dots_nodes = Array.prototype.slice.call(this.data.pagination_children)
                this.data.currentIndex = dots_nodes.indexOf(event.target);
                this.setChildrenStyle();

                this.data.pagination_children.forEach(pag_child => pag_child.classList = '' )
                event.target.className = 'active'
            });
            
        })
    }

    addResizeEvent(){
        window.addEventListener("resize", (event) => {
            this.setItensPerPage()
        })
    }

    setChildrenStyle(){
        this.data.children.forEach(child => {
            child.style = `transform: translateX(${-100 * this.data.currentIndex * this.data.itens_per_page}%)`
        })
    }
    
    setItensPerPage(){
        if(window.innerWidth >= 1025){
            this.data.itens_per_page = 3;
        }

        if(window.innerWidth > 640 && window.innerWidth <= 1024 ){
            this.data.itens_per_page = 2;
        }

        if(window.innerWidth <= 640){
            this.data.itens_per_page = 1;
        }

        this.renderPagination();    
    }
}

export default Slider
