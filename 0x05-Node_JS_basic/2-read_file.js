const fs = require('fs');

function countStudents(path) {
  // Tentative de lecture du fichier de manière synchrone
  let data;
  try {
    data = fs.readFileSync(path, { encoding: 'utf8' });
  } catch (error) {
    // Si le fichier n'existe pas, une erreur est lancée
    throw new Error('Cannot load the database');
  }

  // Traitement des données du fichier
  const lines = data.split('\n');
  // Filtre les lignes vides
  const students = lines.filter((line) => line.length > 0 && !line.startsWith('firstname'));

  // Calcul du nombre total d'étudiants
  console.log(`Number of students: ${students.length}`);

  // Regroupement des étudiants par domaine
  const fields = {};
  students.forEach((line) => {
    const student = line.split(',');
    const field = student[3];
    const firstname = student[0];
    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(firstname);
  });

  // Affichage du nombre d'étudiants par domaine et de la liste des prénoms
  for (const [field, firstnames] of Object.entries(fields)) {
    console.log(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
  }
}

module.exports = countStudents;
