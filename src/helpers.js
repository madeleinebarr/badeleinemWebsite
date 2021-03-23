
export function shuffle(array) {
    let newArray = [];
    let arrayCopy = [...array];
    for (let i = arrayCopy.length - 1; i >= 0; i--) {
        let j = Math.ceil(Math.random() * i);
        newArray.push(arrayCopy[j]);
        arrayCopy.splice(j, 1);
    }
    return newArray;
} 