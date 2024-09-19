const burguer = document.querySelector('.burguer-icon');
const link_item= document.querySelector('.link_items');
const choose=document.querySelector('.naviguation a')
const navigue=document.querySelector('.naviguation')

burguer.addEventListener('click', ()=>
{
    burguer.classList.toggle('active')
    link_item.classList.toggle('active')
    navigue.classList.toggle('active')
});

choose.forEach(link => {
    link.addEventListener('click', ()=>{
        burguer.classList.remove('active')
        link_item.classList.remove('active')
        navigue.classList.remove('active')
    });
});