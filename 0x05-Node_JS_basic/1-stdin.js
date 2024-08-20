// Affichage initial du message de bienvenue
console.log('Welcome to Holberton School, what is your name?');

// Écouteur pour l'événement 'readable'
process.stdin.on('readable', () => {
  // Lecture de l'entrée utilisateur lorsque des données sont disponibles
  const input = process.stdin.read();
  if (input !== null) {
    // Affichage du nom de l'utilisateur après la lecture de l'entrée
    process.stdout.write(`Your name is: ${input}`);
  }
});

// Écouteur pour l'événement 'end'
process.stdin.on('end', () => {
  // Message indiquant la fermeture du programme
  console.log('This important software is now closing');
});
