
let btnAddCaddy;
var caddies = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
if (!localStorage.getItem("caddies")) {
} else {
  let texte = new Array();
  texte = localStorage.getItem("caddies").split(",");
  for (var i = 0; i < texte.length; i++) {
    caddies[i] = Number(texte[i]);
  }
}


var url_produits = 'data/products.json'
var myProducts
let lstArticles = document.getElementById('myArticle');
let myCaseTous = document.getElementById('checkBoxTous');
let caseAcocher = document.querySelectorAll('#checkbox input');
let viewCaddy = document.getElementById('myCaddy');
let viewProduit  = document.getElementById('ficheProduit');
let btnVidePanier = document.getElementById('btnVidePanier');

viewCaddy.addEventListener('shown.bs.modal', affCommande, false);
viewCaddy.addEventListener('hidden.bs.modal', compteArticle, false);
btnVidePanier.addEventListener('click', videPanier, false);

// console.log(document.URL)
const url = new URL(document.URL)
const searchParams = new URLSearchParams(url.search);
// for (const p of searchParams){
//   console.log(p)
// }


//initialise un évenement, execute la procedure clickSurCaseACocher, 
//chaque fois que l'on sélectionne une case à cocher
for (let i = 0; i < caseAcocher.length; i++) {
  let myCase = caseAcocher[i];
  myCase.addEventListener('click', clickSurCaseAcocher, false);
}

//initialise un évenement, execute la procedure changeSurSelecteur
//chaque fois qu'on change la valeur d'un sélecteur
let selecteur = document.querySelectorAll('#checkbox select');
for (let i = 0; i < selecteur.length; i++) {
  let myCase = selecteur[i];
  myCase.addEventListener('change', changeSurSelecteur, false);
}


function renvoieRef(myReference){
  let i = myReference.indexOf('_')
  i++
  return Number(myReference.slice(i))
}

function updatePrice(){
  let totCommande = 0;
  for (var i = 0; i < caddies.length; i++) {
    if (caddies[i] > 0) {
      let unProduits = myProducts[i]
      totCommande += Number(unProduits.price) * caddies[i];
    }
  }
  document.getElementById("totalCommande").textContent = "Total : " + totCommande.toFixed(2) + " €";
  compteArticle();
}

//Est executer lorsqu'on clique sur le panier pour afficher la fenetre MODALE
function affCommande(myEvent) {
  let mesCommandes = document.getElementById('maCommande');
  while (mesCommandes.firstChild) {
    mesCommandes.removeChild(mesCommandes.firstChild);
  }
  let totCommande = 0;
  for (var i = 0; i < caddies.length; i++) {

    if (caddies[i] > 0) {
      let unProduits = myProducts[i];
      totCommande += Number(unProduits.price) * caddies[i];

      let elemArticle = document.createElement('article');
      elemArticle.id = "ProduitRef_"+i
      elemArticle.className = "row"
      let elemDivImg = document.createElement('div');
      elemDivImg.className = "col-3 d-flex justify-content-around align-self-center";
      let elemImgSup = document.createElement('button');
      elemImgSup.className = "btn fa-solid fa-xmark btn-dark"
      // elemImgSup.dataset.bsToggle="popover"
      // elemImgSup.setAttribute('data-bs-trigger','hover focus')
      // elemImgSup.setAttribute('data-bs-content','Supprime article')
      elemImgSup.style.color = "#ff0000"
      elemImgSup.id = "ProduitBtn_"+i
      elemImgSup.addEventListener('click', clickToDeleteLine, false);
      let elemImgProduits = document.createElement('img');
      elemImgProduits.style.maxWidth = "50px";
      elemImgProduits.src = unProduits.image;
      elemImgProduits.dataset.bsToggle='modal'
      elemImgProduits.dataset.bsTarget='#ficheProduit'
      elemDivImg.appendChild(elemImgSup);
      elemDivImg.appendChild(elemImgProduits);
      elemArticle.appendChild(elemDivImg);
      let elemDivRef = document.createElement('div');
      elemDivRef.className = "col-5 col_sm-4";
      let elmH5Title = document.createElement('h6');
      elmH5Title.textContent = unProduits.title;
      let elmH5Prix = document.createElement('h6');
      elmH5Prix.textContent = unProduits.price + " €";
      elemDivRef.appendChild(elmH5Title);
      elemDivRef.appendChild(elmH5Prix);
      elemArticle.appendChild(elemDivRef);
      let elemDivQte = document.createElement('div');
      elemDivQte.className = "col-3 col-sm-2 justify-content-around align-self-center";
      let Qte = document.createElement('input')
      Qte.type = "number";
      Qte.className = "form-control form-control-sm";
      Qte.placeholder = caddies[i];
      Qte.value = caddies[i];
      Qte.id = "ProduitQte_"+i
      Qte.addEventListener('click', clickToChangeLine, false);
      elemDivQte.appendChild(Qte);
      elemArticle.appendChild(elemDivQte);
      mesCommandes.appendChild(elemArticle);
    }
  }
  document.getElementById("totalCommande").textContent = "Total : " + totCommande.toFixed(2) + " €";
}

