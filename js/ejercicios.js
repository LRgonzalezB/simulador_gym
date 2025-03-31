let ejerciciosData = [];
let exerciseSelect = [];

fetch("../db/data.json")
  .then(response => response.json())
  .then(data => {
    ejerciciosData = data;

    const input = document.getElementById("ingresar_ejercicios");
    const btn = document.getElementById("buscar");
    const list = document.getElementById("lista_de_ejercicios");
    const ejercicios = document.getElementById("ejercicios");
    const nuevaList = document.getElementById("nList");
    

    ejerciciosData.forEach((ejerciciogym) => {
      let card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <span>${ejerciciogym.musculo}</span>
        <img src="${ejerciciogym.imagen}" alt="${ejerciciogym.nombre}">
        <h3>${ejerciciogym.nombre}</h3>
        <h4>${ejerciciogym.maquina}</h4>
      `;

      let btnAgregar = document.createElement("button");
      btnAgregar.className = "btn_agregar";
      btnAgregar.innerHTML = "Agregar";


      btnAgregar.addEventListener("click", () => {
        if (!exerciseSelect.some(ej => ej.id === ejerciciogym.id)) {
          exerciseSelect.push(ejerciciogym);

          let nuevoEjercicio = document.createElement("div");
          nuevoEjercicio.classList.add("tarea");
          nuevoEjercicio.innerHTML = `<p>${ejerciciogym.nombre} </p>`;

          list.appendChild(nuevoEjercicio);
        }
      });

      card.appendChild(btnAgregar);
      ejercicios.appendChild(card);
    });


    btn.addEventListener("click", () =>{
  const buscarEjercicios = ejerciciosData.find((buscarEjercicio) => buscarEjercicio.nombre.toLowerCase() === input.value.toLowerCase()) 
  if (buscarEjercicios) {
    exerciseSelect.push(buscarEjercicios)
    let nuevoEjercicio = document.createElement("div");
nuevoEjercicio.classList.add("tarea");
nuevoEjercicio.innerHTML = `<p>${buscarEjercicios.nombre} </p>`;

    list.appendChild(nuevoEjercicio)

  }
})

    let ejerciciosStorage = JSON.parse(localStorage.getItem("exerciseStorage")) || [];
    const btnGuardar = document.getElementById("btn_storage");

    btnGuardar.addEventListener("click", () => {
      if (exerciseSelect.length === 0) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No hay ejercicios para guardar.",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true
        });
        return; 
      }
    
      ejerciciosStorage = [...exerciseSelect];
      localStorage.setItem("exerciseStorage", JSON.stringify(ejerciciosStorage));
    
      Swal.fire({
        icon: "success",
        title: "Guardado",
        text: "Tus ejercicios han sido guardados correctamente.",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
      });
    });
      
  })
