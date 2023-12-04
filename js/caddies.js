var caddies = new Array(1,0,0,0,0,0,0,0,0,0);
let menuPanier = document.getElementById('shopping');

if (!localStorage.getItem("caddies")) {
} else {
   let texte = new Array();
   texte = localStorage.getItem("caddies").split(",");
    for (var i=0;i<texte.length;i++){
      caddies[i] = Number(texte[i]);
   }
}

function videPanier(){
   if (localStorage.getItem("caddies")){
      localStorage.removeItem("caddies");
   }
   for (var i=0;i<caddies.length;i++){
      caddies[i]=0;
   }
}

function sauvePanier(){
   //Attention sauvegarde le tableau comme une chaine 
   localStorage.setItem('caddies',caddies); 
}

function compteArticle(){
   let nbArticle = 0;
   for (var i=0;i<caddies.length;i++){
      nbArticle += caddies[i];
   }
   if (nbArticle==0){
      if (!menuPanier.firstChild.textContent == "Panier"){
         while(menuPanier.firstChild) {
            menuPanier.removeChild(menuPanier.firstChild);
         }
         menuPanier.textContent("Panier");
      }
      if (localStorage.getItem("caddies")){
         localStorage.removeItem("caddies");
      }
   }else{
      if (menuPanier.firstChild.textContent == "Panier"){
         while(menuPanier.firstChild) {
            menuPanier.removeChild(menuPanier.firstChild);
         }
         // <i class="position-relative fa-solid fa-cart-shopping fa-2xl">
         // <h6 class="position-absolute top-0 start-0 translate-middle p-1 mb-1 bg-dark text-light rounded-circle" id="nbreArticles">15</h6>
         // </i>
         let elemImg = document.createElement('i');
         elemImg.className = 'position-relative fa-solid fa-cart-shopping fa-2xl';
         elemImg.dataset.bsToggle='modal';
         elemImg.dataset.bsTarget='#myCaddy';
         let elemH6 = document.createElement('h6');
         elemH6.className = 'position-absolute top-0 start-0 translate-middle p-1 mb-1 bg-dark text-light rounded-circle';
         elemH6.id = 'nbreArticles';
         elemImg.appendChild(elemH6);
         menuPanier.appendChild(elemImg);
      }
      let monPanier = document.getElementById('nbreArticles');
      monPanier.textContent=nbArticle;
      sauvePanier();
   }
}

compteArticle()

console.log(caddies);