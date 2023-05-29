var hb=document.querySelector('.burger')
var navmenu=document.querySelector('.nav-menu')

hb.addEventListener( "click", ()=>{
       hb.classList.toggle('active');
       navmenu.classList.toggle('active');
})
