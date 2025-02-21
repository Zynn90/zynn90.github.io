const nama = "Hafiz";
let usia = 10;

function generateBiodata() {
    if (usia > 10 && usia < 18) {
         // ini adalah kondisi awal
        console.log('anda bocah')
    }else {
        // ini adalah kondisi setelah
        console.log('anda bujang')
    }
}

console.log(nama)
console.log(usia)

generateBiodata( );