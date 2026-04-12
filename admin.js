// Product Admin System

let products = JSON.parse(localStorage.getItem('products')||'[]');

function save(){
localStorage.setItem('products',JSON.stringify(products));
render();
}

function addProduct(name,price,img){
products.push({name,price,img});
save();
}

function deleteProduct(i){
products.splice(i,1);
save();
}

function render(){
let el=document.getElementById('products');
if(!el) return;
el.innerHTML='';
products.forEach((p,i)=>{
let div=document.createElement('div');
div.className='card';
div.innerHTML=`
<img src="${p.img}">
<h3>${p.name}</h3>
<p>${p.price}</p>
<button onclick="deleteProduct(${i})">Delete</button>
`;
el.appendChild(div);
});
}

window.onload=render;