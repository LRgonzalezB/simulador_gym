
const planesNutricionales = [
    { objetivo: "aumentar masa muscular", proteina: 2, carbohidratos: 4, min_imc:0 , max_imc:18, message: "Tu peso es normal, ¡sigue así!" }, 
    { objetivo: "mantenerse saludable", proteina: 1.6, carbohidratos: 2.5, min_imc:19 , max_imc:24, message: "Tu peso es normal, ¡sigue así!" },
    { objetivo: "perder peso", proteina: 1.8, carbohidratos: 1.5, min_imc:25 , max_imc:29, message: "Ten cuidado, ya tienes sobrepeso."  },
    { objetivo: "perder peso con ejercicio", proteina: 2, carbohidratos: 2, min_imc:30 , max_imc:50, message: "Debes buscar ayuda, tienes obesidad." },
]
let weight = document.getElementById("weight")
let size = document.getElementById("size")
let calcular = document.getElementById("calcular_imc")
let resultImc = document.getElementById("resultImc")

calcular_imc.onclick = () => {
    let imc = weight.value / (size.value ** 2);

    let buscarNumero = planesNutricionales.filter((buscar) =>{
        return imc >= buscar.min_imc && imc <= buscar.max_imc;
    })

    let protein_per_day = weight.value * buscarNumero[0].proteina
    let carb_per_day = weight.value * buscarNumero[0].carbohidratos

    let print = document.createElement("h3")
    print.innerHTML = `tu indice de masa corporal es ${imc.toFixed(2)}`;
    

    let message = buscarNumero[0].message;

    console.log(buscarNumero[0].proteina)
    resultImc.innerHTML = "";

    let messageResultImc = document.createElement("div");
    messageResultImc.innerHTML = `<h3> tu indice de masa corporal es ${imc.toFixed(2)}</h3>
    <p>${message}</p>
    <p>Tu consumo de proteina util por dia es ${protein_per_day}g</p>
    <p>Tu consumo de carbohidratos por dia es ${carb_per_day}g</p>
    `
    resultImc.appendChild(messageResultImc)
}



  