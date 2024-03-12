
const usuario = document.querySelector("#usuario")
const constraseña = document.querySelector("#contraseña")
const iniciarSesion = document.querySelector("#iniciar-sesion")
const contenedorRegistro = document.querySelector("#contenedor-registro")


const BBDD = [{
    usuario: "gaston",
    contraseña: "123"
},
{
    usuario: "juan",
    contraseña: "789"
},
{
    usuario: "lili",
    contraseña: "456"
}]

 
const usuarioALoaguear = {
    usuario: "",
    contraseña: ""
}

usuario.addEventListener("input",(event)=>{
    usuarioALoaguear.usuario = event.target.value
})

constraseña.addEventListener("input",(event)=>{
    usuarioALoaguear.contraseña = event.target.value
})


iniciarSesion.addEventListener("click", () => {
    const finded = BBDD.find(user => {
        return user.usuario === usuarioALoaguear.usuario && user.contraseña === usuarioALoaguear.contraseña
    })

    if(finded !== undefined){
        localStorage.setItem("isLog", JSON.stringify(usuarioALoaguear)) /* no se debe mostrar contraseña, es solo para aplicar JSON */
        window.location.href="index.html"
        
    }
    else{
        const span = document.createElement("span")
        span.innerText="credenciales incorrectas"
        span.classList.add("font-bold", "text-sm", "text-red-600")
        contenedorRegistro.appendChild(span)     
    }

    console.log("puedo ver el log")
})


//localStorage.setItem[BBDD]

//const jsonBBDD=JSON.stringify(BBDD)
//localStorage.setItem("BBDD", jsonBBDD)
//console.log(jsonBBDD)
//console.log(BBDD)

//const BBDDrecuperado=localStorage.getItem("BBDD")
//const BBDDformateado=JSON.parse(BBDDrecuperado)
//console.log(BBDDformateado)
