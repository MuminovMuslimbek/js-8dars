// for & ernary
// N1
// for (let i1 = 1; i1 <= 50; i1++) {
//     i1 % 5 == 0 && i1 % 3 == 0 ? console.log("5 va 3 ga bo‘linadi") : i1 % 5 == 0 ? console.log("5 ga bo‘linadi") : i1 % 3 == 0 ? console.log("3 ga bo‘linadi") : null;
// }
// N2
let total = 0
for (let i2 = 30; i2 <= 70; i2++) {
    total += i2 % 2 == 0 ? i2 : 0;
}
console.log(total);