// ---------------------------------------------------------------------------
// Codecademy Front-End Engineer Career Path - Challenge: dogFactory()
// ---------------------------------------------------------------------------

const dogFactory = (name, breed, weight) => {
    return {
        _name: name,
        get name() {
            return this._name;
        },
        set name(newName) {
            this._name = newName;
        },
        _breed: breed,
        get breed() {
            return this._breed;
        },
        set breed(newBreed) {
            this._breed = newBreed;
        },
        _weight: weight,
        get weight() {
            return this._weight;
        },
        set weight(newWeight) {
            this._weight = newWeight;
        },
        bark() {
            return 'ruff! ruff!';
        },
        eatTooManyTreats() {
            this._weight = this.weight + 1;
            return this._weight;
        },
    }
}