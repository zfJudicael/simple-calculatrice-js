function getHistory(){
    return document.getElementById("history-value").innerText;
}

function printHistory(num){
    document.getElementById("history-value").innerText = num;
}

function getOutput(){
    return document.getElementById("output-value").innerText;
}

function printOutput(num){
    if(num == ""){
        document.getElementById("output-value").innerText = num;
    }else{
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}

function getFormattedNumber(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

var operateur = document.getElementsByClassName("operateur");
for(let i=0;i<operateur.length;i++){
    operateur[i].addEventListener('click', function(){
        if(this.id == "clear"){
            printHistory("");
            printOutput("");
        }else if(this.id=="backspace"){
            var output = reverseNumberFormat(getOutput()).toString();
            if(output){//if output has a value
                output = output.substring(0,output.length-1);
                printOutput(output);
            }
        }else{
            var output = getOutput();
            var history = getHistory();
            if(output!=""){
                output=reverseNumberFormat(output);
                history = history + output;
                if(this.id == "="){
                    var resultat = eval(history);
                    printOutput(resultat);
                    printHistory("");
                }else{
                    history = history +this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    })
}

var chiffre = document.getElementsByClassName("chiffre");
for(let i=0;i<chiffre.length;i++){
    chiffre[i].addEventListener('click', function(){
        var output = reverseNumberFormat(getOutput());
        if(this.id == "empty"){
            printOutput("");
        }else{
            output = output+this.id;
            printOutput(output);
        }
    })
}