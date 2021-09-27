$(document).on("change",".select-sort",function (e){
        var txt = $(this).val();
});




let carts= document.querySelectorAll('.btn-buy-now');

let products = [
    {
        name: 'Red tshirt',
        tag: 'redtshirt',
        price: 15,
        inCart: 0
    },
    {
        name: 'Red tshirt2',
        tag: 'redtshirt2',
        price: 15,
        inCart: 0
    },
    {
        name: 'Red tshirt3',
        tag: 'redtshirt3',
        price: 15,
        inCart: 0
    },

]


for (let i=0; i<carts.length;i++){
    carts[i].addEventListener('click', () =>{
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function  onLoadCartNumbers(){//ham khoi chay lay du lieu bo nho cuc bo cho cart item
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('#count-item span').textContent = productNumbers;

    }
}

function  cartNumbers(product){
    console.log("click is", product);
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers +1);//cong them gia tri neu tich them 1 lan
        document.querySelector('#count-item span').textContent = productNumbers +1;

    } else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('#count-item span').textContent = 1;
    }
}
function totalCost(product){
    // console.log("th prd is",product.price);
    let cartCost=localStorage.getItem('totalCost');
    console.log("price is",cartCost);
    console.log(typeof cartCost);

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);

    } else{
        localStorage.setItem("totalCost", product.price);

    }
}



function displayCart(){
    let cartItems = localStorage.getItem("cartNumbers");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector
    (".products-container");

    console.log(cartItem);
    if(cartItems && productContainer ){
        productContainer.innerHTML= '';
        Object.values(cartItems).map(item =>{
            productContainer.innerHTML += `
            <div class="product>
                <ion-icon name="close-circle-outline"></ion-icon>
                <img src="./images/${item.tag}.jpg">
                <span>${item.name}</span>
                </div>
            `
        });

    }
}
onLoadCartNumbers();
displayCart();