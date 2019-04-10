class ProductList {
    constructor(productsUrl, renderContainer, cart) {
        this.cart = cart;
        fetch(productsUrl)
            .then(result => result.json())
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
                `<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                  <div class="card product">
                  <div class="card-img-top">
            <div id="carousel">
              <span id="buttonBackward"><button class="arrow">⇦</button></span>
              <span>
  <ul>
     <li><img src="img/${product.image}"  alt="${product.title}"></li>
    <li><img src="img/${product.image}"  alt="${product.title}"></li>
    <li><img src="img/${product.image}"  alt="${product.title}"></li>   
  </ul></span>
              <span id="buttonForward"><button class="arrow">⇨</button></span>
            </div>
          </div>
                    <div class="card-body">
                      <h4 class="card-title">${product.title}</h4>
                      <p class="card-text">${product.description}</p>
                    </div>
                  </div>
                </div>`;
        });
        container.html(productListDomString);
    }
}

var buttonBackward = document.getElementById('buttonBackward');
var buttonForward = document.getElementById('buttonForward');

buttonForward.onclick = doStep;
buttonBackward.onclick = doStep;


function doStep() {
    buttonForward.onclick = null;
    buttonBackward.onclick = null;

    var carousel = document.getElementById('carousel');
    var list = carousel.getElementsByTagName('ul')[0];
    var step = parseInt(getComputedStyle(list.firstElementChild).width);
    var listItems = list.getElementsByTagName('li');
    var maxPosition = (listItems.length - 1) * step;

    for (var i = 0; i < listItems.length; i++) {
        var itemLeft = parseInt(getComputedStyle(listItems[i]).left);
        var nextStep = (this.id == 'buttonForward') ? itemLeft - step : itemLeft + step;

        if (nextStep > 0) nextStep = 0;
        if (nextStep < (0 - maxPosition)) nextStep = (0 - maxPosition);

        listItems[i].style.left = nextStep + 'px';
    }

    setTimeout(function() {
        buttonForward.onclick = doStep;
        buttonBackward.onclick = doStep;
    }, 200);

}
