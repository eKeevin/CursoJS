const listaPokemon = document.querySelector("#listaPokemons");
const botonHeader = document.querySelectorAll(".boton-header")
let URL="https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++){
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => mostrarPoke(data))
}

function mostrarPoke(pokedata) {

    let tipos = pokedata.types.map((x)=> `<p class="${x.type.name} tipo">${x.type.name}</p>`);
    tipos = tipos.join('');
    console.log(tipos)


console.log(tipos)

    const div = document.createElement("div");
   div.classList.add("pokemon");
    div.innerHTML=`
    
    <p class="pokemon-id-back">#${pokedata.id}</p>
    <div class="pokemon-imagen"><img src="${pokedata.sprites.other["official-artwork"].front_default}" alt="pikachu"></div>
    <div class="pokemon-data">
        <div class="nombre-contenedor">
            <p class="pokemon-id">#${pokedata.id}</p>
          <h2 class="pokemon-nombre">${pokedata.name}</h2>
        </div>
        <div class="pokemon-tipos">
           ${tipos}
        </div>
        <div class="pokemon-stats">
            <p class="pokemon-altura">${pokedata.height}m</p>
            <p class="pokemon-peso">${pokedata.weight}kg</p>
        </div>

    </div>

 `;
 listaPokemon.append(div);
}

botonHeader.forEach((boton) => {
    boton.addEventListener("click", (event) => {
        const botonId = event.currentTarget.id;
        listaPokemon.innerHTML = "";

        for (let i = 1; i <= 151; i++) {
            fetch(URL + i)
                .then((response) => response.json())
                .then((data) => {

                    if(botonId === "ver-todos"){
                        mostrarPoke(data);
                    }
                    else{
                    const tipos = data.types.map((x) => x.type.name);
                    if (tipos.some((x) => x.includes(botonId))) {
                        mostrarPoke(data);
                        }
                    }
                })
               
        }
    });
})