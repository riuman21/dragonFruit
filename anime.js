document.addEventListener('DOMContentLoaded' , () => {
    anime({
        targets : '.logo',
        translateX : [-50,0],
        duration : 1400,
        opacity :[0,1],
        easing : 'easeInOutQuad',
    }),
    anime({
        targets : '#top-text',
        translateY : [-50,0],
        duration : 1700,
        opacity :[0,1],
        easing : 'easeInOutQuad',
    }),
    anime({
        targets : '#hero-img',
        translateX : [-1000,0],
        rotate : '2turn',
        duration : 2000,
        delay : 900,
        opacity : [0,1],
        easing: 'easeInOutExpo'
    }),
    anime({
        targets : '#bottom-text',
        translateY : [-50,0],
        duration : 1800,
        opacity : [0,1],
        easing : 'easeInOutQuad'
    })

    anime({
        targets : '#heading',
        opacity : [0,1],
        duration : 1200,
        easing: 'easeInOutSine'
    })
})