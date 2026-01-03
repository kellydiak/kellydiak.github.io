function includeHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

/* Création d'une fonction qui va prendre l'id présent de le ficher html,
puis qui va associer le chemin du fichier dans le projet*/
includeHTML("header", "extrait/header.html");
includeHTML("footer", "extrait/footer.html");