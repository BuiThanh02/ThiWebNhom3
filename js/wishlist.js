let wish = JSON.parse(localStorage.getItem('wishlist')) || [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];

if (wish.length < 1){
    document.getElementById("noWishlist").innerHTML = "<div style='border: 2px solid black; height:104px'>" +
        "                    <p>There are no product in wishlist yet. Let do some shopping.</p>" +
        "                    <a href='Home.html'><button>Shop</button></a>" +
        "                </div>"
} else {
    document.getElementById("wishList").innerHTML = "<table style=\"margin-top: 50px\">" +
        "                    <thead style=\"font-size: 20px; font-weight: bold; letter-spacing: 2px\">" +
        "                        <td></td>" +
        "                        <td></td>" +
        "                        <td>PRODUCT NAME</td>" +
        "                        <td>UNIT PRICE</td>" +
        "                        <td>STOCK STATUS</td>" +
        "                        <td></td>" +
        "                    </thead>" +
        "                    <tbody id='pro'>" +
        "                    </tbody>" +
        "                </table>"

    for (let i = 0; i < wish.length; i++){
        document.getElementById('pro').innerHTML = "                        <tr>" +
            "                            <td style=\"width: 20px\">" +
            "                                <button id='deleted' style=\"font-size: 50px; font-weight: lighter; color: black; background-color: white; border: none\">&times;</button>" +
            "                            </td>" +
            "                            <td style=\"width: 120px\">" +
            "                                <img id='proImg' src=" + wish[i].img +
            " width=\"120\" height=\"120\">" +
            "                            </td>" +
            "                            <td id='proName' style=\"font-size: 20px; font-weight: bold\">" + wish[i].name +
            "</td>" +
            "                            <td id='proPrice' style=\"font-weight: lighter\">" + wish[i].price  +
            "</td>" +
            "                            <td style=\"font-weight: lighter\">In Stock</td>" +
            "                            <td style=\"font-weight: lighter\">" +
            "                                <a id='addCart'>Add to cart</a>" +
            "                            </td>" +
            "                        </tr>"

        document.getElementById('deleted').onclick = function (){
            wish.splice(i,1);
            localStorage.setItem('wishlist', JSON.stringify(wish));
            location.reload();
        }

        document.getElementById('addCart').onclick = function (){
            const product = {
                name: wish[i].name,
                price: wish[i].price,
                img: wish[i].img,
                qty: 1,
            };
            if (check(product) === true){
                document.getElementById("link").innerHTML = "<div style='width: 1200px; border: 2px solid black; height:104px'>" +
                    "<p>" + product.name + " already in your cart.</p>" +
                    "<a href='Cart.html'>" +
                    "<button type='button'>VIEW CART</button>" +
                    "</a>" +
                    "</div>";
            }
            else {
                cart.push(product);
                localStorage.setItem('cart', JSON.stringify(cart));
                document.getElementById("link").innerHTML = "<div style='width: 1200px; border: 2px solid black; height:104px'>" +
                    "<p>" + product.name + " has been added to your cart.</p>" +
                    "<a href='Cart.html'>" +
                    "<button type='button'>VIEW CART</button>" +
                    "</a>" + "</div>";
            }
        }


    }
}

function check(product){
    for (let i = 0; i < wish.length; i++){
        if(product.name === wish[i].name && product.img === wish[i].img){
            return true;
        }
    }
}