let tColorA=document.getElementById('tColorA'),
tColorB=document.getElementById('tColorB'),
tColorC=document.getElementById('tColorC'),
iconA=document.querySelector('.fa-credit-card'),
iconB=document.querySelector('.fa-building-coloumns'),
iconC=document.querySelector('.fa-wallet'),
cDetails=document.querySelector('.card-details');

function doFun(){
    tColorA.style.color="greenyellow";
    tColorB.style.color="#444";
    tColorC.style.color="#444";
    iconA.style.color="greenyellow";
    iconB.style.color="#aaa";
    iconC.style.color="#aaa";
    cDetails.style.display="block";
}
function doFunA(){
    tColorB.style.color="greenyellow";
    tColorA.style.color="#444";
    tColorC.style.color="#444";
    iconB.style.color="greenyellow";
    iconA.style.color="#aaa";
    iconC.style.color="#aaa";
    cDetails.style.display="none";
}
function doFunB(){
    tColorC.style.color="greenyellow";
    tColorB.style.color="#444";
    tColorA.style.color="#444";
    iconC.style.color="greenyellow";
    iconB.style.color="#aaa";
    iconA.style.color="#aaa";
    cDetails.style.display="none";
}
