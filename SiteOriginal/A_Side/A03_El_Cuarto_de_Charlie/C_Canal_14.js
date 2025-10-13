/* 
   Nombre del archivo: C Club Benares.js
   Descripción: Sitio oficial de Club Benares
   Autor: Charlie Chaves
   Fecha de creación: 17 de marzo de 2024
   Versión: 1.0
*/

document.addEventListener('DOMContentLoaded', function() {
   const BUTTON = document.getElementById('BUTTON');
   const TVOFF = document.getElementById('TVOFF');
   const TVON = document.getElementById('TVON');
   const TV1 = document.getElementById('TV1');
   const TV2 = document.getElementById('TV2');
   let tvEncendida = false; // Estado inicial: apagada

   BUTTON.addEventListener('click', function() {
       if (!tvEncendida) {
           // Televisión apagada, encenderla
           TVOFF.style.display = 'none';
           TVON.style.display = 'block';
           Previous.style.display = 'none';
           Top.style.display = 'none';
           Next.style.display = 'none';
           setTimeout(function() {
               TVON.style.display = 'none';
               TV1.style.display = 'block';
               Previous.style.display = 'block';
               Top.style.display = 'block';
               Next.style.display = 'block';

           }, 3000); // Espera 3 segundos antes de mostrar TV1

           tvEncendida = true; // Actualiza el estado de la televisión
       } else {
           // Televisión encendida, apagarla
           Previous.style.display = 'none';
           Top.style.display = 'none';
           Next.style.display = 'none';
           TV1.style.display = 'none'; // Oculta TV1
           TVON.style.display = 'none'; // Oculta TVON

           TVOFF.style.display = 'block'; // Muestra TVOFF
          
           tvEncendida = false; // Actualiza el estado de la televisión
       }
   });
});

document.addEventListener('DOMContentLoaded', function() {
   const images = document.querySelectorAll('.images-container img');
   let currentIndex = 0;

   // Función para mostrar la imagen actual y ocultar las demás
   function showCurrentImage() {
       images.forEach((image, index) => {
           if (index === currentIndex) {
               image.style.display = 'block';
           } else {
               image.style.display = 'none';
           }
       });
   }

   // Función para mostrar la imagen anterior
   function showPreviousImage() {
       if (currentIndex > 0) {
           currentIndex--;
       }
       showCurrentImage();
   }

   // Función para mostrar la imagen siguiente
   function showNextImage() {
       if (currentIndex < images.length - 1) {
           currentIndex++;
       }
       showCurrentImage();
   }

   // Función para mostrar la primera imagen
   function showFirstImage() {
       currentIndex = 0;
       showCurrentImage();
   }

   // Agregar eventos de clic a los botones
   document.getElementById('Previous').addEventListener('click', showPreviousImage);
   document.getElementById('Top').addEventListener('click', showFirstImage);
   document.getElementById('Next').addEventListener('click', showNextImage);

   // Mostrar la primera imagen al cargar la página
   showFirstImage();
});


document.addEventListener('DOMContentLoaded', function() {
    const BUTTON = document.getElementById('BUTTON');
    const TVOFF = document.getElementById('TVOFF');
    const TVON = document.getElementById('TVON');
    const containers = document.querySelectorAll('.images-container > div');
    const menuButtons = document.querySelectorAll('.MENU a');
    const navigationButtons = document.querySelectorAll('.Navegacion button');
    let currentIndex = 0;
 
    // Función para mostrar el contenedor actual y ocultar los demás
    function showCurrentContainer() {
        containers.forEach((container, index) => {
            if (index === currentIndex) {
                container.style.display = 'block';
            } else {
                container.style.display = 'none';
            }
        });
    }
 

    // Función para mostrar el contenedor anterior
    function showPreviousContainer() {
        if (currentIndex > 0) {
            currentIndex--;
        }
        showCurrentContainer();
    }
 
    // Función para mostrar el primer contenedor
    function showFirstContainer() {
        currentIndex = 0;
        showCurrentContainer();
    }
 
    // Función para mostrar el siguiente contenedor
    function showNextContainer() {
        if (currentIndex < containers.length - 1) {
            currentIndex++;
        }
        showCurrentContainer();
    }
 
    // Agregar eventos de clic a los botones de navegación
    navigationButtons[0].addEventListener('click', showPreviousContainer);
    navigationButtons[1].addEventListener('click', showFirstContainer);
    navigationButtons[2].addEventListener('click', showNextContainer);
 
    // Función para alternar entre la televisión encendida y apagada
    BUTTON.addEventListener('click', function() {
        if (TVOFF.style.display === 'block') {
            TVOFF.style.display = 'none';
            TVON.style.display = 'block';
        } else {
            TVON.style.display = 'none';
            TVOFF.style.display = 'block';
        }
    });
 
    // Mostrar el primer contenedor al cargar la página
    showFirstContainer();
 });
 
 
