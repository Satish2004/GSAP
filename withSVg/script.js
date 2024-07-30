
var path =  "M 10 100 Q 500 100 990 100"
var finalPath  = "M 10 100 Q 500 100 990 100"
var string = document.querySelector("#string");
string.addEventListener("mousemove",function(e){
    path = `M 10 100 Q ${e.x} ${e.y} 990 100`;
    gsap.to("svg path",{
        attr:{
            d:path},
            duration:0.2,
            ease: "power3.out",
            // ease: "elastic.out(1,0.2)",
        
    })
})


// mouse leave
string.addEventListener("mouseleave",function(){
gsap.to("svg path",{
    attr:{
        d:finalPath},
        duration:0.8,
        // ease: "bounce.out",
        ease: "elastic.out(1,0.2)",

 
})
})