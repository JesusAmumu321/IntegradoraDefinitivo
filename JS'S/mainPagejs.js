// Med & Track Version: 1.0
// con el doom, se espera a que el documento este cargado para ejecutar el codigo
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carrusel-item');
    const antBtn = document.querySelector('.carrusel-antes');
    const despuesBtn = document.querySelector('.carrusel-despues');
    const textoCarrusel = document.getElementById('textoCarrusel');
    let indexActual = 0;

    const textos = [
        "Obtenga un Mejor Monitoreo de sus Medicamentos.",
        "Agregue los medicamentos que desee",
        "Obtenga un calendario para su medicación.",
        "Descargue su calendario en cualquier momento."
    ];

    const gifs = [
        "ruta/al/gif1.gif",
        "ruta/al/gif2.gif",
        "ruta/al/gif3.gif",
        "ruta/al/gif4.gif" 
    ];

    function mostrarItem(index) {
        items.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
                item.style.backgroundImage = `url(${gifs[i]})`; 
                item.style.backgroundSize = 'cover'; 
            }
        });
        // animacion del texto (no jala)
        textoCarrusel.classList.remove('fade');
        void textoCarrusel.offsetWidth; // reinicia la animacion
        textoCarrusel.classList.add('fade');
        textoCarrusel.textContent = textos[index];
    }

    function siguienteItem() {
        indexActual = (indexActual + 1) % items.length;
        mostrarItem(indexActual);
    }

    function itemAnterior() {
        indexActual = (indexActual - 1 + items.length) % items.length;
        mostrarItem(indexActual);
    }

    despuesBtn.addEventListener('click', siguienteItem);
    antBtn.addEventListener('click', itemAnterior);

    // cambia el carrusel cada 5 segs
    const intervalo = setInterval(siguienteItem, 5000);


    // muestra el primer item al mero chingaso de carga de la pagina
    mostrarItem(0);
});
