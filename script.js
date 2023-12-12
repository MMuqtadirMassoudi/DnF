function showhamburger() {
    const sidebar = document.querySelector('.side-bar');
    sidebar.style.display = 'flex';
}

function hidehamburger() {
    const sidebar = document.querySelector('.side-bar');
    sidebar.style.display = 'none';
}

function loadinganimation() {
    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.3,
        duration: 0.3,
        stagger: 0.4,
    });

    gsap.from("#page2 #elem1", {
        scale: 0.9,
        opacity: 0,
        delay: 1.5,
        duration: 0.4,
    });

    gsap.from("#page2 #elem2", {
        scale: 0.9,
        opacity: 0,
        delay: 1.8,
        duration: 0.4,
    });

    gsap.from("#page2 #elem3", {
        scale: 0.9,
        opacity: 0,
        delay: 2.1,
        duration: 0.4,
    });
}
loadinganimation();

function cursoranimation() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to('#cursor', {
            left: dets.x,
            top: dets.y
        });
    });

    document.querySelectorAll('.child').forEach(function (elem) {
        elem.addEventListener('mouseenter', function () {
            gsap.to('#cursor', {
                height: '150px',
                width: '150px',
                scale: 1
            });
        });

        elem.addEventListener('mouseleave', function () {
            gsap.to('#cursor', {
                height: '50px',
                width: '50px',
                scale: 0
            });
        });
    });
}
cursoranimation();

function infotextanimation() {
    gsap.from("#page1 p", {
        y: 100,
        opacity: 0,
        delay: 0.8,
        duration: 0.8,
        stagger: 0.4,
    });
}
infotextanimation();

