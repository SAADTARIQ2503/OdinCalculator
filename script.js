
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


let firstNum=0,secondNum=0,operator='';
let text="";



let btnpnl=document.querySelector(`.numbers`);
for(let i=0;i<10;i++)
{
    btn.addEventListener("click",()=>{text+= btn.id
        console.log(text,btn.id);
    });
}
// let btnpnl=document.querySelectorAll(".1")