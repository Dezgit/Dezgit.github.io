// let template = `<div class="root" style="transform: translate(-50%, -50%) rotate({{ value }})">
// <div>
//     <div class="side left"></div>
//     <div class="side top"></div>
//     <div class="side right"></div>
//     <div class="side bottom"></div>
//   </div>
// </div>`

// let segments = 9
// for (let i = -segments; i < segments; i++) {
//     document.body.innerHTML += template.replace("{{ value }}", 90 / segments * i + "deg")
// }

// document.body.innerHTML += template.replace("{{ value }}", 90/segments * 0 + "deg")

jQuery("#carousel").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    rewind: true,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
        0: {
            items: 1
        },

        600: {
            items: 3
        },

        1024: {
            items: 4
        },

        1366: {
            items: 4
        }
    }
});

//  TESTIMONIALS CAROUSEL HOOK
$('#customers-testimonials').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
        0: {
            items: 1
        },

        600: {
            items: 3
        },

        1024: {
            items: 4
        },

        1366: {
            items: 4
        }
    }
});