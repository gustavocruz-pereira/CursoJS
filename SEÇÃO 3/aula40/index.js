// Break Continue

const numeros = [1, 2, 3, 4, 5, 6];
for (let num of numeros) {
    if (num === 3) {
        continue;
    }

    if (num === 4) {
        console.log(num)
        break
    }
    console.log(num)


}