$(".wishlist").click(function () {
    $(this).toggleClass('add')

})

const contents = document.querySelector('.content');
const c1 = document.querySelector('.c1');
const c2 = document.querySelector('.c2');
const c3 = document.querySelector('.c3');
const c4 = document.querySelector('.c4');
const c5 = document.querySelector('.c5');
const product = document.querySelectorAll('.product');
let width = product[0].offsetWidth;

let start;
let change;
contents.addEventListener('dragstart', (e)=>{
    start = e.clientX;
})
contents.addEventListener('dragover', (e)=>{
    let touch = e.clientX;
    change = start - touch;
})
contents.addEventListener('dragend', slideShow);
function slideShow(){
    if (change > 0){
        contents.scrollLeft += width+25;
    }else{
        contents.scrollLeft -= width+25;
    }
}

c1.addEventListener('dragstart', (e)=>{
    start = e.clientX;
})
c1.addEventListener('dragover', (e)=>{
    let touch = e.clientX;
    change = start - touch;
})
c1.addEventListener('dragend', slideShow1);
function slideShow1(){
    if (change > 0){
        c1.scrollLeft += width+25;
    }else{
        c1.scrollLeft -= width+25;
    }
}

c2.addEventListener('dragstart', (e)=>{
    start = e.clientX;
})
c2.addEventListener('dragover', (e)=>{
    let touch = e.clientX;
    change = start - touch;
})
c2.addEventListener('dragend', slideShow2);
function slideShow2(){
    if (change > 0){
        c2.scrollLeft += width+25;
    }else{
        c2.scrollLeft -= width+25;
    }
}

c3.addEventListener('dragstart', (e)=>{
    start = e.clientX;
})
c3.addEventListener('dragover', (e)=>{
    let touch = e.clientX;
    change = start - touch;
})
c3.addEventListener('dragend', slideShow3);
function slideShow3(){
    if (change > 0){
        c3.scrollLeft += width+25;
    }else{
        c3.scrollLeft -= width+25;
    }
}

c4.addEventListener('dragstart', (e)=>{
    start = e.clientX;
})
c4.addEventListener('dragover', (e)=>{
    let touch = e.clientX;
    change = start - touch;
})
c4.addEventListener('dragend', slideShow4);
function slideShow4(){
    if (change > 0){
        c4.scrollLeft += width+25;
    }else{
        c4.scrollLeft -= width+25;
    }
}

c5.addEventListener('dragstart', (e)=>{
    start = e.clientX;
})
c5.addEventListener('dragover', (e)=>{
    let touch = e.clientX;
    change = start - touch;
})
c5.addEventListener('dragend', slideShow5);
function slideShow5(){
    if (change > 0){
        c5.scrollLeft += width+25;
    }else{
        c5.scrollLeft -= width+25;
    }
}

// let cart = JSON.parse(localStorage.getItem('cart')) || [];
// function addToCarts( i ){
//     var name = document.getElementsByClassName('proName')[i];
//     var price = document.getElementsByClassName('proPrice')[i];
//     var img = document.getElementsByClassName('proImg')[i];
//
//     var nameVal = name.innerText;
//     var priceVal = price.innerText;
//     var imgSrc = img.src;
//
//     const product = {
//         name: nameVal,
//         price: priceVal,
//         img: imgSrc,
//         qty: 1,
//     }
//     for (let i = 0; i < cart.length; i++){
//         if (cart[i].name !== product.name){
//             cart.push(product);
//             localStorage.setItem('cart', JSON.stringify(cart));
//             alert('Product has been added to your cart !!!')
//             return;
//         }
//     }
//     for (let i = 0; i < cart.length; i++){
//         if (cart[i].name === product.name){
//             cart.splice(i,1);
//             localStorage.setItem('cart', JSON.stringify(cart));
//             alert('Product has been removed from your cart !!!')
//             return;
//         }
//     }
//
// }
//
// let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
// function addToWishlists( i ){
//     var name = document.getElementsByClassName('proName')[i];
//     var price = document.getElementsByClassName('proPrice')[i];
//     var img = document.getElementsByClassName('proImg')[i];
//
//     var nameVal = name.innerText;
//     var priceVal = price.innerText;
//     var imgSrc = img.src;
//
//     const product = {
//         name: nameVal,
//         price: priceVal,
//         img: imgSrc,
//         qty: 1,
//     }
//     for (let i = 0; i < wishlist.length; i++){
//         if (wishlist[i].name !== wishlist.name){
//             wishlist.push(product);
//             localStorage.setItem('wishlist', JSON.stringify(wishlist));
//             alert('Product has been added to your wishlist !!!')
//             return;
//         }
//     }
//     for (let i = 0; i < wishlist.length; i++){
//         if (wishlist[i].name === product.name){
//             wishlist.splice(i,1);
//             localStorage.setItem('wishlist', JSON.stringify(wishlist));
//             alert('Product has been removed from your wishlist !!!')
//             return;
//         }
//     }
// }