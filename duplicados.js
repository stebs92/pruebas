const arry = [1, 2, 'perro', 3, 4, 3, 5, 1, 5, 'perro', 3, 4, 'gato'];

function toFindDuplicates(arry) {
    const uniqueElements = new Set(arry);
    const filteredElements = arry.filter(item => {
        if (uniqueElements.has(item)) {
            uniqueElements.delete(item);
        } else {
            return item;
        }
    });

    return [...new Set(filteredElements)]
}

const duplicateElements = toFindDuplicates(arry);
const lastElement = duplicateElements.pop(); 
console.log(`los elementos repetidos son ${duplicateElements} y ${lastElement}`);
