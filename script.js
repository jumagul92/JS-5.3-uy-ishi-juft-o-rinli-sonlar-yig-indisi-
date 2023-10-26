const array =[2, 4, 6, 13, 34, 3, 5, 54, 23, 24, 34, 1, 23, 53, 23]

let summ = 0

for (let i = 0; i < array.length; i++) {
    if (i%2==0) {
        summ+= array[i]
    }
}
console.log(summ);