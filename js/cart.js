let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cou = JSON.parse(localStorage.getItem('cou'));

if (cart.length < 1){
    document.getElementById("noCart").innerHTML = "<div>" +
        "                    <p>YOUR CART IS CURRENTLY EMPTY.</p>" +
        "                    <div style=\"margin-right: auto; margin-left: auto; text-align: center\">" +
        "                        <a href='shop.html'>" +
        "                            <button>RETURN TO SHOP</button>" +
        "                        </a>" +
        "                    </div>" +
        "                </div>"
}
else{
    document.getElementById("Cart").innerHTML = "<div style=\"text-align: center;\">\n" +
        "                    <table style=\"font-size: 20px; font-weight: bold; letter-spacing: 2px\">\n" +
        "                        <thead>\n" +
        "                        <td></td>\n" +
        "                        <td></td>\n" +
        "                        <td>PRODUCT</td>\n" +
        "                        <td>PRICE</td>\n" +
        "                        <td>QUANTITY</td>\n" +
        "                        <td>SUBTOTAL</td>\n" +
        "                        </thead>\n" +
        "                        <tbody id='pro'>\n" +

        "                        </tbody>\n" +
        "                    </table>\n" +
        "                </div>\n" +
        "                <div class=\"disCount\">\n" +
        "                    <input id='coupon' type=\"text\" style=\"width: 200px; border: none; border-bottom: 2px solid black\" placeholder=\"Coupon code\">\n" +
        "                    <button id='appCoupon'>APPLY COUPON</button>\n" +
        "                </div>\n" +
        "                <div style=\"margin-top: 60px\">\n" +
        "                    <p STYLE=\"font-size: 20px; letter-spacing: 10px; font-weight: bold\">CART TOTALS</p>\n" +
        "<div id='cartTotal'></div>" +
        "                    <div class=\"checkOut\" style=\"margin-top: 40px\">\n" +
        "                        <a href='checkout.html'>\n" +
        "                            <button>PROCESS TO CHECKOUT</button>\n" +
        "                        </a>\n" +
        "                    </div>\n" +
        "                </div>"
    for (let i = 0; i < cart.length; i++){
        document.getElementById("pro").innerHTML = "                        <tr>\n" +
            "                            <td style=\"width: 20px; margin-right: 20px\">\n" +
            "                                <button id='deleted' style=\"font-size: 50px; font-weight: lighter; color: black; background-color: white; border: none\">&times;</button>\n" +
            "                            </td>\n" +
            "                            <td style=\"width: 120px\">\n" +
            "                                <img id=\"proImg\" src=" + cart[i].img +
            " width=\"120\" height=\"120\">" +
            "                            </td>\n" +
            "                            <td style=\"font-size: 20px; font-weight: bold\">" + cart[i].name +
            "</td>\n" +
            "                            <td id=\"proPrice\" style=\"font-weight: lighter\">" + cart[i].price +
            "</td>" +
            "                            <td style=\"font-weight: lighter\">\n" +
            "                                <div class=\"quantity\" style=\"padding-left: 80px\">\n" +
            "                                    <input style=\"font-size: 30px\" id=\"qty\" type=\"number\" class=\"input-text qty text\" step=\"1\" min=\"1\" max=\"99\" name=\"quantity\" value='" + cart[i].qty +
            "' title=\"Qty\" />\n" +
            "                                </div>\n" +
            "                            </td>\n" +
            "                            <td id=\"proTotal\" style=\"font-weight: lighter\">" + subTotal(i) +
            "</td>\n" +
            "                        </tr>\n"

        document.getElementById('cartTotal').innerHTML = "                    <div style=\"margin-top: 60px\">\n" +
        "                        <div style=\"font-size: 15px; border-bottom: 1px solid black\">\n" +
        "                            <p style=\"font-weight: bold; letter-spacing: 3px; width: 300px; float: left\">SUBTOTAL</p>\n" +
        "                            <p class=\"money\">" + subTotal2() +
        "</p>\n" +
        "                        </div>\n" +
        "                        <div style=\"font-size: 15px; font-weight: bold; border-bottom: 2px solid black; margin-top: 20px\">\n" +
        "                            <p style=\"letter-spacing: 3px; width: 300px; float: left\">TOTAL</p>\n" +
        "                            <p class=\"money\">" + total() +
            "</p>\n" +
        "                        </div>\n" +
        "                    </div>\n"

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
                cart[i].qty = newVal;
                localStorage.setItem('cart', JSON.stringify(cart));
                location.reload();
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
                cart[i].qty = newVal;
                localStorage.setItem('cart', JSON.stringify(cart));
                location.reload();
            });
        });


        document.getElementById('deleted').onclick = function (){
            cart.splice(i,1);
            localStorage.setItem('cart', JSON.stringify(cart));
            location.reload();
        }

        document.getElementById('appCoupon').onclick = function (){
            var coupon = document.getElementById("coupon")
            var couponVal = coupon.value;
            if (checkCoupon(couponVal) === true){
                cou = 20;
                document.getElementById('coupon').value = "";
                localStorage.setItem('cou', JSON.stringify(cou));
                location.reload();
            }
            else{
                cou = 0;
                localStorage.setItem('cou', JSON.stringify(cou));
                document.getElementById('coupon').value = "";
                alert("Your coupon code does not exist!!!")
                location.reload();
            }
        }

        function total(){
            return subTotal2() - subTotal2()*cou/100;
        }
        function subTotal2(){
            let sum = 0;
            for (let i = 0; i < cart.length; i++){
                sum = sum + cart[i].price * cart[i].qty;
            }
            return sum;
        }
        function subTotal(i){
            return cart[i].price * cart[i].qty;
        }
    }
}

function checkCoupon(a){
    return a === "thanhdz";
}