function changeSurSelecteur(myEvent) {
  let cible = myEvent.target.id;
  let newValue = Number(myEvent.target.value);
  //console.log(cible+" "+myEvent.target.value);
  let max = document.getElementById("prixMax");
  let min = document.getElementById("prixMin");

  switch (cible) {
    case "prixMin":
      if (newValue > Number(max.value)) {
        max.value = myEvent.target.value;
        console.error("prix min > prix max");
      }
      break;
    case "prixMax":
      if (newValue < Number(min.value)) {
        min.value = myEvent.target.value;
        console.error("prix max < prix min");
      }
      break;
    case "noteMin":
      break;
    case "noteMax":
      break;

  }
  delArticles();
  affArticles();


  //console.log(myEvent.target.id+" "+myEvent.target.value);
}

function clickSurCaseAcocher(myEvent) {
  let myCase = document.getElementById(myEvent.target.id);

  if (myEvent.target.id == "checkBoxTous" && myCase.checked) {
    for (let i = 1; i < caseAcocher.length; i++) {
      let myCase = caseAcocher[i];
      myCase.checked = false;
    }
  } else if (myCase.checked) {
    myCaseTous.checked = false;
  }
  delArticles();
  affArticles();

  // if (myCase.checked){
  //    console.log(myEvent.target.id+" true");
  //  }else{
  //    console.log(myEvent.target.id+" false");
  //  }

}

function clickToChangeLine(myEvent){
  if (myEvent.target.value<0){
    myEvent.target.value=0
  }
  numProduit = renvoieRef(myEvent.target.id)
  caddies[numProduit] = myEvent.target.value
  updatePrice() //mise a jour total caddy
  //Attention sur feuille produit, je modifie la valeur
  let newValue = document.getElementById('qtePrd')
  if (newValue){
    newValue.value = myEvent.target.value
  }



  //console.log('Reference produits '+numProduit+" Value "+myEvent.target.value);
}

function clickToDeleteLine(myEvent){
  let mesCommandes = document.getElementById('maCommande');
  let numProduit = renvoieRef(myEvent.target.id)
  let myArticle = document.getElementById('ProduitRef_'+numProduit);
  mesCommandes.removeChild(myArticle)
  caddies[numProduit] =0
  updatePrice()

  
 



}


//Supprime tous les articles du DOM
function delArticles() {
  while (lstArticles.firstChild) {
    lstArticles.removeChild(lstArticles.firstChild);
  }
}

function AffProduit(e) {

  let unProduits = myProducts[e]
  // newArticles(unProduits.id, unProduits.title, unProduits.price, unProduits.note);
  console.log(unProduits.image)
  let imgProduit = document.getElementById('imgPrd')
  imgProduit.src = unProduits.image
  imgProduit.addEventListener('click', showImgProduit, false);
  let nameProduit = document.getElementById('namePrd')
  nameProduit.textContent = unProduits.title
  let priceProduit = document.getElementById('pricePrd')
  priceProduit.textContent = unProduits.price+" €"
  let noteProduit = document.getElementById('notePrd')
  noteProduit.textContent = unProduits.description
  let ingredientProduit = document.getElementById('ingredientPrd')
  ingredientProduit.textContent = unProduits.ingredients
  let quantiteProduit = document.getElementById('qtePrd')
  quantiteProduit.placeholder = caddies[e];
  quantiteProduit.value = caddies[e];
  console.log(e +" "+ caddies[e])
  let btnUpdate = document.getElementById('btnUpdPrd')
  btnUpdate.addEventListener('click', clickSurUpdatePanier, false);
}

function clickShowProduit(e) {
  let image = e.target.id;
  // console.log(image)
  // console.log(image.indexOf('t'))
  // console.log(image.slice(7,image.lenght))
  if (image.indexOf('produit') != -1 ){
    window.location.href='produit.html?produit='+image.slice(7,image.lenght)
  }
}

