
let lstArticles = document.getElementById('myArticle');
let lstProducts = `[{
       "id": "1" ,
       "title": "Cerisier",
       "price": 2.99,
       "note" : 5,
       "image": "images/produit1.jpg",
       "category": {
           "blanc": false,
           "lait": true,
           "noir": false,
           "caramel": false,
           "noix": true,
           "fruit": true,
           "liqueur": false
         },
         "description": "Cerisier - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
         "ingredients": "Cerise enrobée de pâtes d'amandes, de chocolat au lait et d'éclat de noisettes. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux"
     },
     {
       "id": "2" ,
       "title": "Coulis Caramel",
       "price": 13.99,
       "note" : 3,
       "image": "images/produit2.jpg",
       "category": {
           "blanc": false,
           "lait": true,
           "noir": false,
           "caramel": true,
           "noix": false,
           "fruit": false,
           "liqueur": false
         },
         "description": " Coulis Caramel - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
         "ingredients": "Coulis de caramel enrobé de chocolat au lait. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux"
     },
     {
       "id": "3" ,
       "title": "Douceur exotique",
       "price": 4.99,
       "note" : 4,
       "image": "images/produit3.jpg",
       "category": {
           "blanc": false,
           "lait": true,
           "noir": false,
           "caramel": false,
           "noix": false,
           "fruit": false,
           "liqueur": true
         },
         "description": " Douceur exotique - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
         "ingredients": "Liqueur aromatisée à la cerise enrobée de chocolat au lait. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux"
     },
     {
       "id": "4" ,
       "title": "Blanc Passion",
       "price": 5.99,
       "note" : 5,
       "image": "images/produit4.jpg",
       "category": {
           "blanc": true,
           "lait": false,
           "noir": false,
           "caramel": false,
           "noix": false,
           "fruit": false,
           "liqueur": false
         },
         "description": "Blanc Passion - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
         "ingredients": "Pâte à la noix de coco enrobée de chocolat blanc. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux"
     },
     {
       "id": "5" ,
       "title": "Douceur croquante",
       "price": 2.99,
       "note" : 3,
       "image": "images/produit5.jpg",
       "category": {
           "blanc": false,
           "lait": true,
           "noir": false,
           "caramel": false,
           "noix": true,
           "fruit": false,
           "liqueur": false
         },
         "description": "Douceur croquante - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
         "ingredients": "Noisette enrobée de chocolat au lait. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux"
     },
     {
       "id": "6" ,
       "title": "Le Zèbre",
       "price": 19.99,
       "note" : 4,
       "image": "images/produit6.jpg",
       "category": {
           "blanc": true,
           "lait": true,
           "noir": false,
           "caramel": false,
           "noix": false,
           "fruit": false,
           "liqueur": false
         },
         "description": "Le Zèbre - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
         "ingredients": "Mixe de chocolat blanc et de chocolat au lait. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux"
     },
     {
       "id": "7" ,
       "title": "Coulis Fraise",
       "price": 9.99,
       "note" : 4,
       "image": "images/produit7.jpg",
       "category": {
           "blanc": false,
           "lait": true,
           "noir": true,
           "caramel": false,
           "noix": false,
           "fruit": true,
           "liqueur": true
         },
         "description": "Coulis Fraise - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
         "ingredients": "Morceau de fraise à la liqueur entièrement enrobée de chocolat au lait et d'éclat de noisettes. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux"
     },
     {
       "id": "8" ,
       "title": "Noir Passion",
       "price": 4.99,
       "note" : 5,
       "image": "images/produit8.jpg",
       "category": {
           "blanc": false,
           "lait": false,
           "noir": true,
           "caramel": false,
           "noix": false,
           "fruit": false,
           "liqueur": false
         },
         "description": "Noir Passion - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
         "ingredients": "Chocolat noir au coeur fondant. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux"
     },
     {
       "id": "9" ,
       "title": "Fantaisie",
       "price": 2.99,
       "note" : 5,
       "image": "images/produit9.jpg",
       "category": {
           "blanc": false,
           "lait": true,
           "noir": false,
           "caramel": true,
           "noix": true,
           "fruit": false,
           "liqueur": false
         },
         "description": "Fantaisie - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
         "ingredients": "Noix enrobée de chocolat au lait et parcemée de billes de sucre colorées. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux"
     },
     {
       "id": "10" ,
       "title": "Caramel Salé",
       "price": 14.99,
       "note" : 4,
       "image": "images/produit10.jpg",
       "category": {
           "blanc": false,
           "lait": false,
           "noir": false,
           "caramel": true,
           "noix": false,
           "fruit": false,
           "liqueur": false
         },
         "description": "Caramel Salé - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
         "ingredients": "Caramel au beurre salé avec un coeur en poudre chocolatée. Allergènes : SOJA, LAIT (LACTOSE). Contient de l'anhydride sulfureux"
     }
 ]`;
 let myProducts = JSON.parse(lstProducts);

// console.log(myProducts);
let myCaseTous = document.getElementById('checkBoxTous');
let caseAcocher = document.querySelectorAll('#checkbox input');
// for (myCase of caseAcocher){
//   myCase.onclick = function(){
//     alert('clic');
//   }
// }

for(let i=0; i < caseAcocher.length; i++){
  let myCase = caseAcocher[i];
  myCase.addEventListener('click', clickSurCaseAcocher, false);
}

let selecteur = document.querySelectorAll('#checkbox select');
for(let i=0; i < selecteur.length; i++){
  let myCase = selecteur[i];
  myCase.addEventListener('change', changeSurSelecteur, false);
}

