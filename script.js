function showhamburger() {
    const sidebar = document.querySelector('.side-bar');
    sidebar.style.display = 'flex';
}

function hidehamburger() {
    const sidebar = document.querySelector('.side-bar');
    sidebar.style.display = 'none';
}

function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locomotiveAnimation();

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

function locomotiveAnimation() {
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    document.querySelectorAll('[data-scroll-to]').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const target = document.querySelector(link.getAttribute('data-scroll-to'));
            if (target) {
                locoScroll.scrollTo(target);
            }
        });
    });
}
locomotiveAnimation();

