var calcoloSum = document.getElementById('somma-totale');
var resultSumElement = document.getElementById('result-sum')

calcoloSum.addEventListener('click', function () {

    var result = 70;

    var Num = document.getElementByIdClassName('somma');

    for (var i = 0; i< Num.length; i++){

       if (Num[i].checked){
          
          result += parseInt(Num[i].value)
       
        }

    }
    document.getElementById('result').innerHTML = 'Your price is:' + result;
})