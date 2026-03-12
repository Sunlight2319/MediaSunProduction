function verifier() {
    var secret = 7;
    var valeur = document.getElementById("nombre").value;

    if(valeur == secret){
        document.getElementById("resultat").innerHTML = "Bravo ! Vous avez trouvé.";
    } else {
        document.getElementById("resultat").innerHTML = "Incorrect. Essayez encore.";
    }
}