// alert("Bonjour de javascript!");
//console.log(window.document);
// localStorage.setItem("user","DAURES Mickael"); //ecrit
// var myUser=localStorage.getItem("user"); //lit
// console.log(myUser);
// localStorage.removeItem("user"); //supprime

//  var caddies = new Array(0,0,0,0,0,0,0,0,0,0);
//  caddies[0]++ ;
//  caddies[9]++ ;
// var mesAchats = caddies.join(",");
// //console.log(mesAchats);
// localStorage.setItem("caddies",caddies);


var caddies = new Array(0,0,0,0,0,0,0,0,0,0);
if (!localStorage.getItem("caddies")) {
} else {
   let texte = new Array();
   texte = localStorage.getItem("caddies").split(",");
    for (var i=0;i<texte.length;i++){
      caddies[i] = Number(texte[i]);
   }
}

console.log(caddies);






