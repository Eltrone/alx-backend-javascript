// Utilisation du module readline pour gérer l'entrée/sortie standard.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Affiche le message de bienvenue.
console.log('Welcome to Holberton School, what is your name?');

// Gestion de l'entrée de l'utilisateur.
rl.on('line', (input) => {
  console.log(`Your name is: ${input}`);
  // Vérifie si l'entrée vient d'un terminal ou d'un pipe.
  if (rl.isTTY) {
    rl.close(); // Ferme l'interface de lecture après avoir reçu l'entrée si c'est interactif.
  }
});

// Événement 'close' déclenché par rl.close().
rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0); // Assure que le programme se termine proprement.
});