function changeSurSelecteur(myEvent){
  let cible = myEvent.target.id;
  let newValue = Number(myEvent.target.value);
  //console.log(cible+" "+myEvent.target.value);
  let max= document.getElementById("prixMax");
  let min= document.getElementById("prixMin");

  switch(cible){
    case "prixMin":
      if (newValue > Number(max.value)){
        max.value=myEvent.target.value;
        console.error("prix min > prix max");
      }
      break;
    case "prixMax":
      if (newValue < Number(min.value)){
        min.value=myEvent.target.value;
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

function clickSurCaseAcocher(myEvent){
  let myCase = document.getElementById(myEvent.target.id);
  
  if (myEvent.target.id=="checkBoxTous" && myCase.checked){
    for(let i=1; i < caseAcocher.length; i++){
      let myCase = caseAcocher[i];
      myCase.checked = false;
    }
  }else if (myCase.checked){
    myCaseTous.checked=false;
  }
  delArticles();
  affArticles();

  // if (myCase.checked){
  //    console.log(myEvent.target.id+" true");
  //  }else{
  //    console.log(myEvent.target.id+" false");
  //  }
  
}

//console.log(lstArticles);
//console.log(`Ma page contient ${lstArticles.children.length} article(s)`);

//CREATION D'UN NOUVEAU ELEMENT DANS LE DOM
//VOIR chap 7, Découvrir le DOM, Créer de nouveaux éléments dans le DOM


function newArticles(fileImage,libelle,prix,etoile=2){
  let elemImg = document.createElement('img');
  // elemImg.src = `images/produit${id}.jpg`;
  elemImg.src = fileImage;
  elemImg.alt = libelle;
  elemImg.className = 'w-100 p-2';
  let elemH5 = document.createElement('h5');
  elemH5.textContent=libelle;
  let elemPrix = document.createElement('p');
  elemPrix.textContent=prix+' €';
  
  let elemBtn = document.createElement('button');
  elemBtn.textContent='ajouter au panier';
  elemBtn.className='btn btn-primary';
  elemBtn.type='button';
  
  let elemProduit = document.createElement('article');
  elemProduit.className = 'col-12 col-sm-6 col-md-4 pb-1';
  elemProduit.appendChild(elemImg);
  elemProduit.appendChild(elemH5);
  elemProduit.appendChild(elemPrix);
  (function(note){
    let elemNote = document.createElement('div');
    elemNote.style.height='35px';
    
    let elemImgEtoilePleine = document.createElement('i');
    elemImgEtoilePleine.className='fa-solid fa-star';
    elemImgEtoilePleine.style.color='#ffc800';
    for(var i=1; i<= note; i+=1){
      if(i==1) { 
        elemNote.appendChild(elemImgEtoilePleine); 
      }
      else {
        elemNote.appendChild(elemImgEtoilePleine.cloneNode()); 
      }
   }  
   let elemImgEtoileVide = document.createElement('i');
   elemImgEtoileVide.className='fa-regular fa-star';
   elemImgEtoileVide.style.color='#ffc800';
   for(var k=(note+1); k<6; k+=1){
    if(k==(note+1)) { 
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

function delArticles(){
  while(lstArticles.firstChild) {
    lstArticles.removeChild(lstArticles.firstChild);
  }
}

function affArticles(){
  var compteur=0;
  for (unProduits of myProducts){
    let bAffiche = false;
    let bPrix = false;
    let bNote = false;
    if (myCaseTous.checked){
      bAffiche = true;
    }else{
      for(let i=1; i < caseAcocher.length; i++){
        let myCase = caseAcocher[i];
        if (myCase.checked){
          if (myCase.id=='checkBoxChocoBlanc' && unProduits.category.blanc){bAffiche = true;}
          else if (myCase.id=='checkBoxChocoLait' && unProduits.category.lait){bAffiche = true;}
          else if (myCase.id=='checkBoxChocoNoir' && unProduits.category.noir){bAffiche = true;}
          else if (myCase.id=='checkBoxNoisette' && unProduits.category.noix){bAffiche = true;}
          else if (myCase.id=='checkBoxFruit' && unProduits.category.fruit){bAffiche = true;}
          else if (myCase.id=='checkBoxCaramel' && unProduits.category.caramel){bAffiche = true;}
          else if (myCase.id=='checkBoxLiqueur' && unProduits.category.liqueur){bAffiche = true;}
        }
      }
    }
    let price=Number(unProduits.price)
    let max= Number(document.getElementById("prixMax").value);
    let min= Number(document.getElementById("prixMin").value);
    if (price>=min && price<=max) {bPrix=true;}

    let quote=unProduits.note
    let quotemax= document.getElementById("noteMax").value;
    let quotemin= document.getElementById("noteMin").value;
    if (quote>=quotemin && quote<=quotemax) {bNote=true;}

    if (bAffiche && bPrix && bNote){
      newArticles(unProduits.image,unProduits.title,unProduits.price,unProduits.note);  
      compteur++;
    }
       //console.log(myProducts[unProduits].title);
  }
  
  if (compteur==0){
    let elemH2 = document.createElement('h2');
    elemH2.textContent="Aucun produit ne correspond à la recherche";
    lstArticles.appendChild(elemH2);
  
  }

}

affArticles();

// alert("pause");
// delArticles();

//newArticles();
//newArticles();

console.log(`Ma page contient ${lstArticles.children.length} article(s)`);





