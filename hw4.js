//Buat array dengan jumlah index 100
let Array = []
for (let i = 0; i < 100; i++) {
    Array.push(Math.floor(Math.random() * (100 - 0 + 1)) + 0);
}
console.log("Bilangan Acak ", Array)


//Pecah menjadi 2 array berdasarkan index ganjil ataupun index genap
let evenNumb = [];
let oddNumb = [];
for (let i = 0; i < Array.length; i++) {
    if (i % 2 === 0) {
        evenNumb.push(i);
    } else {
        oddNumb.push(i);
    }
}
console.log("Bilangan Genap " , evenNumb)
console.log("Bilangan Ganjil " ,  oddNumb)


//Mencari perhitungan min, max
function maxminNumb(Array) {
    let minValue = Array[0]
    let maxValue = Array[0]
    for (let i = 0; i < Array.length; i++) {
        if (minValue > Array[i]) {
            minValue = Array[i]
        }
        if (maxValue < Array[i]) {
            maxValue = Array[i]
        }
    }
    return {minValue, maxValue}
}

minEven=maxminNumb(evenNumb)
maxEven=maxminNumb(evenNumb)

console.log("nilai minimum dari array genap " , minEven)
console.log("nilai maximum dari array genap " , maxEven)

function maxminNumbs(Array) {
    let minValues = Array[0]
    let maxValues = Array[0]
    for (let i = 0; i < Array.length; i++) {
        if (minValues > Array[i]) {
            minValues = Array[i]
        }
        if (maxValues < Array[i]) {
            maxValues = Array[i]
        }
    }
    return {minValues, maxValues}
}

minOdd=maxminNumbs(oddNumb)
maxOdd=maxminNumbs(oddNumb)
console.log("nilai minimum dari array ganjil " , minOdd)
console.log("nilai maximum dari array ganjil " , maxOdd)


//Mencari perhitungan total dan rata-rata
function calcEvenOdd(Array) {
    let calcEvenOdd = 0
    for (let i = 0; i < Array.length; i++) {
        calcEvenOdd += Array[i]
    }
    return calcEvenOdd
}
calcEven=calcEvenOdd(evenNumb)
calcOdd=calcEvenOdd(oddNumb)

console.log("total genap ", calcEven)
console.log("total ganjil",calcOdd)

avrgEven = calcEven / evenNumb.length
console.log("rata-rata genap " , avrgEven)

avrgOdd = calcOdd / oddNumb.length
console.log("rata-rata ganjil " , avrgOdd)


//Membandingkan hasil kedua array
if (calcEven == calcOdd) {
    console.log("nilai total dari bilangan ganjil genap sama")
} else if (calcEven < calcOdd) {
    console.log("nilai total genap lebih kecil dari nilai total ganjil")
} else {
    console.log("nilai total genap lebih besar dari nilai total ganjil")
}

if (avrgEven == avrgOdd) {
    console.log("nilai rata-rata genap sama dengan nilai rata-rata ganjil")
} else if (avrgEven < avrgOdd) {
    console.log("nilai rata-rata genap lebih kecil dari nilai rata rata ganjil")
} else {
    console.log("nilai rata-rata ganjil lebih kecil dari rata rata genap")
}
