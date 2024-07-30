gsap.to("#page2 h1 ",{
    transform: "translateX(-150%)",
    duration:2,
    scrollTrigger:{
        trigger:"#page2",
        markers:true,
        scrub:4,
        pin:true,
        start:"top 0%",
        end:"top -200%"


    }

})