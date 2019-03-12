
function pirma(teksts){
    var sadale = teksts.split("");
    var flip = sadale.reverse();
    var rezultats = flip.join("");
    return rezultats;
}
console.log(pirma("Testa teksts"));


function otra(sk1, sk2)
{
    if(sk1 == 5 || sk2 == 5 || sk1 + sk2 == 5)
    {
        return console.log("Patiess");
    }
    else
    {
        return console.log("Nepatiess");
    }
}
otra (3, 2);