const ejerciciosGym = [
    { id: 1, nombre: "Press de banca", musculo: "Pecho", maquina: "Banco plano con barra o mancuernas", imagen:"/imagenes/imagenes_ejercicios/pecho/press de banca.jpg"},
    { id: 2, nombre: "Aperturas con mancuernas", musculo: "Pecho", maquina: "Banco plano o inclinado", imagen:"/imagenes/imagenes_ejercicios/pecho/Aperturas con mancuernas.jpg" },
    { id: 3, nombre: "Press en máquina Smith", musculo: "Pecho", maquina: "Máquina Smith", imagen:"/imagenes/imagenes_ejercicios/pecho/Press en máquina Smith.jpg" },
    { id: 4, nombre: "Fondos en paralelas", musculo: "Pecho", maquina: "Barras paralelas", imagen:"/imagenes/imagenes_ejercicios/pecho/Fondos en paralelas.png" },
    { id: 5, nombre: "Pectoral contractor", musculo: "Pecho", maquina: "Máquina de contractora (Pec Deck)", imagen:"/imagenes/imagenes_ejercicios/pecho/Pectoral contractor.jpg" },
    
    { id: 6, nombre: "Dominadas", musculo: "Espalda", maquina: "Barra de dominadas o máquina asistida", imagen:"/imagenes/imagenes_ejercicios/espalda/Dominadas.jpg" },
    { id: 7, nombre: "Remo con barra", musculo: "Espalda", maquina: "Barra olímpica", imagen:"/imagenes/imagenes_ejercicios/espalda/Remo con barra.jpg" },
    { id: 8, nombre: "Jalón al pecho", musculo: "Espalda", maquina: "Polea alta", imagen:"/imagenes/imagenes_ejercicios/espalda/Jalón al pecho.jpg" },
    { id: 9, nombre: "Remo en polea baja", musculo: "Espalda", maquina: "Máquina de remo en polea", imagen:"/imagenes/imagenes_ejercicios/espalda/Remo en polea baja.jpg" },
    { id: 10, nombre: "Pull-over", musculo: "Espalda", maquina: "Máquina de pull-over o mancuernas", imagen:"/imagenes/imagenes_ejercicios/espalda/Pull-over.jpg" },
    
    { id: 11, nombre: "Press militar", musculo: "Hombros", maquina: "Barra o mancuernas (de pie o sentado)", imagen:"/imagenes/imagenes_ejercicios/hombros/Press militar.png" },
    { id: 12, nombre: "Elevaciones laterales", musculo: "Hombros", maquina: "Mancuernas o máquina de elevaciones laterales", imagen:"/imagenes/imagenes_ejercicios/hombros/Elevaciones laterales.jpg" },
    { id: 13, nombre: "Press de hombros en máquina", musculo: "Hombros", maquina: "Máquina de press de hombros", imagen:"/imagenes/imagenes_ejercicios/hombros/Press de hombros en máquina.jpg" },
    { id: 14, nombre: "Pájaros", musculo: "Hombros", maquina: "Mancuernas o polea baja", imagen:"/imagenes/imagenes_ejercicios/hombros/Pájaros.jpg" },
    
    { id: 15, nombre: "Curl de bíceps con barra", musculo: "Bíceps", maquina: "Barra olímpica o Z", imagen:"/imagenes/imagenes_ejercicios/biceps/Curl de bíceps con barra.jpg" },
    { id: 16, nombre: "Curl martillo", musculo: "Bíceps", maquina: "Mancuernas", imagen:"/imagenes/imagenes_ejercicios/biceps/Curl martillo.jpg" },
    { id: 17, nombre: "Curl en predicador", musculo: "Bíceps", maquina: "Banco Scott con barra o máquina de curl", imagen:"/imagenes/imagenes_ejercicios/biceps/Curl en predicador.jpg" },
    { id: 18, nombre: "Curl en polea baja", musculo: "Bíceps", maquina: "Polea baja con cuerda o barra", imagen:"/imagenes/imagenes_ejercicios/biceps/Curl en polea baja.jpg" },
    
    { id: 19, nombre: "Extensión de tríceps en polea", musculo: "Tríceps", maquina: "Polea alta con cuerda o barra", imagen:"/imagenes/imagenes_ejercicios/triceps/Extensión de tríceps en polea.jpg" },
    { id: 20, nombre: "Press cerrado en banca", musculo: "Tríceps", maquina: "Banco plano con barra", imagen:"/imagenes/imagenes_ejercicios/triceps/Press cerrado en banca.jpg" },
    { id: 21, nombre: "Fondos en paralelas", musculo: "Tríceps", maquina: "Barras paralelas", imagen:"/imagenes/imagenes_ejercicios/triceps/Fondos en paralelas.png" },
    { id: 22, nombre: "Patada de tríceps", musculo: "Tríceps", maquina: "Mancuernas", imagen:"/imagenes/imagenes_ejercicios/triceps/Patada de tríceps.jpg" },
    
    { id: 23, nombre: "Sentadillas", musculo: "Piernas", maquina: "Rack de sentadillas con barra", imagen:"/imagenes/imagenes_ejercicios/piernas/Sentadillas.jpg" },
    { id: 25, nombre: "Peso muerto", musculo: "Piernas y espalda baja", maquina: "Barra olímpica", imagen:"/imagenes/imagenes_ejercicios/piernas/Peso muerto.jpg" },
    { id: 26, nombre: "Extensión de piernas", musculo: "Piernas", maquina: "Máquina de extensiones de piernas", imagen:"/imagenes/imagenes_ejercicios/piernas/Extensión de piernas.jpg" },
    { id: 27, nombre: "Curl femoral", musculo: "Piernas", maquina: "Máquina de curl femoral", imagen:"/imagenes/imagenes_ejercicios/piernas/Curl femoral.jpg" },
    { id: 28, nombre: "Elevación de talones", musculo: "Pantorrillas", maquina: "Máquina de elevación de talones (de pie o sentado)", imagen:"/imagenes/imagenes_ejercicios/piernas/Elevación de talones.jpg" },
    
    { id: 29, nombre: "Crunch abdominal", musculo: "Core", maquina: "Banco de abdominales", imagen:"/imagenes/imagenes_ejercicios/core/Crunch abdominal.jpg" },
    { id: 30, nombre: "Plancha", musculo: "Core", maquina: "Cuerpo libre (sin máquina)", imagen:"/imagenes/imagenes_ejercicios/core/Plancha.jpg" },
    { id: 31, nombre: "Crunch en polea alta", musculo: "Core", maquina: "Polea alta con cuerda", imagen:"/imagenes/imagenes_ejercicios/core/Crunch en polea alta.jpg" },
    { id: 32, nombre: "Elevación de piernas colgado", musculo: "Core", maquina: "Barras de dominadas o máquina de elevación de piernas", imagen:"/imagenes/imagenes_ejercicios/core/Elevación de piernas colgado.jpg" }
  ];
  
  let exerciseSelect = []

  const input = document.getElementById("ingresar_ejercicios");
  const btn = document.getElementById("buscar");
  const list = document.getElementById("lista_de_ejercicios")
  const ejercicios = document.getElementById("ejercicios");
  
    
    
    ejerciciosGym.forEach((ejerciciogym) =>{
      let card = document.createElement("div")
      card.className = "card"
      card.innerHTML = `<span>${ejerciciogym.musculo}</span>
      <img src="${ejerciciogym.imagen}" alt="${ejerciciogym.nombre}">
      <h3>${ejerciciogym.nombre}</h3>
      <h4>${ejerciciogym.maquina}</h4>`;
  
      ejercicios.appendChild(card)
    })

btn.addEventListener("click", () =>{
  const buscarEjercicios = ejerciciosGym.find((buscarEjercicio) => buscarEjercicio.nombre.toLowerCase() === input.value.toLowerCase()) 
  if (buscarEjercicios) {
    exerciseSelect.push(buscarEjercicios)
    let nuevoEjercicio = document.createElement("div");
    nuevoEjercicio.classList.add("tarea");

    let texto = document.createElement("p");
    texto.innerText = buscarEjercicios.nombre;
     nuevoEjercicio.appendChild(texto);
    let iconos = document.createElement("div");
    iconos.classList.add("iconos");
    nuevoEjercicio.appendChild(iconos);

    let completar = document.createElement("i");
    completar.classList.add("bi", "bi-check-circle-fill", "icono-completar");
    completar.addEventListener("click", completarTarea);

    let eliminar = document.createElement("i");
    eliminar.classList.add("bi", "bi-trash3-fill", "icono-eliminar")
    eliminar.addEventListener("click", eliminarTarea);

    iconos.append(completar, eliminar)

    list.appendChild(nuevoEjercicio)

  }
    
  

  function completarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle("completada");
  }


  function eliminarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
  }
});




