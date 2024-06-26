// Exporte une fonction qui retourne une promesse.
export default function getResponseFromAPI() {
  // Crée et retourne une nouvelle Promesse.
  return new Promise((resolve, reject) => {
    // Simuler un comportement asynchrone, résout la promesse avec un message.
    resolve("Operation réussie");

    // Pour simuler une erreur, vous pouvez utiliser `reject` comme ceci :
    // reject(new Error("Échec de l'opération"));
  });
}
