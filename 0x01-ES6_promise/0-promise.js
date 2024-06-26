export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Supposons que cette opération soit asynchrone
    setTimeout(() => {
      // Ici, nous appelons `resolve` avec des données ou `reject` avec une erreur
      resolve("Data received");
      // ou, en cas d'erreur
      // reject(new Error("Failed to get data"));
    }, 1000);
  });
}
