const cursorDot = document.querySelector("[data-cursor-dot]")
const cursorOutline = document.querySelector("[data-cursor-outline]")

$("body").on( "mouseenter", function() {
  $(cursorDot).fadeIn(250);
  $(cursorOutline).fadeIn(450);
});

$("body").on( "mouseleave", function() {
  $(cursorDot).fadeOut();
  $(cursorOutline).fadeOut();
});

window.addEventListener("mousemove", function(e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, {duration: 250, fill: "forwards"});

  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, {duration: 800, fill: "forwards"});
});


$('button, a, img').hover(function() {
  $(cursorDot).addClass('cursor-dot-hover', 300)
  $(cursorOutline).addClass('cursor-outline-hover', 300)
}, function() {
  $(cursorDot).removeClass('cursor-dot-hover', 300)
  $(cursorOutline).removeClass('cursor-outline-hover', 300)
})

const switchTheme = () => {
    const rootElem = document.documentElement
    let dataTheme = rootElem.getAttribute('data-theme'), 
    newTheme

    newTheme = (dataTheme == 'light') ? 'dark' : 'light'

    rootElem.setAttribute('data-theme', newTheme)

    localStorage.setItem('theme', newTheme)

}

document.querySelector('#theme-switcher').addEventListener('click', switchTheme)