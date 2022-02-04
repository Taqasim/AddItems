let i = 0;
let create = document.getElementById("create");
let reset = document.getElementById("reset");
let input = document.getElementById("item");
let div = document.getElementById("contenu_ajoute");
let textes = [];

create.addEventListener("click", add);

reset.addEventListener("click", efface);

function add(event) {
  event.preventDefault();
  tableau();
  i = boucle(i);
}

function boucle(j) {
  while (j < textes.length) {
    div.innerHTML +=
      "<p>" +
      textes[j] +
      ' <button class="reset_alone" onclick="reset_alone(' +
      j +
      ')">Reset</button></p>';
    j++;
  }
  return textes.length;
}

function efface() {
  div.innerHTML = "";
}

function reset_alone(item_efface) {
  textes.splice(item_efface, 1);
  efface();
  i = boucle(0);
}

function tableau() {
  if (input.value != "") {
    textes.push(item.value);
    input.value = "";
  }
}
