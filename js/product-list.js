class ProductList {
    constructor (productsUrl, renderContainer, cart) {
        this.cart = cart;
        fetch(productsUrl)
            .then(result => result.json() )
            .then(products => {
                this.products = products;
                this.renderProducts(renderContainer, products);
            })
    }
    getProductById(id) {
        return this.products.find(el => el.id === id);
    }
    renderProducts(container, products) {
        let productListDomString = ''
        products.forEach(product => {
            productListDomString += 
                <div class="card product">
                    <img class="card-img-top" src="img/products/${product.image}" 
                        alt="${product.title}">
                    <div class="card-body">
                      <h4 class="card-title">${product.title}</h4>
                      <p class="card-text">${product.description}</p>
                      <button class="btn btn-info" data-toggle="modal"
                        data-target="#productInfoModal" data-id="${product.id}">Info
                      </button>
                      <button class="btn btn-primary buy" data-id="${product.id}">
                        ${product.price}UAH - Buy
                      </button>
                    </div>
                  </div>
                </div>`;
        });
        container.html(productListDomString);
    }
}