// Validation du formulaire de contact
document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Récupération des valeurs des champs
    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    // Vérification des champs vides
    if (nom === "" || email === "" || message === "") {
        alert("Tous les champs doivent être remplis !");
        event.preventDefault();  // Empêche l'envoi du formulaire si un champ est vide
    } else {
        alert("Formulaire envoyé avec succès !");
    }
});

// Effet de survol sur les projets
function ajouterEffetSurvol(idProjet) {
    var projet = document.getElementById(idProjet);
    
    projet.addEventListener("mouseover", function() {
        projet.style.color = "blue";  // Changer la couleur au survol
    });

    projet.addEventListener("mouseout", function() {
        projet.style.color = "black";  // Remettre la couleur d'origine en sortant
    });
}

// Appliquer l'effet aux projets
ajouterEffetSurvol("projet1");
ajouterEffetSurvol("projet2");
ajouterEffetSurvol("projet3");
