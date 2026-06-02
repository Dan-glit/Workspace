// Declarar variables
let usuario = "Dani";
let contrasena = "83874832557";

// Validar formulario
if (usuario === "") {
  console.log("Error: el usuario está vacío");
} else if (contrasena.length < 8) {
  console.log("Error: la contraseña debe tener al menos 8 caracteres");
} else {
  console.log("Login exitoso");
}