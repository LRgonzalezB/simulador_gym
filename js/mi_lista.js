let ejercicios1 = document.getElementById("ejerciciosGuardados");

const listaEjercicios = JSON.parse(localStorage.getItem("exerciseStorage"))


listaEjercicios.forEach(listaEjercicio =>{
    let tarea = document.createElement("div");
    tarea.classList.add("tarea");
    tarea.innerHTML = `
    <p>${listaEjercicio.nombre} </p>
    <div class="iconos">
    <i class="bi bi-check-circle-fill icono-completar" onclick="completarTarea(event)" ></i>
    <i class="bi bi-trash3-fill icono-eliminar" onclick="eliminarTarea(event)" ></i>
     </div>`;
    ejercicios1.appendChild(tarea);
;
}) 

function completarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle("completada");

    console.log(tarea, "aja");
  }

  function eliminarTarea(e) {
    let tarea = e.target.closest(".tarea");
    let index = tarea.dataset.index; 
  
    tarea.remove(); 
    listaEjercicios.splice(index, 1); 
    localStorage.setItem("exerciseStorage", JSON.stringify(listaEjercicios)); // 
  }
  