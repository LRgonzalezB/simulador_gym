
let beginning;

do {

    beginning = prompt("Hola, este programa te ayuda a medir tu indice de masa cooporal si deseas continuar responde si").toLowerCase()

    if (beginning !== "si") {
        alert("gracias, vuelva pronto")
        break
    }

    alert("Bienvenido, ingrese sus datos para calcular su grasa corporal:");

    let weight;
do {
    weight = parseFloat(prompt("Ingrese su peso en kg"));

    if (isNaN(weight) || weight <= 0) {
        alert("porfavor ingree su peso en valores validos")
    }
 
} while (isNaN(weight) || weight <= 0);

let size;
do {
     size = parseFloat(prompt("Ingrese su estatura en metros"));

    if (isNaN(size) || size <= 0) {
        alert("porfavor ingree su estatura en valores validos")
    }
} while (isNaN(size) || size <= 0);




let protein = 1.6;
let carbohydrates = 1;

const imc = (a, b) => a / (b ** 2);
const proteinPerDay = (a, b) => a * b;
const carbPerDay = (a, b) => a * b;

let resultadoIMC = imc(weight, size);

alert(`Tu IMC es: ${resultadoIMC.toFixed(2)}`);

if (resultadoIMC >= 30) {
    alert("Debes buscar ayuda, tienes obesidad.");
} else if (resultadoIMC >= 25 && resultadoIMC <= 29.9) {
    alert("Ten cuidado, ya tienes sobrepeso.");
} else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9) {
    alert("Tu peso es normal, ¡sigue así!");
} else {
    alert("Tu peso está por debajo de lo recomendado. Acude con tu médico.");
}

alert("Te puedo ayudar con ejercicio y alimentación.");
let decision = prompt("Responde 'si' o 'no' para continuar").toLowerCase();

if (decision === "si") {
    let ask1 = parseInt(prompt("Ingresa cuál es tu objetivo con los números 1, 2, 3 o 4. \n1- Aumentar peso y masa muscular \n2- Mantenerte saludable y activo \n3- Perder peso \n4- Perder peso y hacer ejercicio"));

    switch (ask1) {
        case 1:
            alert("Aumentamos la ingesta calórica y el ejercicio de fuerza.");
            break;
        case 2:
            alert("Mantenemos el consumo de alimentos actual y el ejercicio.");
            break;
        case 3:
            alert("Disminuimos la cantidad de calorías diarias y mantenemos la cantidad de ejercicio actual.");
            break;
        case 4:
            alert("Dieta estricta y ejercicio diario.");
            break;
        default:
            alert("Opción no válida.");
            break;
    }
} else {
    alert("Gracias, vuelva pronto.");
}

const planesNutricionales = [
    { objetivo: "aumentar masa muscular", proteina: 2, carbohidratos: 4 },
    { objetivo: "mantenerse saludable", proteina: 1.6, carbohidratos: 2.5 },
    { objetivo: "perder peso", proteina: 1.8, carbohidratos: 1.5 },
    { objetivo: "perder peso con ejercicio", proteina: 2, carbohidratos: 2 },
];

let ask2 = parseInt(prompt("Ingresa tu objetivo para la recomendacion de alimentacion diaria: \n1- Aumentar masa muscular \n2- Mantenerte saludable \n3- Perder peso \n4- Perder peso con ejercicio"));

if (ask2 >= 1 && ask2 <= 4) {
    let plan = planesNutricionales[ask2 - 1];
    alert(`Para ${plan.objetivo}, debes consumir ${proteinPerDay(weight, plan.proteina).toFixed(2)}g de proteína util y ${carbPerDay(weight, plan.carbohidratos).toFixed(2)}g de carbohidratos.`);
} else {
    alert("Opción no válida.");
}

} while (beginning === "si");

