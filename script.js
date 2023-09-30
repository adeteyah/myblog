//scroll video
const container = document.querySelector('.container');
const content = document.querySelector('.video-intro');


container.addEventListener('scroll', () => {
    const scrollY = container.scrollTop;
    const triggerPoint = content.offsetTop + content.clientHeight / 2;

    if (scrollY > triggerPoint) {
        $(content).fadeOut();
    } else {
        $(content).fadeIn();
    }
});

$(document).ready(function() {
    const container = $('.container');
    const elementToResize = $('.nav-bot-scroll');
    
    container.scroll(function() {
        // Calculate the new width based on the scroll position
        const scrollPercentage = (container.scrollTop() / (container[0].scrollHeight - container.height())) * 100;
        
        // Apply the new width to the element
        elementToResize.css('width', `${scrollPercentage}%`);
    });
});

// cursor
var cursor = $(".cursor"),
    follower = $(".cursor-follower");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.012, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;
    
    TweenMax.set(follower, {
        css: {    
        left: posX - 58,
        top: posY - 58
        }
    });
    
    TweenMax.set(cursor, {
        css: {    
        left: mouseX - 10,
        top: mouseY - 10
        }
    });
  }
});

$(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

$("a, img, button").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});
$("a, img, button").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});

// tilts
// VanillaTilt.init(document.querySelector(".video-source"), {
//     max: 25
// });

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