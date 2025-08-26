function station( tur , lt)
{
    let sonuc = 0;
    if(tur == "benzin")
    {
        sonuc = lt * 22.5;
    }
    else if(tur == "dizel")
    {
        sonuc = lt * 20.5;
    }
    else if(tur == "elektrik")
    {
        sonuc = lt * 15;
    }
    return sonuc;
}

let tip = prompt("Yakıt türünü girin (benzin, dizel, elektrik): ").toLowerCase();
let litre = Number(prompt("Kaç litre yakıt alacaksınız? "));

let tutar = station(tip,litre);
console.log("Ödemeniz gereken tutar: " + tutar + " TL");