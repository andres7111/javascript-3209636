const infoComic = document.querySelector(".info-comic")
const listaCapitulos = document.querySelector(".lista-capitulos")

console.log(infoComic)
console.log(listaCapitulos)

//Modificar contenido de info general comic

infoComic.innerHTML = `
    <p>${comic.year}</p>
    <h1>${comic.nombreComic}</h1>
    <p>${comic.sipnosis}</p>
    <p>${comic.genero}</p>
    <p>${comic.personajes.join(", ")} </p>
`

// Aqui vamos a mostrar las tajertas de las escenas

// console.log(comic.escenas)

comic.escenas.forEach(escena => {
    const miCard = document.createElement("div")
    miCard.classList.add("tarjeta-cap")
    miCard.innerHTML = `
        <img src="${escena.image}" alt="">
        <p>${escena.name}</p>
    `

    infoComic.appendChild(miCard)
    listaCapitulos.appendChild(miCard)
    console.log(escena.name)
});