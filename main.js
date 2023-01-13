let myBody = document.getElementsByTagName("body")[0];

let contentFirstTitle = myBody.children.item(2).firstElementChild;
console.log(contentFirstTitle);

let titreNiv3 = document.getElementsByTagName("h3")[1];
console.log(titreNiv3);

let beforeTitreNiv3 = document.getElementsByTagName("h3")[1].previousElementSibling;
console.log(beforeTitreNiv3);

let nextPetitParagraphe = document.getElementsByTagName("p")[1].nextElementSibling;
console.log(nextPetitParagraphe);

let parentImportant = document.getElementsByTagName("li")[0].parentElement;
console.log(parentImportant);

let firstParent = document.getElementsByTagName("ul")[0].firstElementChild;
console.log(firstParent);

let nextImportant = document.getElementsByTagName("li")[3].nextElementSibling;
console.log(nextImportant);

let nextNextTxtGeneral = document.getElementsByTagName("p")[3].nextElementSibling.nextElementSibling;
console.log(nextNextTxtGeneral);

let span = document.getElementsByTagName("span")[1].parentElement.nextElementSibling;
console.log(span);

let bold = document.getElementsByTagName("b")[2].parentElement.parentElement.previousElementSibling.children.item(0).children.item(0);
console.log(bold);

let grandPara = document.querySelector(".grandParagraphe");
console.log(grandPara);

let liste = Array.from(document.getElementsByTagName("li"));
for (const key in liste) {
    console.log(liste[key]);
}
