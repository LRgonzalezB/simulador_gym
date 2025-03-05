
// // const imc = (a, b) => a / (b ** 2);
// const proteinPerDay = (a, b) => a * b;
// const carbPerDay = (a, b) => a * b;

// let protein = 1.6;
// let carbohydrates = 1;


// // funcion para las preguntas


//     function requestNumber(message) {
//         let num;
//         do {
//             num = parseFloat(prompt(message));
//             if (isNaN(num) || num < 0) {
//                 alert("Por favor, ingrese un valor válido.");
//             }
//         } while (isNaN(num) || num < 0);
//         return num;
//     }


// // funcion que calcula el imc

// function calcImc() {
//     let weight = requestNumber("ingrese su peso en kg")
//     let size = requestNumber("ingrese su tamaño en metros")
//     let resultImc = imc(weight, size)

//     alert(`tu IMC es: ${resultImc.toFixed(2)}`)



// function recommendNutricionalPlan(weight) {
//    
//     ];
//     let opcion = parseInt(prompt(
//         "Elige tu objetivo:\n1- Aumentar masa muscular\n2- Mantenerte saludable\n3- Perder peso\n4- Perder peso con ejercicio"));

//         if (opcion >= 1 && opcion <= 4) {

//         let plan = planesNutricionales[opcion - 1]
//         alert(`${plan.objetivo} debes consumir ${proteinPerDay(weight, plan.proteina).toFixed(2)}g de proteina` + `y ${carbPerDay(weight, plan.carbohidratos).toFixed(2)}g de carbohidratospor dia.`)
//     } else {
//         alert("opcion no valida")
//     }
// }

// do {
// let opening = prompt("te puedo ayudar con el calculo de tu imc (si/no)").toLowerCase()

//     if (opening !== "si"){
//         alert("gracias vuelva pronto")
//         break
//     }

//     let {weight} = calcImc()

//     let decicion = prompt("te gustaria recibir recomendaciones de alimentacion? (si/no)").toLowerCase()

//     if (decicion === "si") {
//         recommendNutricionalPlan(weight)
//     }else{
//         alert("gracias vuelva pronto")
//     }

// } while (true);

const planesNutricionales = [
    { objetivo: "aumentar masa muscular", proteina: 2, carbohidratos: 4 },
    { objetivo: "mantenerse saludable", proteina: 1.6, carbohidratos: 2.5 },
    { objetivo: "perder peso", proteina: 1.8, carbohidratos: 1.5 },
    { objetivo: "perder peso con ejercicio", proteina: 2, carbohidratos: 2 },
]
let weight = document.getElementById("weight")
let size = document.getElementById("size")
let calcular = document.getElementById("calcular")
let resultImc = document.getElementById("resultImc")


calcular.onclick = () => {
    let imc = weight.value / (size.value ** 2);

    let print = document.createElement("h3")
    print.innerHTML = `tu indice de masa cooporal es ${imc.toFixed(2)}`;
    

    let message = "";

    switch (true) {
        case (imc >= 30):
            message = ("Debes buscar ayuda, tienes obesidad.");
            break;
        case (imc >= 25):
            message = ("Ten cuidado, ya tienes sobrepeso.");
            break;
        case (imc >= 18.5):
            message = ("Tu peso es normal, ¡sigue así!");
            break;
        default:
            message = ("Tu peso está por debajo de lo recomendado. Acude con tu médico.");
            break;
    }

    resultImc.innerHTML = "";

    let messageResultImc = document.createElement("div");
    messageResultImc.innerHTML = `<h3> tu indice de masa cooporal es ${imc.toFixed(2)}</h3>
    <p>${message}</p>`
    
    resultImc.appendChild(messageResultImc)
}


   
