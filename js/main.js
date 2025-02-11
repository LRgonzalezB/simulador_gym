alert("Bienvenido ingrese sus datos para hacer el calculo de su grasa coorporal: ")

let weight = parseFloat(prompt("ingrese su peso en kg"))
let size = parseFloat(prompt("ingrese su estura en metros"))

const imc = (a, b) => a / (b ** 2);


let resultadoIMC = imc(weight, size)

alert(`tu IMC es: ${resultadoIMC.toFixed(2)}`)

if (resultadoIMC >= 30) {
    alert("debes buscar ayuda tienes obesidad")
} else if (resultadoIMC <= 29.9) {
    alert("ten cuidado ya tienes sobre peso")
} else if (resultadoIMC <= 24.9) {
    alert("tu peso es normal, sigue asi!!")
} else {
    alert("tu peso esta por debajo de lo recomendado. Acude con tu medico.")
}

alert("te puedo ayudar con ejercicio y alimentacion")
let decision = prompt("Responde si o no para continura").toLowerCase()

if (decision === "si") {

    let ask = parseFloat(prompt("ingresa cual es tu objetivo con los numeros 1, 2, 3 o 4. \n1- aumentar peso y masa muscular \n2- mantenerte saludable y activo \n3- perder peso \n4- perder peso y hacer ejercicio"))

    switch (ask) {
        case (1):
            alert("aumentamos la ingesta calorica y el ejercicio de fuerza")
            break;
        case (2):
            alert("mantenemos el consumo de alimentos actual y el ejercicio")
            break;
        case (3):
            alert("disminuimos la cantidad de calorias diarias y mantenemos la cantidad de ejercicio actual")
            break;
        case (4):
            alert("dieta estricta y ejercicio diario")
            break;
        default:
            break;
    }


} else {
    "gracias vuelva pronto"
}

let ask2 = prompt("teniendo en cuenta tus respuestas te gustaria saber cuanta proteina y carbohidratos deberias consumir al dia? responde si o no.").toLowerCase()

if (ask2 === si) {
    let protein = 1.6;
    let carbohydrates = 1
    const proteinPerDay = (a,b) => a * b;
    const carbPerDay = (a,b) => a * b; 

}

