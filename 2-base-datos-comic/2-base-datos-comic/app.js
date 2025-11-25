const infocomic=document.querySelector(".infocomic")
const listaCapitulos=document.querySelector(".listacapitulos")

console.log(listaCapitulos)
console.log(infocomic)

infocomic.innerHTML =`
    <p>${comic.year}</p>
<h1>${comic.nombrecomic}</h1>
<P>${comic.sinopsis}</P>
<P>${comic.genero}</P>
      
`
// aqui vamos a mostrar nombre de capitulos

/* console.log(comic.escenas) */

comic.escenas.forEach(escenas=>{
    const micard = document.createElement("div")
    micard.classList.add("tarjeta-cap")
    micard.innerHTML= `
    <img src="${escenas.image}">
    <p>${escenas.nombre} <p>`
    


    infocomic.appendChild(micard)
    console.log(escenas.nombre)
})