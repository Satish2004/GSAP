// var tl = gsap.timeline();
// tl.to("#full" , {
//     right:0,
//     duratrion:0.7,
// })
// tl.from("#full h2" , {
//   x:140,
//     duratrion:0.3,
//     stagger:0.3,
//     opacity:0,
// })

// var tl = gsap.timeline();
// tl.to("#full" , {
//     right:"-20%",
//     duratrion:2,
// })
 

var navIcon = document.querySelector(".nav_menu-icon");
navIcon.addEventListener("click",function(){

    var tl = gsap.timeline();
tl.to("#full" , {
    right:0,
    duratrion:0.7,
    
    
})
tl.from("#full h2" , {
  x:140,
    duratrion:0.3,
    stagger:0.3,
    opacity:0,
})

gsap.to(navIcon, {
    rotation: 180,
    duration: 0.7,
  });
});



var fullIcon = document.querySelector(".full_menu-icon");
   
   
   fullIcon.addEventListener("click",function(){
    var tl = gsap.timeline();
    tl.to("#full" , {
        right:"-20%",
        duratrion:2,
    })

    gsap.to(fullIcon, {
        rotation: 180,
        duration: 2.7,
      });
    });
    



