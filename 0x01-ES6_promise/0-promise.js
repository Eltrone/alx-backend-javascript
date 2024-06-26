export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simuler une opération asynchrone réussie
    resolve("Operation réussie");

    // Alternativement, pour simuler une opération asynchrone échouée
    // reject(new Error("Échec de l'opération"));
  });
}
