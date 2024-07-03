// Définition de l'interface Student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Création de deux étudiants
const student1: Student = {
    firstName: "Jean",
    lastName: "Dupont",
    age: 20,
    location: "Paris"
};

const student2: Student = {
    firstName: "Marie",
    lastName: "Curie",
    age: 22,
    location: "Strasbourg"
};

// Liste des étudiants
const studentsList: Student[] = [student1, student2];

// Fonction pour rendre un tableau HTML avec les données des étudiants
const renderTable = (): void => {
    const table = document.createElement('table');
    studentsList.forEach(student => {
        const row = table.insertRow();
        const firstNameCell = row.insertCell();
        const locationCell = row.insertCell();
        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;
    });
    document.body.appendChild(table);
};

// Appel de la fonction renderTable au chargement du document
document.addEventListener('DOMContentLoaded', renderTable);