if (lstArticles){

//Constitution d'un article dans le DOM
function newArticles(id, fileImage, libelle, prix, etoile = 2) {
  let elemImg = document.createElement('img');
  // elemImg.src = `images/produit${id}.jpg`;
  elemImg.src = fileImage;
  elemImg.alt = libelle;
  elemImg.className = 'w-100 p-2';
  let myNumero = id-1
  elemImg.id = "produit"+myNumero
  elemImg.addEventListener('click', clickShowProduit, false);
  //onclick="window.location.href='boutique.html';"

  let elemH5 = document.createElement('h5');
  elemH5.textContent = libelle;
  let elemPrix = document.createElement('p');
  elemPrix.textContent = prix + ' €';

  let elemBtn = document.createElement('button');
  elemBtn.textContent = 'ajouter au panier';
  elemBtn.className = 'btn btn-primary';
  elemBtn.type = 'button';
  elemBtn.id = id;

  let elemProduit = document.createElement('article');
  elemProduit.className = 'col-12 col-sm-6 col-md-4 pb-1';
  elemProduit.appendChild(elemImg);
  elemProduit.appendChild(elemH5);
  elemProduit.appendChild(elemPrix);
  (function (note) {
    let elemNote = document.createElement('div');
    elemNote.style.height = '35px';

    let elemImgEtoilePleine = document.createElement('i');
    elemImgEtoilePleine.className = 'fa-solid fa-star';
    elemImgEtoilePleine.style.color = '#ffc800';
    for (var i = 1; i <= note; i += 1) {
      if (i == 1) {
        elemNote.appendChild(elemImgEtoilePleine);
      }
      else {
        elemNote.appendChild(elemImgEtoilePleine.cloneNode());
      }
    }
    let elemImgEtoileVide = document.createElement('i');
    elemImgEtoileVide.className = 'fa-regular fa-star';
    elemImgEtoileVide.style.color = '#ffc800';
    for (var k = (note + 1); k < 6; k += 1) {
      if (k == (note + 1)) {
        elemNote.appendChild(elemImgEtoileVide);
      }
      else {
        elemNote.appendChild(elemImgEtoileVide.cloneNode());
      }
    }
    elemProduit.appendChild(elemNote);
  })(etoile);

  elemProduit.appendChild(elemBtn);

  // elemProduit.appendChild(elemNote);
  lstArticles.appendChild(elemProduit);

}

  //Affiche les articles en fonction des choix cases à cocher et filtre
function affArticles() {
  var compteur = 0;
  for (unProduits of myProducts) {
    let bAffiche = false;
    let bPrix = false;
    let bNote = false;
    if (myCaseTous.checked) {
      bAffiche = true;
    } else {
      for (let i = 1; i < caseAcocher.length; i++) {
        let myCase = caseAcocher[i];
        if (myCase.checked) {
          if (myCase.id == 'checkBoxChocoBlanc' && unProduits.category.blanc) { bAffiche = true; }
          else if (myCase.id == 'checkBoxChocoLait' && unProduits.category.lait) { bAffiche = true; }
          else if (myCase.id == 'checkBoxChocoNoir' && unProduits.category.noir) { bAffiche = true; }
          else if (myCase.id == 'checkBoxNoisette' && unProduits.category.noix) { bAffiche = true; }
          else if (myCase.id == 'checkBoxFruit' && unProduits.category.fruit) { bAffiche = true; }
          else if (myCase.id == 'checkBoxCaramel' && unProduits.category.caramel) { bAffiche = true; }
          else if (myCase.id == 'checkBoxLiqueur' && unProduits.category.liqueur) { bAffiche = true; }
        }
      }
    }
    let price = Number(unProduits.price)
    let max = Number(document.getElementById("prixMax").value);
    let min = Number(document.getElementById("prixMin").value);
    if (price >= min && price <= max) { bPrix = true; }

    let quote = unProduits.note
    let quotemax = document.getElementById("noteMax").value;
    let quotemin = document.getElementById("noteMin").value;
    if (quote >= quotemin && quote <= quotemax) { bNote = true; }

    if (bAffiche && bPrix && bNote) {
      newArticles(unProduits.id, unProduits.image, unProduits.title, unProduits.price, unProduits.note);
      compteur++;
    }

    //console.log(myProducts[unProduits].title);
  }

  if (compteur == 0) {
    let elemH2 = document.createElement('h2');
    elemH2.textContent = "Aucun produit ne correspond à la recherche";
    lstArticles.appendChild(elemH2);
  } else {
    //initialise un évenement, execute la procedure clickSurCaseACocher, 
    //chaque fois que l'on sélectionne une case à cocher
    btnAddCaddy = document.querySelectorAll('#myArticle button');

    for (let i = 0; i < btnAddCaddy.length; i++) {
      let myBtn = btnAddCaddy[i];
      myBtn.addEventListener('click', clickSurAjouterPanier, false);
    }
  }

}

}

