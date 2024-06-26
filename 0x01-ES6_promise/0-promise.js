// Exporte une fonction qui retourne une promesse résolue.
export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    resolve("Opération réussie");
  });
}
