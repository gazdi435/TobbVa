const URL = "/api/twopersons/";

let masodikKep = document.getElementById("masodikKep");
let elsoKep = document.getElementById("elsoKep");

let elsoLabel = document.getElementById("label1");
let masodikLabel = document.getElementById("label2");
let elsoPenz;
let masodikPenz;
let elsoMegjelenit = document.querySelectorAll(".nagyDiv div .lbAr")[0];
let masodikMegjelenit = document.querySelectorAll(".nagyDiv div .lbAr")[1];

let pontok = document.getElementById("pontok");


function Csinal(){

    elsoMegjelenit.innerText = "";
    masodikMegjelenit.innerText = "";

    fetch(URL)
    .then(res => res.json())
    .then(data => {
    console.log(data);
    elsoLabel.innerText = data[0].name;
    masodikLabel.innerText = data[1].name;
    elsoKep.src = data[0].img.replace("/frontend/","/");
    masodikKep.src = data[1].img.replace("/frontend/","/");
    elsoPenz = parseInt(data[0].value);
    masodikPenz = parseInt(data[1].value);
})
}

Csinal();



function Megnez(kuldo){
    elsoMegjelenit.innerText = elsoPenz;
    masodikMegjelenit.innerText = masodikPenz;

    if(kuldo == document.querySelectorAll(".gomb")[0] && elsoPenz>masodikPenz || kuldo == document.querySelectorAll(".gomb")[1] && elsoPenz<masodikPenz){
        alert("nyertél!!");
        pontok.innerText = parseInt(pontok.innerText) + 1;
    }else{
        alert("nem nyertél!!")
        pontok.innerText = 0;
    }

}
    