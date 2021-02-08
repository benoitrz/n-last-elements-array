class NLastElementsArray {
    constructor(size = 1) {
        this.maxSize = size;
        this.elements = [];
    }
    add(element) {
        if (this.elements.length === this.maxSize) {
            this.elements = this.elements.slice(1);
        }
        this.elements = [...this.elements, element];
    }
    getElement(index) {
        if (!Number.isInteger(index)) throw new Error('Invalid index type');
        if (index <= this.maxSize) return this.elements[index];
        else throw new Error('Out of bound index');
    }
    getAll() {
        return this.elements;
    }
    find(comparator) {
        if (comparator) return this.elements.filter(comparator);
        else return this.getAll();
    }
}

module.exports = NLastElementsArray;