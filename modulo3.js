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
   if(menuDrop.style.display == 'block'){
      menuDrop.style.display = 'none';
      imagemSeta.style.transform = 'rotate(0deg)';
      imagemSeta.style.transitionDuration = '100ms'
   }else{
      menuDrop.style.display = 'block';
      imagemSeta.style.transform = 'rotate(180deg)';
      imagemSeta.style.transitionDuration = '100ms';
   }
})
/*tutorial*/
let proximo = document.getElementById('proximo');
let anterior = document.getElementById('anterior');
let imagem = document.getElementById('imagem');
let texto = document.getElementById('texto');

let controle = 1;

proximo.addEventListener('click',()=>{
     controle++;

     if(controle == 2){
        texto.innerHTML = '2º Passo: Encontre a página e clique em "Começar;';
        imagem.src = 't(2).png';
  
     }
     if(controle == 3){
        texto.innerHTML = ' 3º Passo: Clique em " Quero começar um Podcast";';
        imagem.src = 't(3).png';
     
     }
     if(controle == 4){
        texto.innerHTML = '4º Passo: Faça login com sua conta de e-mail;';
        imagem.src = 't(4).png';
     }
     if(controle == 5){
        texto.innerHTML = '5º Passo: Aqui a mágica acontece .Você pode criar seu podcast diretamente na plataforma ou apenas editá-lo. Clique em "Novo Episódio";';
        imagem.src = 't(5).png';
     }
     if(controle == 6){
        texto.innerHTML = '6º Passo: :Grave ou edite. Você pode gravar diretamente na plataforma, adicionar músicas, mensagens ou transições, ou selecionar um arquivo de áudio para editar;';
        imagem.src = 't(6).png';
     }
     if(controle == 7){
        texto.innerHTML = ' 7º passo : gravar ou editar : aqui você pode gravar diretamente pela plataforma, inserir músicas, mensagens ou transições, ou pode selecionar um arquivo de áudio editar ou arrastar o arquivo editá-lo;';
        imagem.src = 't(7).png';
     }
     if(controle == 8){
        texto.innerHTML = ' 8º Passo: Salve o episódio e explore ao máximo as informações.'+'<br>'+'Título: Escolha um nome atrativo, geralmente relacionado ao tema do seu programa.'+'<br>'+'Descrição do Episódio: Explore ao máximo para contar sobre o conteúdo do episódio;';

        imagem.src = 't(8).png';
     }
     if(controle == 9){
        texto.innerHTML = ' 9º Passo: Escolha a data de publicação e indique que não há conteúdo explícito;';
        imagem.src = 't(9).png';
     }
     if(controle == 10){
        texto.innerHTML = ' 10º Passo: Incentive a criatividade dos ouvintes na criação de enquetes, caixas de perguntas e divirta-se com seus fãs;';
        imagem.src = 't(10).png';
     }
     if(controle == 11){
        texto.innerHTML = ' 11º Passo: Revisão de conteúdo e pronto para a publicação;';
        imagem.src = 't(11).png';
     }
     if(controle == 12){
        texto.innerHTML = '12º Passo: Divulgue bastante!Lembre-se: A edição só é possível com arquivos salvos em MP4 e MOV. Esteja atento aos detalhes e aproveite a jornada de criação do seu podcast no Spotify!';
        imagem.src = 't(12).png';
     }
     if(controle == 13){
        controle = 1;
        texto.innerHTML = '1º Passo: Abra seu navegador e acesse "Spotify for Podcarters;';
        imagem.src = 't(1).png';
     }

})
anterior.addEventListener('click',()=>{
     if(controle < 1){
        controle++;
     }else{
        controle--
     }
    if(controle == 2){
       texto.innerHTML = ' 2º Passo: Encontre a página e clique em "Começar;';
       imagem.src = 't(2).png';
    }
    if(controle == 3){
       texto.innerHTML = ' 3º Passo: Clique em " Quero começar um Podcast";';
       imagem.src = 't(3).png';
    }
    if(controle == 4){
       texto.innerHTML = '4º Passo: Faça login com sua conta de e-mail;';
       imagem.src = 't(4).png';
    }
    if(controle == 5){
       texto.innerHTML = '5º Passo: Aqui a mágica acontece .Você pode criar seu podcast diretamente na plataforma ou apenas editá-lo. Clique em "Novo Episódio";';
       imagem.src = 't(5).png';
    }
    if(controle == 6){
       texto.innerHTML = '6º Passo: :Grave ou edite. Você pode gravar diretamente na plataforma, adicionar músicas, mensagens ou transições, ou selecionar um arquivo de áudio para editar;';
       imagem.src = 't(6).png';
    }
    if(controle == 7){
       texto.innerHTML = ' 7º passo : gravar ou editar : aqui você pode gravar diretamente pela plataforma, inserir músicas, mensagens ou transições, ou pode selecionar um arquivo de áudio editar ou arrastar o arquivo editá-lo;';
       imagem.src = 't(7).png';
    }
    if(controle == 8){
       texto.innerHTML = '  8º Passo: Salve o episódio e explore ao máximo as informações.'+'<br>'+'Título: Escolha um nome atrativo, geralmente relacionado ao tema do seu programa.'+'<br>'+'Descrição do Episódio: Explore ao máximo para contar sobre o conteúdo do episódio;';
       imagem.src = 't(8).png';
    }
    if(controle == 9){
       texto.innerHTML = ' 9º Passo: Escolha a data de publicação e indique que não há conteúdo explícito;';
       imagem.src = 't(9).png';
    }
    if(controle == 10){
       texto.innerHTML = ' 10º Passo: Incentive a criatividade dos ouvintes na criação de enquetes, caixas de perguntas e divirta-se com seus fãs;';
       imagem.src = 't(10).png';
    }
    if(controle == 11){
       texto.innerHTML = ' 11º Passo: Revisão de conteúdo e pronto para a publicação;';
       imagem.src = 't(11).png';
    }
    if(controle == 12){
       texto.innerHTML = '12º Passo: Divulgue bastante!Lembre-se: A edição só é possível com arquivos salvos em MP4 e MOV. Esteja atento aos detalhes e aproveite a jornada de criação do seu podcast no Spotify!';
       imagem.src = 't(12).png';
    }
    if(controle ==1){
    
       texto.innerHTML = '1º Passo: Abra seu navegador e acesse "Spotify for Podcarters;';
       imagem.src = 't(1).png';
    }

})
