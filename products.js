var productList = []
productList[0] = {name: 'Frozen Banana', description: 'The timeless unbeatable classic!', price: 10.00, imgurl: '<img src="img/frozen-banana.jpg">'}
productList[1] = {name: 'Blue-Popsicle', description: 'Delicious and organic popsicles! Blueberry only.', price: 6.00, imgurl: '<img src="img/popsicle.jpg">'}
productList[2] = {name: 'Lemonade', description: 'Freshly made from our local lemon grove.', price: 3.50, imgurl: '<img src="img/lemonade.jpg">'}
productList[3] = {name: 'Banana Grabber Special', description: 'A frozen banana, double dipped in chocolate and there are two of them.', price: 14.50, imgurl: '<img src="img/bg-special.jpg">'}
productList[4] = {name: 'Mabey Ice Cream', description: 'Mabey Ice Cream, maybe not.', price: 6.75, imgurl: '<img src="img/ice-cream.jpg">'}
productList[5] = {name: 'Cornballs', description: 'Fried to perfection, watch your hands!', price: 5.00, imgurl: '<img src="img/cornballs.jpg">'}
productList[6] = {name: 'Loose Seal Vodka', description: 'Lucille may be in rehab, and if you\'re drinking vodka from a banana stand, you should be, too.', price: 12.50, imgurl: '<img src="img/cornballs.jpg">'}
productList[7] = {name: 'Placeholder', description: 'Placeholder!', price: 5.00, imgurl: '<img src="img/cornballs.jpg">'}
;
// these vars will be called in the function//
var listProduct = document.getElementsByClassName("name");
var listDescription = document.getElementsByClassName("description");
var listPrice = document.getElementsByClassName("price");
var listImage = document.getElementsByClassName("image");

var populateProducts = function() { // FUNCTION HOLDS CODE TO ADD PRODUCTS TO DOM
    for (var i = 0; i < 8; i++) { //initializes loops, var i points to the array index number and class index number
        listProduct[i].innerHTML = productList[i].name; //adds product name to name div
        listDescription[i].innerHTML = productList[i].description; // description
        listPrice[i].innerHTML = productList[i].price; //price
        listImage[i].innerHTML = productList[i].imgurl; //image
      
    }
    // var selectProduct = ;
    // var writeProduct = selectProduct.innerHTML(productWrite);
}
populateProducts(productList);

// listProduct[0].innerHTML = productList[0].name;
// listProduct[1].innerHTML = productList[1].name;
// listProduct[2].innerHTML = productList[2].name;
// listProduct[3].innerHTML = productList[3].name;
// listProduct[4].innerHTML = productList[4].name;
// listProduct[5].innerHTML = productList[5].name;
// listDescription[0].innerHTML = productList[0].description;
// listDescription[1].innerHTML = productList[1].description;
// listDescription[2].innerHTML = productList[2].description;
// listDescription[3].innerHTML = productList[3].description;
// listDescription[4].innerHTML = productList[4].description;
// listDescription[5].innerHTML = productList[5].description;
// listPrice[0].innerHTML = productList[0].price;
// listPrice[1].innerHTML = productList[1].price;
// listPrice[2].innerHTML = productList[2].price;
// listPrice[3].innerHTML = productList[3].price;
// listPrice[4].innerHTML = productList[4].price;
// listPrice[5].innerHTML = productList[5].price;
// listImage[0].text = productList[0].imgurl;
// listImage[1].text = productList[1].imgurl;
// listImage[2].text = productList[2].imgurl;
// listImage[3].text = productList[3].imgurl;
// listImage[4].text = productList[4].imgurl;
// listImage[5].text = productList[5].imgurl;
