/*menu mobile*/
let btnAbrir = document.getElementById("btnAbrir");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById('overlay');

overlay.addEventListener('click', ()=>{
    menu.className = 'abrir-menu';
    overlay.style.display = 'none';
})
function abrir(){
    menu.className = 'menu-mobile';
    overlay.style.display = 'block';
}
function fechar(){
    menu.className = 'abrir-menu';
    overlay.style.display = 'none';
}
/*menu dropdown*/
let itenMenu = document.getElementById('itenDrop');
let menuDrop = document.getElementById('dropdown');
let imagemSeta = document.getElementById('imagemSeta');
let divDrop = document.getElementById('setabaixo');

divDrop.addEventListener('click' ,()=>{
    if(menuDrop.style.display == 'flex'){
        menuDrop.style.display = 'none';
        imagemSeta.style.transform = 'rotate(0deg)';
        imagemSeta.style.transitionDuration = '100ms'
    }else{
        menuDrop.style.display = 'flex';
        imagemSeta.style.transform = 'rotate(180deg)';
        imagemSeta.style.transitionDuration = '100ms';
    }
})




