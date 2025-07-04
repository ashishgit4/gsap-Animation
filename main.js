function page1Anime(){
    var tl = gsap.timeline();

tl.from("nav h1 , nav h4 , nav button", {
  y: -40,
  opacity: 0,
  delay: 1,
  duration:0.5,
  stagger: 0.15,
});

tl.from(".center-part1 h1", {
  opacity: 0,
  duration: 0.4,
  x: -200,
},"-=0.3");


tl.from(".center-part1 p", {
  opacity: 0,
  duration: 0.4,
  x: -100,
});


tl.from(".center-part1 button", {
  opacity: 0,
  duration: 0.4,
});



tl.from(".center-part2 img", {
  opacity: 0,
  duration:0.5,
  x:200
} , "-=0.5");

}



function page2Anime(){



var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 50%",
        end:"top -60%",
        scrub:2
    }
})


tl2.from(".section1bottom img", {
  opacity: 0,
  stagger:0.2,
  y:30,
  duration:0.6
});

tl2.from(".services",{
  opacity:0,
  y:130,
  duration:0.5
},"-=0.8")

tl2.from(".elem.line1.left",{
  x:-300,
  opacity:0,
  duration:1
},"anim1")


tl2.from(".elem.line1.right",{
  x:300,
  opacity:0,
  duration:1
},"anim1")



tl2.from(".elem.line2.left",{
  x:-300,
  opacity:0,
  duration:1
},"anim2")


tl2.from(".elem.line2.right",{
  x:300,
  opacity:0,
  duration:1
},"anim2")


tl2.from(".elem.line3.left",{
  x:-300,
  opacity:0,
  duration:1
},"anim3")


tl2.from(".elem.line3.right",{
  x:300,
  opacity:0,
  duration:1
},"anim3")



}
page1Anime()
page2Anime()