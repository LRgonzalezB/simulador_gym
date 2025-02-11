alert("Bienvenido ingrese sus datos para hacer el calculo de su grasa coorporal: ")

let weight = parseFloat(prompt("ingrese su peso"))
let size = parseFloat(prompt("ingrese su estura"))

const imc =  (a,b) => a / (b ** 2);


let resultadoIMC = imc(weight,size)

 alert(`tu IMC es: ${resultadoIMC.toFixed(2)}`)

if (resultadoIMC >= 30) {
    alert("debes buscar ayuda tienes obesidad")
}else if(resultadoIMC <= 29.9) {
    alert("ten cuidado ya tienes sobre peso")
}else if(resultadoIMC <= 24.9){
    alert("tu peso es normal, sigue asi!!")
}else{
    alert("tu peso esta por debajo de lo recomendado. Acude con tu medico.")
}

alert("te puedo ayudar con ejercicio y alimentacion")
let decision = prompt("Responde si o no para continura").toLowerCase()

if(decision === "si"){

    switch (true) {
        case (resultadoIMC < )
            
            break;
    
        default:
            break;
    }
    
    
}else{
    "gracias vuelva pronto"
}