function showImgProduit(e){
  let image = e.target;
  let imageContainer = document.getElementById('galleryContainer');
  let bigImage = imageContainer.querySelector('img');
  bigImage.src = image.src;
  imageContainer.classList.toggle('visible');
  imageContainer.addEventListener('click', closeImgProduit, false);
}

function closeImgProduit(){
  let imageContainer = document.getElementById('galleryContainer');
  imageContainer.classList.toggle('visible');
}

var successCallBack = function (response){
  //  console.log(response)
   myProducts = response
   if (lstArticles){
    affArticles();
   }
   if (searchParams.has('produit')){
      let num = Number(searchParams.get('produit'))
      AffProduit(num);
   }
}

//CODE PRINCIPAL,
//RECUPERE LA LISTE DES PRODUITS, PUIS LES AFFICHES
$.get(url_produits, successCallBack)

function clickSurAjouterPanier(myEvent) {
  // let myBouton = document.getElementById(myEvent.target.id);
  let myBouton = document.getElementById(myEvent.target.id);
  //  console.log(myBouton.id);
  caddies[Number(myBouton.id) - 1]++;
  compteArticle();
}

function clickSurUpdatePanier(myEvent) {
  //  console.log(myBouton.id);
  if (searchParams.has('produit')){
    let num = Number(searchParams.get('produit'))
    let quantiteProduit = document.getElementById('qtePrd')
    //console.log(quantiteProduit.value)
    caddies[num]=quantiteProduit.value
    compteArticle();
 }
}

function videPanier() {
  for (var i = 0; i < caddies.length; i++) {
    caddies[i] = 0;
  }
let mesCommandes = document.getElementById('maCommande');
  while (mesCommandes.firstChild) {
    mesCommandes.removeChild(mesCommandes.firstChild);
  }
  document.getElementById("totalCommande").textContent = "Total : 0.00 €";
  compteArticle(); //sauvegarde aussi le panier
}

function sauvePanier() {
  //Attention sauvegarde le tableau comme une chaine 
  localStorage.setItem('caddies', caddies);
}

//Modifie le menu avec le nombre d'article en cours
function compteArticle() {
  let menuPanier = document.getElementById('shopping');
  let nbArticle = 0;
  for (var i = 0; i < caddies.length; i++) {
    nbArticle += Number(caddies[i]);
  }

  if (nbArticle == 0) {

    if (menuPanier.firstChild.textContent != "Panier") {
      while (menuPanier.firstChild) {
        menuPanier.removeChild(menuPanier.firstChild);
      }
      menuPanier.textContent = "Panier";
    }
    if (localStorage.getItem("caddies")) {
      localStorage.removeItem("caddies");
    }
  } else {
    if (menuPanier.firstChild.textContent == "Panier") {
      while (menuPanier.firstChild) {
        menuPanier.removeChild(menuPanier.firstChild);
      }
      // <i class="position-relative fa-solid fa-cart-shopping fa-2xl">
      // <h6 class="position-absolute top-0 start-0 translate-middle p-1 mb-1 bg-dark text-light rounded-circle" id="nbreArticles">15</h6>
      // </i>
      let elemImg = document.createElement('i');
      elemImg.className = 'position-relative fa-solid fa-cart-shopping fa-2xl';
      elemImg.dataset.bsToggle = 'modal';
      elemImg.dataset.bsTarget = '#myCaddy';
      let elemH6 = document.createElement('h6');
      elemH6.className = 'position-absolute top-0 start-0 translate-middle p-1 mb-1 bg-dark text-light rounded-circle';
      // console.log(elemH6);
      elemH6.id = 'nbreArticles';
      elemImg.appendChild(elemH6);
      menuPanier.appendChild(elemImg);
    }
    let monPanier = document.getElementById('nbreArticles');
    monPanier.textContent = nbArticle;
    sauvePanier();
  }
}

compteArticle();





