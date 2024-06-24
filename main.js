const planets = [
    {Earth:'images/earth.png',G:9.8},
    {Jupiter:'images/jupiter.png',G:1.8},
    {Mars:'images/mars.png',G:3.7},
    {Mercury:'images/mercury.png',G:3.7},
    {Moon:'images/moon.png',G:1.6},
    {Neptune:'images/neptune.png',G:0.5},
    {Pluto:'images/pluto.png',G:0.58},
    {Saturn:'images/saturn.png',G:1.4},
    {Uranus:'images/uranus.png',G:0.08},
    {Venus:'images/venus.png',G:0.22},
];


planets.forEach((e)=>{
    console.log(e.G) 
})

document.body.style.cssText = 'background:url(images/galaxy.gif);align-items: center;text-align: center;display: flex;flex-direction: column;';


let title = document.querySelector('h1');
title.style.cssText = 'color: white;text-shadow: 2px 2px 1px #6565ac;font-size: 40px;text-align: center;';

let inputFeild = document.querySelector('input');
inputFeild.style.cssText = 'height: 35px;width: 14rem;margin-right: 6px;border-radius: 4px;';


let select = document.querySelector('select');
select.style.cssText = 'height: 40px;width: 12rem;margin-right: 6px;border-radius: 4px;';

let btn = document.querySelector('button');
btn.style.cssText = 'height: 40px;width: 10rem;background-color: gray;border: none; border-radius: 6px;color: white;opacity: 0.8;';

let option;
planets.forEach(planet=>{
    option = document.createElement('option');
    option.value = Object.keys(planet)[0];
    option.textContent = Object.keys(planet)[0];
    select.append(option);
});

let imageContanire = document.querySelector('.imgContanier');
imageContanire.style.cssText = 'justify-content: space-evenly;display: flex;align-items: center;width: 80%;height: 65vh;background-color: #b6b6b630;;margin-top:20px';

let img = document.querySelector('.image');
img.style.cssText = 'width: 30%; height:80%;';

let imgTage = document.querySelector('img');
imgTage.style.cssText ='width:100%;';
imgTage.setAttribute('src',planets[0].Earth);

let info = document.querySelector('.info');
info.style.cssText = 'display: flex;flex-direction: column;align-items: center;width: 50%;height: 50%; background-color: #92929242;display:none';


let p = document.querySelector('.info p');
p.style.cssText = 'font-size: 18px;color: white;';
let span = document.querySelector('.info p span');
span.style.cssText = 'font-weight: bold;';


let kilo = document.querySelector('.kilo');
kilo.style.cssText = 'width:120px;height:120px;border-radius:100px;background:#92929242;display:flex;align-items:center;justify-content: center;';

let h1Kilo = document.querySelector('.kilo h1');
h1Kilo.style.cssText ='color:white';


let selectedG = planets[0].G;
let seletedImage = planets[0].Earth;
select.onchange =  function(){
     planets.forEach(p=>{
       if(p[`${select.value}`] !== undefined){
        selectedG = p['G'];
        seletedImage =  p[`${select.value}`];
       }
     });
}

let isR = document.querySelector('.isR');
isR.style.cssText = 'justify-content: space-evenly;display:none;align-items: center;width: 80%;height: 14vh;background-color: #b6b6b630;;margin-top:20px';

let pR = document.querySelector('.isR p');
pR.style.cssText = ' font-size: 20px;color: white;padding: 12px 100px;background: #8080805e;';


let result;
btn.onclick = function(){
  if(inputFeild.value !== '' && parseInt(inputFeild.value)){
    h1Kilo.textContent  = parseInt(inputFeild.value) *selectedG;
    info.style.display= 'flex';
    span.textContent = select.value;
    imgTage.setAttribute('src',seletedImage);
    img.append(imgTage);
    imageContanire.style.display = 'flex';
    isR.style.display = 'none';
}else{
     imageContanire.style.display = 'none';
     isR.style.display = 'flex';
  }
}




