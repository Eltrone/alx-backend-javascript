const express = require('express');
const fs = require('fs').promises;

const app = express();
const databaseFile = process.argv[2]; // The CSV filename is passed as a command-line argument

// Function to read and process the CSV file asynchronously
async function readStudentsData(path) {
  try {
    const data = await fs.readFile(path, { encoding: 'utf8' });
    const lines = data.split('\n').filter((line) => line && !line.startsWith('firstname'));
    const students = lines.map((line) => line.split(','));
    const studentCount = students.length;
    const csStudents = students.filter((student) => student[3] === 'CS').map((student) => student[0]);
    const sweStudents = students.filter((student) => student[3] === 'SWE').map((student) => student[0]);

    return `This is the list of our students\nNumber of students: ${studentCount}\n`
               + `Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n`
               + `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Route for the root URL '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for '/students' that displays the student data
app.get('/students', async (req, res) => {
  try {
    const data = await readStudentsData(databaseFile);
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// The server listens on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
