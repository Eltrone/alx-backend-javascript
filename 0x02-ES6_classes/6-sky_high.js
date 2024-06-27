// Importation de la classe Building
import Building from './5-building';

// Définition de la classe SkyHighBuilding qui étend Building
export default class SkyHighBuilding extends Building {
  // Constructeur avec les paramètres sqft et floors
  constructor(sqft, floors) {
    super(sqft); // Appel du constructeur de la classe mère avec sqft
    this._floors = floors; // Initialisation de l'attribut privé _floors
  }

  // Getter pour récupérer le nombre d'étages
  get floors() {
    return this._floors;
  }

  // Setter pour définir le nombre d'étages
  set floors(value) {
    this._floors = value;
  }

  // Méthode pour afficher un message d'évacuation
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