// Función para pausar un video específico
function pauseVideo(playerId) {
    const player = document.querySelector(`#${playerId} iframe`);
    if (player) {
        const playerAPI = new Vimeo.Player(player);
        playerAPI.pause(); // Pausa el video
    }
}

// TV1S1 - I N E X I S T E N T E
document.addEventListener('DOMContentLoaded', function() {
    const poster = document.getElementById('TV1S1-Poster');
    const vimeoINX = document.getElementById('vimeoINX');
    const Back = document.getElementById('BackINX');
    const BUTTON = document.getElementById('BUTTON');

    // Mostrar el reproductor de video y el botón de "back" al hacer clic en el poster
    poster.addEventListener('click', function() {
        vimeoINX.style.display = 'block';
        Back.style.display = 'block';
    });

    // Ocultar el reproductor de video y el botón de "back" al hacer clic en el botón "back"
    Back.addEventListener('click', function() {
        vimeoINX.style.display = 'none';
        Back.style.display = 'none';
        pauseVideo('vimeoINX'); // Pausar el video específico al regresar al menú principal
    });

    // Ocultar el reproductor de video al hacer clic en el botón de encendido/apagado de la televisión
    BUTTON.addEventListener('click', function() {
        vimeoINX.style.display = 'none';
        pauseVideo('vimeoINX'); // Pausar el video específico al apagar la televisión
    });
});

// TV1S2 - EL ARTISTA COMPRENDIDO
document.addEventListener('DOMContentLoaded', function() {
    const poster = document.getElementById('TV1S2-Poster');
    const vimeoEAC = document.getElementById('vimeoEAC');
    const Back = document.getElementById('BackEAC');
    const BUTTON = document.getElementById('BUTTON');

    // Mostrar el reproductor de video y el botón de "back" al hacer clic en el poster
    poster.addEventListener('click', function() {
        vimeoEAC.style.display = 'block';
        Back.style.display = 'block';
    });

    // Ocultar el reproductor de video y el botón de "back" al hacer clic en el botón "back"
    Back.addEventListener('click', function() {
        vimeoEAC.style.display = 'none';
        Back.style.display = 'none';
        pauseVideo('vimeoEAC'); // Pausar el video específico al regresar al menú principal
    });

    // Ocultar el reproductor de video al hacer clic en el botón de encendido/apagado de la televisión
    BUTTON.addEventListener('click', function() {
        vimeoEAC.style.display = 'none';
        pauseVideo('vimeoEAC'); // Pausar el video específico al apagar la televisión
    });
});

const boton = document.getElementById('BUTTON');
  const sonido = document.getElementById('RedButton-click');

  boton.addEventListener('click', () => {
    sonido.currentTime = 0; // Reinicia el audio si ya está sonando
    sonido.play();
  });

  const audio = document.getElementById('Navegation-click');

  const buttons = document.querySelectorAll('#Previous, #Top, #Next, #BackEAC');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      audio.currentTime = 0; // Reinicia el audio si se hace clic rápidamente
      audio.play();
    });
  });

  const posterAudio = document.getElementById('Posters-click');

  const posterImages = document.querySelectorAll('#TV1S1-Poster, #TV1S2-Poster');

  posterImages.forEach(poster => {
    poster.addEventListener('click', () => {
      posterAudio.currentTime = 0; // Reinicia el sonido si se hace clic rápido
      posterAudio.play();
    });
  });















