function comprueba(){
    console.log("Entro")
    user = document.getElementById("user");
    pass = document.getElementById("pass");
    if (!user.value.includes("@")){
        alert("Usuario mal escrito");
        return
    }
    if (pass.value == ""){
        alert("Debe ingresar una contraseña");
        return
    }
    alert("Formulario enviado exitosamente")
}