
let checkTous = document.getElementById('checkBoxTous');

if (checkTous.checked){
   console.log(`Tous coche`);
}else{
   console.log(`Tous decoche`);
}

let lstArticles = document.getElementById('myArticle');
let lstProducts = `[{
       "id": "1" ,
       "title": "Cerisier",
       "price": 2.99,
       "note" : 5,
       "image": "./images/produit1.jpg",
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
       "image": "./images/produit2.jpg",
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
       "image": "./images/produit3.jpg",
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
       "image": "./images/produit4.jpg",
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
       "image": "./images/produit5.jpg",
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
       "image": "./images/produit6.jpg",
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
       "image": "./images/produit7.jpg",
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
       "image": "./images/produit8.jpg",
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
       "image": "./images/produit9.jpg",
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
       "image": "./images/produit10.jpg",
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

console.log(myProducts);


//console.log(lstArticles);
console.log(`Ma page contient ${lstArticles.children.length} article(s)`);

//CREATION D'UN NOUVEAU ELEMENT DANS LE DOM
//VOIR chap 7, Découvrir le DOM, Créer de nouveaux éléments dans le DOM

/* <article class="col-12 col-sm-6 col-md-4 border border-primary pb-1">
<img class="w-100 p-2" src="images/produit4.jpg" alt="bonbon coeur">
<h5>Nom produit</h5>
<p>prix €</p>
<p>Note</p>
<button type="button" class="btn btn-primary">ajouter au panier</button>
</article> */
let elemImg = document.createElement('img');
elemImg.src = 'images/produit5.jpg';
elemImg.alt = 'bonbon';
elemImg.className = 'w-100 p-2';
let elemH5 = document.createElement('h5');
elemH5.textContent='nom du produit';
let elemPrix = document.createElement('p');
elemPrix.textContent='13.55 €';
let elemNote = document.createElement('p');
elemNote.textContent='miam miam';
let elemBtn = document.createElement('button');
elemBtn.textContent='ajouter au panier';
elemBtn.className='btn btn-primary';
elemBtn.type='button';
let elemProduit = document.createElement('article');
elemProduit.className = 'col-12 col-sm-6 col-md-4 border border-primary pb-1';
elemProduit.appendChild(elemImg);
elemProduit.appendChild(elemH5);
elemProduit.appendChild(elemPrix);
elemProduit.appendChild(elemNote);
elemProduit.appendChild(elemBtn);

lstArticles.appendChild(elemProduit);

console.log(`Ma page contient ${lstArticles.children.length} article(s)`);




