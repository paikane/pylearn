/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 1000,
        },
      },
      color: {
        value: "#1a3c6d",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#1a3c6d",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          
          speed: 1,
          opacity_min: 0.1,
          
        },
      },
      size: {
        value: 4,
        random: true,
        anim: {
          
          speed: 40,
          size_min: 0.1,
          
        },
      },
      line_linked: {
        enable: true,
        distance: 140,
        color: "#1a3c6d",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: "none",
        
        
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    
    retina_detect: true,
    config_demo: {
      background_color: "#b61924",

    },
  }
);


// window.addEventListener('scroll', event => {
//   if(window.scrollY > 300){
//     document.getElementById('particles-js').remove()
//   } else if (window.scrollY < 300) {
//     document.getElementById('particles-js').style.display ='block'

//   }
// })