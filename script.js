let text="";

let btnpnl=document.querySelectorAll(`.btnPnl`);
let txtbx=document.querySelector("#input");

function Add(num1,num2){return num1+num2;}
function Subtract(num1,num2){return num1-num2;}
function Multiply(num1,num2){return num1*num2;}
function Divide(num1,num2){return num1-num2;}

function operate(num1,num2,operator)
{
    switch( operator)
    {
        case '+':
            return Add(num1,num2);
        case '-':
            return Subtract(num1,num2);
            case '*':
            return Multiply(num1,num2);
        case '/':
            return Divide(num1,num2);
    }
}
function evlauate(str)
{
    let firstNum=0,secondNum=0,operator='';
    let operators="+-*/";
    for(let i=0;i<str.length;i++)
    {
        if(operators.includes(str[i]))
        {
            firstNum=Number(str.slice(0,i));
            secondNum=Number(str.slice(i+1,str.length));
            operator=str[i];
            break;
        }
    }
    text=operate(firstNum,secondNum,operator);
    txtbx.value=text;
    text="";
}


for(let i=0;i<17;i++)
{
    if(i==14)
    {
        btnpnl[i].addEventListener("click",()=>{evlauate(text);});
        continue;
    }
    else if(i==16)
    {
        btnpnl[i].addEventListener(
            "click",()=>{
            text="";
            txtbx.value=text;}
        );
        continue;
    }
    btnpnl[i].addEventListener(
        "click",()=>{text+=  btnpnl[i].id
        txtbx.value=text;
    });
}
// let btnpnl=document.querySelectorAll(".1")