import Building from './5-building.js';

export default class SkyHighBuilding extends

Building {
constructor(sqft, floors) {
super(sqft); // Appel du constructeur de la classe parente Building avec le paramètre sqft
this._floors = floors;
}

get sqft() {
return this._sqft;
}

get floors() {
return this._floors;
}

evacuationWarningMessage() {
return Evacuate slowly the ${this._floors} floors;
}
}
