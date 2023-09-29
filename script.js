// tilts
VanillaTilt.init(document.querySelector(".video-source"), {
    max: 1,
    speed: 1200,
    scale: 1.5,
    "mouse-event-element":  ".video-hero h1"
});

VanillaTilt.init(document.querySelector(".video-hero h1"), {
    max: 4,
    speed: 1000,
    scale: .75
});

VanillaTilt.init(document.querySelector(".nav"), {
    max: 1,
    speed: 1200
});

//dark mode
const switchTheme = () => {
    const rootElem = document.documentElement
    let dataTheme = rootElem.getAttribute('data-theme'), 
    newTheme

    newTheme = (dataTheme == 'light') ? 'dark' : 'light'

    rootElem.setAttribute('data-theme', newTheme)

    localStorage.setItem('theme', newTheme)

}

document.querySelector('#theme-switcher').addEventListener('click', switchTheme)