
const obtenerDatos = async () => {
    let url = "../db/data_main.json"; 

    try {
        let respuesta = await fetch(url); 
        if (!respuesta.ok) throw new Err("Error al cargar los datos."); 
        
        let datos = await respuesta.json(); 
        return datos; 
    } catch (err) {
        Swal.fire("Hubo un error al cargar los datos. Intenta de nuevo.");
        return null; 
    }
};


let weight = document.getElementById("weight");
let size = document.getElementById("size");
let calcular = document.getElementById("calcular_imc");
let resultImc = document.getElementById("resultImc");

calcular.onclick = async () => {
    let datosNutricionales = await obtenerDatos();

    if (!datosNutricionales) return; 

    let weightValue = parseFloat(weight.value);
    let sizeValue = parseFloat(size.value);

    if (isNaN(weightValue) || isNaN(sizeValue)) {
        Swal.fire("¡Por favor, ingresa valores válidos!");
        return;
    }

    if (weightValue <= 0 || sizeValue <= 0) {
        Swal.fire("Por favor, ingresa valores positivos.");
        return;
    }

    let imc = weightValue / (sizeValue ** 2);

    let buscarNumero = datosNutricionales.filter((buscar) => {
        return imc >= buscar.min_imc && imc <= buscar.max_imc;
    });

    if (buscarNumero.length === 0) {
        Swal.fire("No se encontró un plan nutricional para este IMC.");
        return;
    }

    let protein_per_day = weightValue * buscarNumero[0].proteina;
    let carb_per_day = weightValue * buscarNumero[0].carbohidratos;

    resultImc.innerHTML = `
        <h3>Tu índice de masa corporal es ${imc.toFixed(2)}</h3>
        <p>${buscarNumero[0].message}</p>
        <p>Tu consumo de proteína útil por día es ${protein_per_day.toFixed(2)}g</p>
        <p>Tu consumo de carbohidratos por día es ${carb_per_day.toFixed(2)}g</p>
    `;
};