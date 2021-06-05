var powFlag=false;
var number;
function addToCalculator(value){
    document.getElementById('displayResult').value += value;
    if(powFlag){
        number=document.getElementById('displayResult').value.split('^');
        console.log(number);
    }

}

function finilize(){
    document.getElementById('displayResult').value = eval(document.getElementById('displayResult').value);
    if(powFlag)
    {
        document.getElementById('displayResult').value=Math.pow(number[0],number[1]);
        powFlag=false;
    }
}

function reset(){
    document.getElementById('displayResult').value ='';
}

function mathCalculator(mathfunc){
    if(mathfunc == 'pow'){
        powFlag=true;
        document.getElementById('displayResult').value += '^';
    } else {
        var val =document.getElementById('displayResult').value;
        document.getElementById('displayResult').value = Math[mathfunc](val);
    }

}
