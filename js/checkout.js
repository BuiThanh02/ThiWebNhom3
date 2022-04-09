let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cou = JSON.parse(localStorage.getItem('cou'))
document.getElementById('product').innerHTML = "<p style=\"font-size: 20px; font-weight: bold; letter-spacing: 5px\">YOUR ORDER</p>\n" +
    "                <div style=\"font-size: 15px; letter-spacing: 2px; margin-top: 40px\">\n" +
    "                    <div style=\"width: 1300px; border-bottom: 2px solid black; font-weight: bold; margin-top: 20px\">\n" +
    "                        <p style=\"width: 650px; float: left\">PRODUCT</p>\n" +
    "                        <p style=\"\">SUBTOTAL</p>\n" +
    "                    </div>\n" + "<div id='checkOut'></div>"+
    "                    <div style=\"width: 1300px; border-bottom: 2px solid black; font-weight: bold; margin-top: 20px\">\n" +
    "                        <p style=\"width: 650px; float: left\">SUBTOTAL</p>\n" +
    "                        <p style=\"\" class=\"money\">" + subTotal() +
    "</p>\n" +
    "                    </div>\n" +
    "                    <div style=\"width: 1300px; border-bottom: 2px solid black; font-weight: bold; margin-top: 20px\">\n" +
    "                        <p style=\"width: 650px; float: left\">TOTAL</p>\n" +
    "                        <p style=\"\" class=\"money\">" + total() +
    "</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <p style=\"font-weight: lighter; letter-spacing: 1px; margin-top: 40px\">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>\n" +
    "                <div class=\"checkOut\" style=\"margin-top: 30px\">\n" +
    "                    <a href='index.html'>\n" +
    "                        <button onclick='placeOrder()'>PLACE ORDER</button>\n" +
    "                    </a>\n" +
    "                </div>"

for (let i = 0; i < cart.length; i++){
    document.getElementById('checkOut'). innerHTML = "                    <div style=\"width: 1300px; border-bottom: 1px solid black; margin-top: 20px\">\n" +
        "                        <p style=\"width: 650px; float: left\">" + cart[i].name + "<div id='multi'></div>" +
        "</p>\n" +
        "                        <p style=\"\" class=\"money\">" + cart[i].price +
        "</p>\n" +
        "                    </div>\n"

        if (cart[i].qty > 1){
            document.getElementById('multi').innerHTML = "X" + cart[i].qty;
        }
}

function subTotal(){
    let sum = 0;
    for (let i = 0; i < cart.length; i++){
        sum = sum + cart[i].price * cart[i].qty;
    }
    return sum;
}
function total(){
    return subTotal() - subTotal()*cou/100;
}
function placeOrder(){
    var fName = document.getElementById('firstName');
    var lName = document.getElementById('lastName');
    var country = document.getElementById('country');
    var street = document.getElementById('street');
    var city = document.getElementById('city');
    var postcode = document.getElementById('postcode');
    var phone = document.getElementById('phone');
    var email = document.getElementById('emails');

    var fVal = fName.value;
    var lVal = lName.value;
    var countryVal = country.value;
    var streetVal = street.value;
    var cityVal = city.value;
    var postcodeVal = postcode.value;
    var phoneVal = phone.value;
    var emailVal = email.value;

    if (fVal.length < 1){
        alert("Please enter your first name !!!");
    }else if (lVal.length < 1){
        alert("Please enter your last name !!!");
    }else if (countryVal.length < 1){
        alert("Please enter your country !!!");
    }else if (streetVal.length < 1){
        alert("Please enter your street !!!");
    }else if (cityVal.length < 1){
        alert("Please enter your sity !!!");
    }else if (postcodeVal.length < 1){
        alert("Please enter your postcode !!!");
    }else if (phoneVal.length < 1){
        alert("Please enter your phone !!!");
    }else if (emailVal.length < 1){
        alert("Please enter your email !!!");
    }

    localStorage.removeItem('cou');
    localStorage.removeItem('cart');
    alert('Thank you')

}