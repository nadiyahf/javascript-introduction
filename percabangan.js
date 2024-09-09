const prompt = require('prompt-sync')({ sigint: true });

const password = prompt('Enter password: ');
const validPassword = 'password'

//perbandingan password (string) vs valid password (string)
if (password === validPassword) {
    //jika benar
    console.log("Selamat datang bos!")
}
else {
    //jika salah
    console.log("Password Salah, coba lagi!")
}

//print ini apa pun yang terjadi
console.log("Terimakasih sudah menggunakan aplikasi kami")
