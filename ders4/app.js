// ? Koşul yapıları 

// if(koşul){
//     kodlar
// }
// else{
//    kodlar
// }

let yas = Number(prompt("Yaşınızı girin:"));
// ! String iken number'a çevirdi.
let para = Number(prompt("Parayı giriniz: "));

if ( yas > 20 && para > 1000)
{
    console.log("Kredi alabilirsiniz.");
}
else{
    console.log("Kredi alamazsınız.");
}

let sinav1 = Number(prompt("1. Sınav notunuzu girin: "));
let sinav2 = Number(prompt("2. Sınav notunuzu girin: "));
let sinav3 = Number(prompt("3. Sınav notunuzu girin: "));

let ort = ((sinav1*30)/100) + ((sinav2*30)/100) + ((sinav3*40)/100);

console.log("Ortalamanız: " + ort);

if(ort > 60)
{
    console.log("Tebrikler, geçtiniz!");
}
else{
    console.log("Kaldınız, seneye görüşürüz!");
}


let tckn = prompt("TC Kimlik Numaranızı girin: ");
let ad = prompt("Adınızı girin: ");

function bilgiGoster(tckn, ad){
    if(tckn.length == 11)
    {
        console.log("TC Kimlik Numaranız: " + tckn);
        console.log("Adınız: " + ad);
    }
    else{
        console.log("Geçersiz TC Kimlik Numarası");
    }
}

bilgiGoster(tckn, ad);
