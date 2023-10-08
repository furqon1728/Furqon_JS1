// Contoh If Else
console.log("Contoh If Else")
let nilai = 40;

if (nilai >=60) {
    console.log("Nilai anda cukup baik");
} else {
    console.log("Belajar lebih giat lagi");
}

// Contoh Nested If
console.log("\nContoh Nested If")

let rata = 20;

if (rata >= 80) {
    grade = 'A';
} else if (rata >= 65) {
    grade = 'B';
} else if (rata >= 56) {
    grade = 'C';
} else if (rata >= 40) {
    grade = 'D';
} else{
    grade = 'E';
}

console.log("Nilai rata-rata = " + rata);
console.log("Grade = " + grade);

// Contoh Switch Case
console.log("\nContoh Switch Case")

let tepukan = 10;

switch (tepukan) {
    case 1:
        console.log("Kalau kau suka hati tepuk tangan");
        console.log("PROK!! PROKT!!");
        break;
    case 2:
        console.log("Kalau kau suka hati injak bumi");
        console.log("BOOOM!! BOOOM!!");
        break;
    case 3:
        console.log("Kalau kau suka hati putar badan");
        console.log("SWING!! SWING!!");
        break;

    default:
        console.log("Kalau kau tidak senang angkat kaki");
        console.log("HUSHH!! HUSHH!!")
        break;
}

// Contoh For Statement
console.log("\nContoh For Statement")

let bilAwal = 0, bilAKhir = 20;

console.log("Bilangan genap dari " + bilAwal + " sampai " + bilAKhir + " :")
for (let i = bilAwal; i <= bilAKhir; i++) {
    if (i%2 ==0) {
        console.log(i + " ");
    }
    
}

// Contoh While
console.log("\nContoh While")

let jumlah = 1;

while (jumlah <=10) {
    console.log(jumlah);
    jumlah++;
}

// Contoh Do While
console.log("\nContoh Do While")

let jumlah2 = 1;

do {
    console.log(jumlah2);
    jumlah2++;
} while (jumlah2 <= 10);

// Contoh Function
console.log("\nContoh Function")

function tambah(a = 0, b = 0) {
    hasil = a + b;
    console.log("Hasil\t" + a + " + " + b + " = " + hasil);
}
function kurang(a = 0, b = 0) {
    hasil = a - b;
    console.log("Hasil\t" + a + " - " + b + " = " + hasil);
}
function kali(a = 0, b = 0) {
    hasil = a * b;
    console.log("Hasil\t" + a + " x " + b + " = " + hasil);
}
function bagi(a = 0, b = 0) {
    hasil = a / b;
    console.log("Hasil\t" + a + " / " + b + " = " + hasil);
}

tambah(6, 2);
kurang(6, 2);
kali(6, 2);
bagi(6, 2);