let palpites = [];
let textoPalpites = document.querySelector("#palpites");
let bia = document.querySelector("#bia");
let btnred = document.getElementById("butaovermei");
let txtfinal = document.getElementById("textofinal");
let palpiteBia = (Math.random() * 100).toFixed();

if(palpites.length < 5){
    function receberPalpite(palpite){
        if(palpites.length < 5) {
            
        }
        for(let i = 0; i < palpites; i++) {
            if(input.value == palpites[i]) {
                alert("Este palpite já foi utilizado");
            }
        }
        palpites.push(input.value);
        input.value = "";
        textoPalpites.innerHTML = palpites.join("-");
    }
} else {
    alert("Suas chances acabaram");
    bia.src = "./assets/bia-triste.png";
    palpites = [];
}