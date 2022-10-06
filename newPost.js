function post_en_url(url, nom) {
//Création dynamique du formulaire
var form = document.createElement(form);
form.setAttribute(method, POST);
form.setAttribute(action, url);
//Ajout des paramètres sous forme de champs cachés
for(var cle in parametres) {
if(parametres.hasOwnProperty(cle)) {
var champCache = document.createElement(input);
champCache.setAttribute(type, hidden);
champCache.setAttribute(name, nom);
form.appendChild(champCache);
}
}
//Ajout du formulaire à la page et soumission du formulaire
document.body.appendChild(form);
form.submit();
}