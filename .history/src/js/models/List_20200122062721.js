import uniqid from 'uniqid';

export default class List {
    constructor() {
        this.items = [];
    }

    additem (count, unit, ingredient) {
        const item = {
            count,
            unit,
            ingredient
        }
    }

    deleteItem(id) {
        const index = this.items.findIndex(el => el.id === id);
        // [2, 4, 8] splice(1, 2) -> returns [4, 8], original array is [2]
        // [2, 4, 8] slice(1, 2) -> returns 4, original array is [2, 4, 8]
        this.items.splice(index, 1);
    }
}