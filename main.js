
/*let links = document.querySelectorAll("a");

links.forEach(function(link) {
    console.log(link);
});*/

// Obtener los elementos de la clase .close

let links = document.querySelectorAll(".close");

// Recorrerlos

links.forEach(function(link){
    // Agregar un evento click a cada uno de ellos
    link.addEventListener("click", function(ev){
        ev.preventDefault();
        let content = document.querySelector(".content");

        // QUITARLE LAS CLASES DE ANIMACION QUE YA TIENE
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animete__animated");

        //AGREGAR CLASES PARA ANIMAR SU SALIDA

        content.classList.add("animate__fadeOutUp");
        content.classList.add("animete__animated");

        setTimeout(function(){
            location.href = "/";
        },900);

        

        return false;
    });
});



