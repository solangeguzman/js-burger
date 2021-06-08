var Price = document.getElementById('pricetotal');
var resultPrice = document.getElementById('prezzofinale');

Price.addEventListener('click', function () {
    var totPrice = 0;
    var checkItems = document.getElementsByClassName('checkItems');
    var sconto = document.getElementById('coupon');
    var priceNum=0;

    for (var i = 0; i < checkItems.length; i++){
        if (checkItems[i].checked){
           totPrice += parseInt(checkItems[i].value)
        }
    }
    if (sconto.value === "miaw"){
        priceNum = parseInt(totPrice / 100 * 10);
    }
    resultPrice.innerHTML = '$' + (totPrice - priceNum)
})