let checkTous = document.getElementById('checkBoxTous');

if (checkTous.checked){
   console.log(`Tous coche`);
}else{
   console.log(`Tous decoche`);
}

let lstArticles = document.getElementById('myArticle');

console.log(lstArticles);
console.log(`Ma page contient ${lstArticles.children.length} article(s)`);

//CREATION D'UN NOUVEAU ELEMENT DANS LE DOM
//VOIR chap 7, Découvrir le DOM, Créer de nouveaux éléments dans le DOM


