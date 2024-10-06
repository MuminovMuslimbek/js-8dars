// for && ernary ga oid
// N1
// for (let i1 = 1; i1 <= 50; i1++) {
//     i1 % 5 == 0 && i1 % 3 == 0 ? console.log("5 va 3 ga bo‘linadi") : i1 % 5 == 0 ? console.log("5 ga bo‘linadi") : i1 % 3 == 0 ? console.log("3 ga bo‘linadi") : null;
// }
// N2
// let total2 = 0
// for (let i2 = 30; i2 <= 70; i2++) {
//     total2 += i2 % 2 == 0 ? i2 : 0;
// }
// console.log(total2);
// N3
// let total3 = 0;
// for (let i3 = -20; i3 <= 20; i3++) {
//     (i3 > 0 && i3 % 2 !== 0) ? total3++ : null;
// }
// console.log("Musbat va toq sonlar soni: " + total3);
// N4
// for (let i4 = 1; i4 <= 100; i4++) {
//     i4 % 2 == 0 || i4 % 7 == 0 ? console.log(i4 + "- maxsus son") : null;
// }

//break && continue ga oid

// N1
// for (let i1 = 1; i1 <= 100; i1++) {
//     if (i1 == 25) {
//         break
//     }
//     console.log(i1);
// }
// N2
// for (let i2 = 1; i2 <= 20; i2++) {
//     if (i2 % 2 == 0) {
//         continue
//     }
//     console.log(i2);
// }
// N3
// for (let i3 = 1; i3 <= 50; i3++) {
//     if (i3 >= 30) {
//         break
//     } else if (i3 >= 10) {
//         console.log(i3);
//     }
// }

// Switch case ga oid
// N1
// let week = +prompt("Haftani kunini kiriting")
// switch (week) {
//     case 1:
//         console.log("Dushanba");
//         break;
//     case 2:
//         console.log("Seshanba");
//         break;
//     case 3:
//         console.log("Chorshanba");
//         break;
//     case 4:
//         console.log("Payshanba");
//         break;
//     case 5:
//         console.log("Juma");
//         break;
//     case 6:
//         console.log("Shanba");
//         break;
//     case 7:
//         console.log("Yakshanba");
//         break;
//     default:
//         console.log("Siz noto`g`ri hafta kunini kiritdingiz");
//         break;
// }

// N2
// let month = +prompt("Oyni sonini kiriting")
// switch (month) {
//     case 1:
//         console.log("Yanvar");
//         console.log("Qish fasliga tegishli");
//         break;
//     case 2:
//         console.log("Fevral");
//         console.log("Qish fasliga tegishli");
//         break;
//     case 3:
//         console.log("Mart");
//         console.log("Bahor fasliga tegishli");
//         break;
//     case 4:
//         console.log("Aprel");
//         console.log("Bahor fasliga tegishli");
//         break;
//     case 5:
//         console.log("May");
//         console.log("Bahor fasliga tegishli");
//         break;
//     case 6:
//         console.log("Iyun");
//         console.log("Yoz fasliga tegishli");
//         break;
//     case 7:
//         console.log("Iyul");
//         console.log("Yoz fasliga tegishli");
//         break;
//     case 8:
//         console.log("Avgust");
//         console.log("Yoz fasliga tegishli");
//         break;
//     case 9:
//         console.log("Sentyabr");
//         console.log("Kuz fasliga tegishli");
//         break;
//     case 10:
//         console.log("Oktyabr");
//         console.log("Kuz fasliga tegishli");
//         break;
//     case 11:
//         console.log("Noyabr");
//         console.log("Kuz fasliga tegishli");
//         break;
//     case 12:
//         console.log("Dekabr");
//         console.log("Qish fasliga tegishli");
//         break;
//     default:
//         console.log("Siz noto`g`ri oy sonini kiritdingiz");
//         break;
// }

