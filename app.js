
const formulario = document.getElementById("formulario");
const nombreUsuario = document.getElementById("nombreUsuario");
const correoUsuario = document.getElementById("correoUsuario");
const alertaNombre = document.getElementById("alertaNombre");
const alertaCorreo = document.getElementById("alertaCorreo");
const envioSuccess = document.getElementById("alertaEnvio");
let errorNombre = true;
let errorCorreo = true;

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
   
   
    if (!regUserName.test(nombreUsuario.value)) {
        alertaNombre.textContent = "Solo letras por favor";
        alertaNombre.classList.remove("d-none");

        nombreUsuario.classList.add("is-invalid");
        
        errorNombre = true;
    }
    else{
        alertaNombre.classList.add("d-none");
        
        nombreUsuario.classList.remove("is-invalid");
        nombreUsuario.classList.add("is-valid");
        errorNombre = false;
    }

    if (!regUserEmail.test(correoUsuario.value)) {
        alertaCorreo.textContent = "Ingrese un email valido por favor";
        alertaCorreo.classList.remove("d-none");
        correoUsuario.classList.add("is-invalid");        
        errorCorreo = true;
    }
    else{
        alertaCorreo.classList.add("d-none");
        
        correoUsuario.classList.remove("is-invalid");
        correoUsuario.classList.add("is-valid");
        errorCorreo = false;        
    }    

    if(!errorCorreo && !errorNombre){
        envioSuccess.classList.remove("d-none");
    }
    else{
        envioSuccess.classList.add('d-none');
    }

    
  
});

const validarNombre = ()=>{
   
}
