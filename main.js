// Particles JS

setTimeout(() => {
  window.onload = document.getElementById('preloader').classList.add('loaded')
}, 3000);


particlesJS("particles-js", {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 450 } },
    color: { value: "#ee3057" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.7733662145499384,
      random: true,
      anim: { enable: true, speed: 10, opacity_min: 0, sync: false },
    },
    size: {
      value: 7.837237977805179,
      random: true,
      anim: { enable: true, speed: 5, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 0,
      color: "#ffffff",
      opacity: 0.51,
      width: 1,
    },
    move: {
      enable: true,
      speed: 5,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: {
        distance: 100.7962037962038,
        size: 8.984015984015985,
        duration: 0.5594405594405595,
        opacity: 8,
        speed: 3,
      },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4, },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});