// Importation de la classe Car depuis 10-car.js
import Car from './10-car';

// Définition de la classe EVCar qui étend Car
class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Appel du constructeur parent
    this._range = range; // Initialisation de l'attribut range
  }

  // Redéfinition de la méthode cloneCar pour retourner une instance de Car
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}

// Exportation de la classe EVCar
export default EVCar;
