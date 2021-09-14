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
onLoadCartNumbers();