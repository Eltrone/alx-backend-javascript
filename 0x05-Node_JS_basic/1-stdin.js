// Importation de la bibliothèque readline pour faciliter la lecture de l'entrée standard
const readline = require('readline');

// Création d'une interface readline pour gérer l'entrée/sortie standard
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Affichage du message initial
console.log('Welcome to Holberton School, what is your name?');

// Attente de l'entrée de l'utilisateur
rl.on('line', (input) => {
    console.log(`Your name is: ${input}`);
    rl.close(); // Fermeture de l'interface après l'entrée de l'utilisateur
});

// Gestionnaire pour l'événement 'close' de readline
rl.on('close', () => {
    console.log('This important software is now closing');
    process.exit(0); // Sortie du programme
});
