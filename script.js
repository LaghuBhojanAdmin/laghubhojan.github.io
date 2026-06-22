
let all=[];
fetch('products.json').then(r=>r.json()).then(d=>{all=d;show(d);});
function show(items){
let g=document.getElementById('grid'); g.innerHTML='';
items.forEach(p=>{
g.innerHTML+=`<div class="card"><h3>${p.name}</h3>
<p>${p.price}</p>
<a class="btn" target="_blank" href="https://wa.me/919999999999?text=I want to order ${encodeURIComponent(p.name)}">Order on WhatsApp</a>
</div>`;
});
}
document.getElementById('search').addEventListener('input',e=>{
let q=e.target.value.toLowerCase();
show(all.filter(x=>x.name.toLowerCase().includes(q)));
});
