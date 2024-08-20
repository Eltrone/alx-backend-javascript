const http = require('http'); // Importation du module http de Node.js

// Création du serveur HTTP
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' }); // En-tête HTTP avec un code de statut 200 et type de contenu texte
  res.end('Hello Holberton School!'); // Réponse envoyée au client
});

// Le serveur écoute sur le port 1245
app.listen(1245);

// Exportation de l'application pour des usages éventuels dans d'autres fichiers ou pour des tests
module.exports = app;
