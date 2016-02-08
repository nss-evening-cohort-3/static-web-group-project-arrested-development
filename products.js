// populate array of objects for product properties
var productList = []
productList[0] = {name: 'Frozen Banana', description: 'The timeless unbeatable classic!', price: 10.00, imgurl: '<img src="img/frozen-banana.jpg">'}
productList[1] = {name: 'Blue-Popsicle', description: 'Delicious and organic popsicles! Blueberry only.', price: 6.00, imgurl: '<img src="img/popsicle.jpg">'}
productList[2] = {name: 'Lemonade', description: 'Freshly made from our local lemon grove.', price: 3.50, imgurl: '<img src="img/lemonade.jpg">'}
productList[3] = {name: 'Banana Grabber Special', description: 'A frozen banana, double dipped in chocolate and there are two of them.', price: 14.50, imgurl: '<img src="img/bg-special.jpg">'}
productList[4] = {name: 'Mabey Ice Cream', description: 'Mabey Ice Cream, maybe not.', price: 6.75, imgurl: '<img src="img/ice-cream.jpg">'}
productList[5] = {name: 'Cornballs', description: 'Fried to perfection, watch your hands!', price: 5.00, imgurl: '<img src="img/cornballs.jpg">'}
productList[6] = {name: 'Loose Seal Vodka', description: 'Lucille may be in rehab, and if you\'re drinking vodka from a banana stand, you should be, too.', price: 12.50, imgurl: '<img src="img/vodka.jpg">'}
productList[7] = {name: 'Ice Cream Sandwich', description: 'You\'ll have a love affair with these ice cream sandwiches!', price: 4.25, imgurl: '<img src="img/ice-cream-sandwich.jpg">'}
;
// these variables will tell the function where to fill the product info inside the DOM//
var listProduct = document.getElementsByClassName("name");
var listDescription = document.getElementsByClassName("description");
var listPrice = document.getElementsByClassName("price");
var listImage = document.getElementsByClassName("image");
// Could have just written a for loop without calling a function
var populateProducts = function() { 
    for (var i = 0; i < 8; i++) { //initializes loops, var i points to the array index number and class index number
        listProduct[i].innerHTML = productList[i].name; //adds product name to name div
        listDescription[i].innerHTML = productList[i].description; // description
        listPrice[i].innerHTML = productList[i].price; //price
        listImage[i].innerHTML = productList[i].imgurl; //image
      
    }
 
}
populateProducts(productList);

