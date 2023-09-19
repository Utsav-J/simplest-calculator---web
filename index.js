function calculateSquareRoot() {
    var currentValue = document.getElementsByName("display")[0].value;
    if (currentValue !== '') {
        var result = Math.sqrt(parseFloat(currentValue));
        if(typeof(result) == 'float'){
            result = parseFloat(result).toPrecision(5);
        }
        document.getElementsByName("display")[0].value = result;
    }
}

function getResult(){
    document.getElementsByName('display')[0].value = eval(document.getElementsByName("display")[0].value);
}