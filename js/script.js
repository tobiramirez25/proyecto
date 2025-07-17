//Funcion que ejecute todas la validaciones 
function validateForm(){
    const name = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const age = document.getElementById('edad').value;
    const mensaje = document.getElementById('mensaje').value;
    let isValid = true;

    //valido si el campo nombre esta vacio
    if(name.trim() === ''){
        showError('empty-name', '❌ Ingrese un nombre, por favor');
        isValid = false;
    } else {
        hideError('empty-name');
    }
    if(name.trim() !== '' && name.length <= 1){
        showError('min-name', '❌ El nombre tiene que tener 2 carecteres o mas');
        isValid = false;
    } else {
        hideError('min-name');
    }

    if(apellido.trim() === ''){
        showError('empty-apellido', '❌ Ingrese un apellido, por favor ');
        isValid = false;
    } else {
        hideError('empty-apellido');
    }
    if(apellido.trim() !== '' && apellido.length <= 1){
        showError('min-apellido', '❌ El apellido tiene que tener 2 carecteres o mas');
        isValid = false;
    } else {
        hideError('min-apellido');
    }
      if(age.trim() === ''){
        showError('empty-age', '❌ Ingrese su edad, por favor');
        isValid = false;
    } else {
        hideError('empty-age')
    }

    if(age.trim() !== '' && age < 18){
        showError('min-age', '❌ El usuario es menor de edad');
        isValid = false;
    } else {
        hideError('min-age');
    }
     if(mensaje.trim() === ''){
        showError('empty-mensaje', '❌ Por favor, escriba un mensaje');
        isValid = false;
    } else {
        hideError('empty-mensaje');
    }

    if(mensaje.trim() !== '' && mensaje.length <= 1){
        showError('min-mensaje', '❌ El mensaje tiene que tener 2 carecteres o mas');
        isValid = false;
    } else {
        hideError('min-mensaje');
    }
    
    return isValid;
}

//Funcion que muestre todos losmensajes de error
function showError(fieldId, message){
    const errorElement = document.getElementById(fieldId + '-error');
    errorElement.textContent = " "+ message;
    errorElement.style.display = 'block';
}

//Funcion que oculte los mensajes de error 
function hideError(fieldId){
    const errorElement = document.getElementById(fieldId + '-error');
    errorElement.style.display = 'none'; 
}

//Agregar un listener para el boton Enviar 
const btnEnviar= document.getElementById('btnEnviar');
btnEnviar.addEventListener('click', function(event){
    event.preventDefault;
    if(validateForm()){
        window.location.href = 'valExitosa.html';
    }
});
