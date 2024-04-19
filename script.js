gsap.to(".city", {left: -600, duration: 15, ease: "none"})

var timer = 0;
var timeinfo = setInterval(()=>{
    timer++;
    console.log(timer);
}, 1000)
var tl = gsap.timeline();
tl.to(".hand", {left: 0, top: -62, delay: 5})
tl.to(".hand", {top: 106})
tl.to(".shutter", {top: 0, delay: -0.5})
tl.to(".hand", {left: -145})
tl.to(".black-shade, .text", {opacity: 1, delay: -0.8})

tl.to(".hand", {left: 0, delay: 4})
tl.to(".hand", {top: -62})
tl.to(".shutter", {top: -164, delay: -0.5})
tl.to(".black-shade, .text", {opacity: 0, delay: -0.5})
tl.to(".hand", {left: -148})

tl.to(".frame-2-bg", {opacity: 1, delay: 2})
tl.to(".red-line, .frame-2-text", {top: 0, opacity: 1})
tl.to(".logo, .btn", {left: 0, opacity: 1, delay: -0.3, onComplete: function(){
    console.log("Finish", timer);
    clearInterval(timeinfo);
}})


