document.getElementById('formulario').addEventListener('submit', function(event) {
    // Prevenir que el formulario se envíe normalmente
    event.preventDefault();
  
    // Mostrar la alerta
    alert("Se ha enviado correctamente su comentario");
  
    // Limpiar los campos del formulario
    document.getElementById('exampleFormControlInput1').value = '';
    document.getElementById('nombreCompleto').value = '';
    document.getElementById('rut').value = '';
    document.getElementById('exampleFormControlTextarea1').value = '';
  });