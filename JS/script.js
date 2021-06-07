var totPrice = document.getElementById('calculate');
var resultPrice = document.getElementById('result-sum')

totPrice.addEventListener('click', function () {

    var result = 0;

    var SelectionFood = document.getElementByIdClassName('Food');
    var discount = document.getElementByIdClassName('sconti');
    var discountPrice = 0;
    for (var i = 0; i< selectionFood.length; i++){
        if (selectionFood[i].checked){
           result += parseInt(Num[i].value)
       
        }

    }
    if (discount.value ===''){
        discountPrice= parseInt(result/100*10);
    }
    resultPrice.innerHTML = 'Your price is:' + (result-discountPrice);
})