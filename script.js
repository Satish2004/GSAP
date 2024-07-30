var tl = gsap.timeline();
tl.from("h2",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.77,
})
tl.from("h4",{
    y:-20,
    opacity:0,
    // delay:0.77,
    duration:1,
    stagger:0.4

})
tl.from("h1",{
    y:-40,
    opacity:0,
    duration:1,
    
})