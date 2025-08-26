let boy, kilo;

function hesapla(boy , kilo )
{
    let indeks = kilo / (boy * boy);

    if(indeks<18.5)
    {
        console.log("Zayıf");
    }
    else if(indeks>=18.5 && indeks<24.9)
    {
        console.log("Normal");
    }
    else if(indeks>=25 && indeks<29.9)
    {
        console.log("Fazla Kilolu");
    }
    else
    {
        console.log("Obez");
    }
    return indeks;
}

boy = Number(prompt("Boyunuzu (metre cinsinden) girin: "));
kilo = Number(prompt("Kilonuzu (kg cinsinden) girin: "));

let sonuc= hesapla(boy,kilo);
console.log("Vücut Kitle İndeksiniz: " + sonuc);
