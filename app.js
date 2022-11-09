var IntailPrice=document.querySelector("#intial-Price");
var Qnty=document.querySelector("#Qntatity-Stock");
var currentPrice=document.querySelector("#current-Price");
var btnCheck=document.querySelector("#btn-Check");
var output=document.querySelector("#output-Msg");



function checkStock(){
    console.log("clicked");
    var initialPrc=IntailPrice.value;
    var Qnt=Qnty.value;
    var currentPrc=currentPrice.value;
    if(initialPrc===""||Qnt===""||currentPrc===""){
        // alert("Please Enter all required Field");
        console.log("edge case");
        output.innerText="Please Enter all required Field";
        return;
    }
    else if(initialPrc<0||Qnt<0||currentPrc<0){
        output.innerText="Input can't be Negative";
        return;
    }
    calculateProfitAndLoss(initialPrc,Qnt,currentPrc);

}


function calculateProfitAndLoss(intial,quantity,current){
    if(current>intial){
        var profit=(current-intial)*quantity;
        var profitPer=((profit/(intial*quantity))*100).toFixed(2);
        document.body.style.backgroundColor ="green";
        errorMessage(`Your Profit is ${profit} and Profit Percentage is ${profitPer}`)
    }
    else if(intial>current)
    {
        var loss=(intial-current)*quantity;
        var lossPer=((loss/(intial*quantity))*100).toFixed(2);
        document.body.style.backgroundColor="red";
        errorMessage(`Your Loss is ${loss} and Loss Percentage is ${lossPer}`)
    }
    else{
        errorMessage(`No pain No gain and No gain No pain`);
    }
}

function errorMessage(message,profit){
    output.innerHTML=message;
}
btnCheck.addEventListener("click",checkStock);




