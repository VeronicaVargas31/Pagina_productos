$(document).ready(function () {
    var products = [];
    var cartItems = [];
    var productsComponent =  document.getElementById('products');
    var cartComponent = document.getElementById('cart');

    $.get('https://fakestoreapi.com/products', 
        function (data) { 
        products = data;
        console.log(products);
        products.forEach(function (product) {
           



            var productBox = document.createElement('div');
            var productTitle  = document.createElement('h3');
            var productImage = document.createElement('img');
            var productPrice = document.createElement('h4');
            var addToCartBtn = document.createElement('button');
            mostrar(product, productImage, productTitle, productPrice,addToCartBtn)


        


            addToCartBtn.onclick = function(){
                cartComponent.innerHTML = '';
                cartItems.push(product);


                cartItems.forEach(function(cartItem){


                    var cartItemBox = document.createElement('div');
                    var cartItemTitle = document.createElement('h2');
                    var cartItemPrice = document.createElement('h2');

                agregarProducto(cartItem, cartItemTitle, cartItemPrice)
                   
                    cartItemBox.appendChild(cartItemTitle);
                    cartItemBox.appendChild(cartItemPrice);
                    cartComponent.appendChild(cartItemBox);

                });

            }
            productBox.appendChild(productTitle);
            productBox.appendChild(productImage);
            productBox.appendChild(productPrice);
            productBox.appendChild (addToCartBtn)
            productsComponent.appendChild(productBox);

            
        });

    });
})


function mostrar (product, productImage, productTitle, productPrice,addToCartBtn){
    productImage.src = product.image;
    productTitle.innerHTML = product.title;
    productPrice.innerHTML = product.price;
    addToCartBtn.innerHTML =  'Add to cart';
    
}

function agregarProducto (cartItem, cartItemTitle, cartItemPrice){
    cartItemTitle.innerHTML = cartItem.title;
    cartItemPrice.innerHTML = cartItem.price;
}