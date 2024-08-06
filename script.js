let text="",result=0;
let isEval=false;
let firstNum=0,secondNum=0,operator='';

// let btnpnl=document.querySelectorAll(`.btnPnl`);
let buttonPanel=document.querySelectorAll(`.num`);
let operatorBtns=document.querySelectorAll(`.operator`);
let equalBtn=document.querySelector(`.equal`);
let clearBtn=document.querySelector(`.cls`);
let DelBtn=document.querySelector(`#del`);
let txtbx=document.querySelector("#input");
let operatorbx=document.querySelector("#operator");

function Add(num1,num2){return num1+num2;}
function Subtract(num1,num2){return num1-num2;}
function Multiply(num1,num2){return num1*num2;}
function Divide(num1,num2){return num1/num2;}
function HandleClick(btn)
{
    if(text.length>11)
        return;
    text+=btn.textContent;
    txtbx.textContent=text;
}
function getOperand()
{
    let Num=txtbx.textContent;
    text="";
    return Number(Num);
}
function getOperator(btn)
{
    operatorbx.textContent=btn.id;
    return btn.id;
    
}
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
        default :
            return Number(text);
    }
}

buttonPanel.forEach
(
    btn =>btn.addEventListener
    ("click",()=>
        {
            HandleClick(btn);
        }
    )
)
operatorBtns.forEach
(
    btn =>btn.addEventListener
    ("click",()=>
        {
            firstNum=getOperand();
            operator=getOperator(btn);
        }
    )
)
equalBtn.addEventListener
(
    "click",()=>
    {
        secondNum=getOperand();
        txtbx.textContent=operate(firstNum,secondNum,operator)
        operatorbx.textContent="";
    }
);
clearBtn.addEventListener
(
    "click",()=>
    {
        text="";
        txtbx.textContent=text;
        operatorbx.textContent=text;
    }
);
DelBtn.addEventListener
(
    "click",()=>
    {
        text=text.slice(0,text.length-1)
        txtbx.textContent=text;
    }
);


