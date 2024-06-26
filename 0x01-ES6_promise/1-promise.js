// 1-promise.js
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      // Si le paramètre `success` est vrai, résolvez la promesse avec un objet spécifique
      resolve({
        status: 200,
        body: 'Success'
      });
    } else {
      // Si le paramètre `success` est faux, rejetez la promesse avec un message d'erreur
      reject(new Error("The fake API is not working currently"));
    }
  });
}
