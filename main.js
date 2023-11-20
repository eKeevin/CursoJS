

const persona =  function(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
  }
  

  
  let persona1= new persona("Juan",20, "medico")
  let persona2= new persona("Lucas", 30,"residente")
  let persona3= new persona("Pedro", 25, "kinesiologo")
  let persona4= new persona("Luciana", 40, "radiologa")
  let persona5= new persona("Sofia", 40,"tecnica")
  let persona6= new persona("Ana", 40, "ingeniera")

  let invitados = [persona1, persona2, persona3, persona4, persona5, persona6]

 
  function filtrarPersonas(){
let busqueda = prompt("a quien buscas?").toLowerCase().trim()
let resultado = invitados.filter((x)=>x.nombre.toLowerCase().includes(busqueda))

if(resultado.length >0){
    console.table(resultado)
}
else{
    alert("no esta aca " + busqueda)
}

}