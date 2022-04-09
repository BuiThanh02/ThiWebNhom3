$('.zoom_img').on( "mousemove", function( event ) {
    var zoomHeight = $('.zoomed_img').outerHeight() - $(this).outerHeight();
    var zoomWidth = $('.zoomed_img').outerWidth() - $(this).outerWidth();

    var top = (($(this).offset().top - event.pageY) * (zoomHeight / $(this).outerHeight())) - $(this).outerHeight();
    var left = (($(this).offset().left - event.pageX) * parseInt(zoomWidth / $(this).outerWidth())) - $(this).outerWidth();

    var translate = left + "px," + top + "px";

    $('.zoomed_img').css({
        "-webkit-transform": "translate(" + translate + ")",
        "-ms-transform": "translate(" + translate + ")",
        "transform": "translate(" + translate + ")"
    });
});

jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">_</div></div>').insertAfter('.quantity input');
jQuery('.quantity').each(function() {
    $(this).find('input').attr("max", "500");

    var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

    btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

});

var date;
var rate = 0;

function rated1(){
    var rate1 = document.getElementById("rate1");
    return rate = rate1.value;
}
function rated2(){
    var rate2 = document.getElementById("rate2");
    return rate = rate2.value;
}
function rated3(){
    var rate3 = document.getElementById("rate3");
    return rate = rate3.value;
}
function rated4(){
    var rate4 = document.getElementById("rate4");
    return rate = rate4.value;
}
function rated5(){
    var rate5 = document.getElementById("rate5");
    return rate = rate5.value;
}
function rated6(){
    var rate6 = document.getElementById("rate6");
    return rate = rate6.value;
}
function rated7(){
    var rate7 = document.getElementById("rate7");
    return rate = rate7.value;
}
function rated8(){
    var rate8 = document.getElementById("rate8");
    return rate = rate8.value;
}
function rated9(){
    var rate9 = document.getElementById("rate9");
    return rate = rate9.value;
}
function rated10(){
    var rate10 = document.getElementById("rate10");
    return rate = rate10.value;
}

function userComment() {
    var textd = document.getElementById("userComment");
    var named = document.getElementById("userName");
    var email = document.getElementById("userEmail");
    var textdVal = textd.value;
    var namedVal = named.value;
    var emailVal = email.value;

    if (namedVal.length < 1) {
        alert('Please enter you name.');
    }
    else if (emailVal.length < 1){
        alert('Please enter you email.');
    }
    else if (rate < 0.5 ){
        alert('Please enter you rate.');
    }
    else if (textdVal.length < 1){
        alert('Please enter you reviews.');
    }
    else {
        var namedParagraph = document.createElement('p');
        var textdParagraph = document.createElement('p');

        todayDate(); //get todays date
        namedParagraph.textContent = namedVal + (' - ') + rate + '-star' + (' - ') + date;
        textdParagraph.textContent = textdVal;
        namedParagraph.className = 'commentName';
        textdParagraph.className = 'commentText';

        document.getElementById("noReview").innerHTML= "";

        document.getElementById("comments").appendChild(namedParagraph);
        document.getElementById("comments").appendChild(textdParagraph);

        document.getElementById("userName").value= namedVal;
        document.getElementById("userEmail").value= emailVal;
        document.getElementById("userComment").value= "";
    }
};
function todayDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd
    }

    if(mm<10) {
        mm='0'+mm
    }

    today = mm+'/'+dd+'/'+yyyy;

    date = today;
};

$('.rate').on('change mouseover mouseout', () => {
    const stars = $('.rate:checked~.rate, .rate:hover~.rate').length + ($('.rate:checked').length || $('.rate:hover').length);

})

let cart = [];
function addToCart(){
    var proName = document.getElementById("proName");
    var proPrice = document.getElementById("proPrice");
    var proImg = document.getElementById("proImg");
    var proQty = document.getElementById("qty");

    var nameVal = proName.innerText;
    var priceVal = proPrice.innerText;
    var imgSrc = proImg.src;
    var qtyVal = proQty.value;

    const product = {
        name: nameVal,
        price: priceVal,
        img: imgSrc,
        qty: qtyVal,
    };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById("link").innerHTML = "<div style='width: 1200px; border: 2px solid black; height:104px'>" +
        "<p>" + product.name + " has been added to your cart.</p>" +
        "<a href='Cart.html'>" +
        "<button type='button'>VIEW CART</button>" +
        "</a>" + "</div>";
}

let wishlist = [];
function addToWishlist(){
    var proName = document.getElementById("proName");
    var proPrice = document.getElementById("proPrice");
    var proImg = document.getElementById("proImg");

    var nameVal = proName.innerText;
    var priceVal = proPrice.innerText;
    var imgSrc = proImg.src;

    const product = {
        name: nameVal,
        price: priceVal,
        img: imgSrc,
    };
        if (wishlist.name !== product.name){
            wishlist.push(product);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            document.getElementById("link").innerHTML = "<div style='width: 1200px; border: 2px solid black; height:104px'>" +
                "<p>" + product.name + " has been added to your whistlist.</p>" +
                "<a href='Wishlist.html'>" +
                "<button type='button'>VIEW WISHLIST</button>" +
                "</a>" + "</div>";
        }
}
$(".wishlist").click(function () {
    $(this).toggleClass('add')

})
const contents = document.querySelector('.contents');
const product = document.querySelectorAll('.product');
let width = product[0].offsetWidth;

let start;
let change;
contents.addEventListener('dragstart', (e)=>{
    start = e.clientX;
})
contents.addEventListener('dragover', (e)=>{
    e.preventDefault();
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
//
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