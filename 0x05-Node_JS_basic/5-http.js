const http = require('http');
const fs = require('fs').promises;

const filename = process.argv[2]; // Le nom du fichier CSV est passé comme argument

function countStudents(path) {
  return fs.readFile(path, { encoding: 'utf8' })
    .then((data) => {
      const lines = data.split('\n').filter((line) => line && !line.startsWith('firstname'));
      const students = lines.map((line) => line.split(','));
      const studentCount = students.length;
      const csStudents = students.filter((student) => student[3] === 'CS').map((student) => student[0]);
      const sweStudents = students.filter((student) => student[3] === 'SWE').map((student) => student[0]);

      return `This is the list of our students\nNumber of students: ${studentCount}\n`
                   + `Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n`
                   + `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(filename)
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(error.message);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Resource not found');
  }
});

app.listen(1245);
module.exports = app;
