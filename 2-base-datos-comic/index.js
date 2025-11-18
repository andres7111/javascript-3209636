const destacados = document.querySelector(".comic-destacado")

console.log(destacados)

destacados.innerHTML = `
<div class="comic-imagen">
            <img src="${comic.portada}">
        </div>
        <div class="comic-detalles">
            <h1>${comic.nombreComic}</h1>
            <h2>Temporada 2</h2>
            <p>${comic.sipnosis}</p>
            <div class="stats">
                <div class="stat">
                    <span class="numero">8</span>
                    <span class="label">Episodios</span>
                </div>
                <div class="stat">
                    <span class="numero">4.8</span>
                    <span class="label">Calificación</span>
                </div>
                <div class="stat">
                    <span class="numero">50K</span>
                    <span class="label">Seguidores</span>
                </div>
            </div>
        </div>

`