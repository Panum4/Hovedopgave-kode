/* 
const: Laver en variabel og kalder temaKnap, så jeg kan bruge den senere i koden. "const" betyder at variablen ikke kan ændres senere, hvilket er godt her fordi knappen ikke skal ændres til noget andet.

document:
Betyder hele HTML-dokumentet/siden.

getElementById():
Finder HTML-elementet (knappen) ud fra dets ID, som jeg har sat til "tema-knap" i HTML'en. Det gør at JavaScript kan finde knappen og gøre noget med den, som at lytte efter klik.

*/
const temaKnap = document.getElementById("tema-knap");



/*
addEventListener():
Lytter efter en handling/event på elementet.

"click":
Den handling der lyttes efter. Her et klik med mus/finger.

function () {
En function er en blok kode som først kører,
når eventet sker (altså når knappen klikkes). Det er altså koden inde i functionen (document.body.classList.toggle("dark-mode");) der bestemmer hvad der sker, når knappen klikkes.
*/
temaKnap.addEventListener("click", function () {



/* 
document:
Den søger på hele HTML-dokumentet/siden.

body:
Vælger <body> elementet i HTML'en.

classList:
Giver adgang til elementets classes.

toggle():
Tilføjer classen hvis den ikke findes,
og fjerner den igen hvis den allerede findes.

"dark-mode":
Navnet på den class som tilføjes/fjernes.
CSS reagerer derefter på body.dark-mode: “style body når den har classen dark-mode”.
*/
  document.body.classList.toggle("dark-mode");

});