// ! Scope kapsama demek.

// ! Global Scope: Tüm kodda erişilebilen değişkenlerdir.
// ! Local Scope: Sadece tanımlandığı blokta erişilebilen değişkenlerdir.
// ! Block Scope: Sadece tanımlandığı blokta (if, for, vb.) erişilebilen değişkenlerdir.

// * var: Fonksiyon içinde tanımlanan değişkenlerdir. Fonksiyon dışında erişilemezler.
// * let: Blok içinde tanımlanan değişkenlerdir. Blok dışında erişilemezler.
// * const: Değeri atanmış ve değiştirilemeyen değişkenlerdir. 


function selamVer(){
    var mesaj =  "Hey";
    console.log(mesaj);
} 

selamVer();

let isim = "Buse"; // String tipte 
console.log(typeof isim);
console.log(isim);

// ! Sayı olan herhangi bir değişken number olarak geçer.

let insan = {
    // * object veri tipi 
    isim: "Buse",
    yaş: 23,
    meslek: "Yazılımcı"
}

let dizi= [1,2,3,4] // ! object tipindedir.


// ? ** operatörü bir sayının üssünü almak için kullanılır. 
// ?   2**3 = 8 demek.

let a = 5; // ! Atama operatörü

// * == eşittir. 
console.log(a == 5); // ? true döner.

console.log(5 == "5"); // İçindeki değerler aynı olduğu için true döner.

console.log(5 === "5") // ! false döner çünkü birisi string birisi number.

// * Diyalog kutuları : Popup'ta gösterilir.

alert("Merhaba");

// * Prompt(): Kullanıcıdan bilgi almak için kullanılır.

let isim1 = prompt("İsminizi girin: ");
console.log(isim1);

// * confirm: Onay kutusu gösterir.

let onay = confirm("Devam etmek istiyor musunuz?");
console.log(onay);