// Définition de l'interface Teacher
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number; // Attribut optionnel
    [propName: string]: any; // Pour ajouter d'autres attributs non spécifiés
}

// Définition de l'interface Directors qui étend Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

// Définition de l'interface pour la fonction printTeacher
interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implémentation de la fonction printTeacher
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// Création d'une instance de Teacher
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

// Création d'une instance de Directors
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

// Tests des fonctions et affichage des résultats
console.log(teacher3);
console.log(director1);
console.log(printTeacher("John", "Doe")); // Affichera "J. Doe"
