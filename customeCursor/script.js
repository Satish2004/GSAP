var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");


main.addEventListener("mousemove", function(e){
gsap.to(cursor, {
    x:e.x,
    y:e.y,
    duration:0.3,
    // borderRadius:20%
    backgroundColor: "yellow",
    // ease: "back.out",
})

})

imageDiv.addEventListener("mouseenter",function(e){
    cursor.innerHTML = "Vew more"
gsap.to(cursor,{
    scale:2
})
})
imageDiv.addEventListener("mouseleave",function(e){
      cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1
    })
    })