// N3
// let price = +prompt("1 dan 5 gacha bo‘lgan raqamlarni kiriting")
// switch (price) {
//     case 1:
//         console.log("Juda yomon");
//         break;
//     case 2:
//         console.log("Yomon");
//         break;
//     case 3:
//         console.log("Qoniqarli");
//         break;
//     case 4:
//         console.log("Yaxshi");
//         break;
//     case 5:
//         console.log("A'lo");
//         break;
//     default:
//         console.log("Siz noto`g`ri son kiritdingiz, iltimos boshqatdan kiritib ko`ring");
//         break;
// }

// N4
// let definition = +prompt("1 dan 3 gacha raqam kiriting")
// switch (definition) {
//     case 1:
//         console.log("Ekonom tarifidasiz");
//         break;
//     case 2:
//         console.log("Standart tarifidasiz");
//         break;
//     case 3:
//         console.log("Premium tarifidasiz");
//         break;
//     default:
//         console.log("Siz noto`g`ri son kiritdingiz");
//         break;
// }

// N5
// let fruit = +prompt(" 1 dan 4 gacha bo‘lgan raqamlarni kiriting")
// switch (fruit) {
//     case 1:
//         console.log("Olma");
//         break;
//     case 2:
//         console.log("Apelsin");
//         break;
//     case 3:
//         console.log("Banan");
//         break;
//     case 4:
//         console.log("Uva");
//         break;
//     default:
//         console.log("Siz noto`g`ri son kiritdingiz");
//         break;
// }

// N6
// let password = +prompt("1 dan 3 gacha bo‘lgan variantlardan birini kiriting")
// switch (password) {
//     case 1:
//         console.log("Parolni tiklash");
//         break;
//     case 2:
//         console.log("Parolni o'zgartirish");
//         break;
//     case 3:
//         console.log("Chiqish");
//         break;
//     default:
//         console.log("Siz noto`g`ri son kiritdingiz");
//         break;
// }

// While, do…while ga oid

// N1
// let w1 = 1
// while (w1 <= 10) {
//     console.log(w1);
//     w1++
// }
// N2
// let w2 = 10
// while (w2 >= 1) {
//     console.log(w2);
//     w2--
// }

// N3
// let w3
// while (true) {
//     w3 = +prompt("Musbat son kiriting:")
//     if (w3 > 0) {
//         console.log("Kiritilgan musbat son:", w3);
//         break
//     } else {
//         console.log("Iltimos, musbat son kiriting.");
//     }
// }

// N4
// let w4 = 1
// do {
//     console.log(w4);
//     w4++
// } while (w4 <= 20);

// N5
// let w5 = prompt("Son kiriting");
// let totalW5 = 0;
// let w5$ = 0;

// do {
//     totalW5 += +w5[w5$];
//     w5$++;
// } while (w5$ < w5.length);

// console.log(totalW5);

// N6
// let w6 = +prompt("Son kiriting:")
// do {
//     console.log(w6);
//     w6 /= 2
// } while (w6 >= 1);

// N7
// let w7 = +prompt("Son kiriting:");
// let w7$ = 1;

// while (w7$ <= w7) {
//     if (w7$ % 2 == 1) {
//         console.log(w7$);
//     }
//     w7$++;
// }

// N8
// let start8 = +prompt("Boshlang'ich sonni kiriting")
// let finish8 = +prompt("Yakuniy sonni kiriting")
// while (start8 <= finish8) {
//     if (start8 % 3 == 0) {
//         console.log(start8);
//     }
//     start8++
// }

// N9
// let w9 = prompt("Son kiriting:");
// let total9 = w9.length - 1;
// let w9$ = "";

// while (total9 >= 0) {
//     w9$ += w9[total9];
//     total9--;
// }

// console.log(w9$);

// N10
// let w10 = +prompt("Fibonachi ketma-ketligi uchun son kiriting:");
// let a = 0;
// let b = 1;

// console.log(a);

// while (b <= w10) {
//     console.log(b);
//     let w10$ = b;
//     b = a + b;
//     a = w10$;
// }

// N11
let w11 = prompt("Son kiriting:");
let w11$ = 1;
let total11 = 0;

while (total11 < w11.length) {
    let total11$ = parseInt(w11[total11]);
    w11$ *= total11$;
    total11++;
}

console.log("Raqamlar ko'paytmasi:", w11$);