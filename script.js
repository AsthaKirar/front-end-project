function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

loco();




function loadingAnimation() {
    var t1 = gsap.timeline()

    t1.from(" .load h1,.load h2", {
        y: 120,
        duration: .7,
        delay: 0.2,
        stagger: .2,
    });
    t1.to(".load", {
        opacity: 0,
        delay: 2,
        stagger: -0.2
    });
    t1.to("#loader", {
        top: "-100%",
        delay: .2,
        ease: "power4.out",
    });
    t1.from(".text h1", {
        y: 200,
        opacity: 0,
        stagger: {
            amount: .5,
        }
    })
    t1.from("#nav", {
        opacity: 0,
    }, "-=0.5");


    // var grow = 0;
    // var timer = document.querySelector("#timer h4");
    // var int = setInterval(function () {
    //     if (grow < 100) {
    //         grow++;
    //         timer.innerHTML = grow;
    //     }
    // },29);
    // setTimeout(function () {
    //     clearInterval(int);
    // }, 4500);

var grow = 0;
var timer = document.querySelector("#timer h4");
var int = setInterval(function () {
    if (grow <100) {
        grow++;
        timer.innerHTML = grow;
    }
},29);
setTimeout(function () {
    clearInterval(int);
}, 4500);





}


loadingAnimation();

function page2Animation() {
    var videoC = document.querySelector("#video-container");
    videoC.addEventListener("mouseenter", function () {
        gsap.to(".mousefollower", {
            opacity: 0,
        })
    })
    videoC.addEventListener("mouseleave", function () {
        gsap.to(".mousefollower", {
            opacity: 1,
        })
        gsap.to("#play-btn", {
            top: "-13%",
            left: "70%",
        })
    })

    var videoImage = document.querySelector("#video-container img")
    var videoVideo = document.querySelector("#video-container video")

    var flag = 0

    videoC.addEventListener("click", function () {
        if (flag == 0) {

            gsap.to(videoVideo, {
                opacity: 1
            })

            gsap.to("#play-btn", {
                scale: 0.8
            })
            document.querySelector("#play-btn").innerHTML = '<i class="ri-pause-line"></i>'
            videoVideo.play()
            flag = 1
        } else {
            gsap.to(videoVideo, {
                opacity: 0
            })
            gsap.to("#play-btn", {
                scale: 1
            })
            document.querySelector("#play-btn").innerHTML = '<i class="ri-play-fill"></i>'

            videoVideo.pause()
            flag = 0
        }
    })


    videoC.addEventListener("mousemove", function (dets) {
        gsap.to("#play-btn", {
            top: dets.y - 200,
            left: dets.x - 555,
        })


    })

}

page2Animation()
// Shery.mouseFollower()
function SheryAnimation() {
    Shery.mouseFollower()
    Shery.makeMagnet("#nav-part2 h1");
    Shery.imageEffect(".images", {
        style: 6,
        gooey: true,
        //   debug:true,
        config: { "noiseDetail": { "value": 6.11, "range": [0, 100] }, "distortionAmount": { "value": 2.9, "range": [0, 10] }, "scale": { "value": 59.54, "range": [0, 100] }, "speed": { "value": 0.58, "range": [0, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.8333333134651184 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.27, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.84, "range": [0, 10] }, "metaball": { "value": 0.44, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.38, "range": [0, 2] }, "noise_scale": { "value": 8.4, "range": [0, 100] } }

    })
}
SheryAnimation();
function page5Animation() {

    gsap.to(".page5-mark", {
        x: -1000,
        scrollTrigger: {
            trigger: "#page5",
            scroller: "#main",
            // markers:true,
            start: "top 150%",
            end: "top -50%",
            scrub: 2,



        }


    });
    gsap.from(".page5-marking", {
        x: -1000,
        scrollTrigger: {
            trigger: "#page5",
            scroller: "#main",
            //    markers:true,
            start: "top 150%",
            end: "top -50%",
            scrub: 2,



        }


    });


}

page5Animation();



var footText = document.querySelectorAll("#footer #text")

footText.forEach(function (elem) {
    var textC = elem.textContent;

    var splited = textC.split("");
    //  console.log(splited);
    var clutter = "";
    splited.forEach(function (e) {
        clutter += `<span>${e}</span>`
        // console.log(clutter);

    })
    elem.innerHTML = clutter;

})
// var svglast=document.querySelector("#svg svg")
var foot = document.querySelector("#foot-text");
foot.addEventListener("mouseenter", function () {
    gsap.to("h1 span", {
        opacity: 0,
        stagger: 0.1,
    })
    gsap.to("h2 span", {
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.4
    })
    gsap.to("#svg svg", {
        x: 40,
        duration: 0.1,
        delay: 0.8,
    })
})
foot.addEventListener("mouseleave", function () {
    gsap.to("h2 span", {
        opacity: 0,
        stagger: 0.05,
        duratio: 0.3,
    })
    gsap.to("h1 span", {
        opacity: 1,
        stagger: 0.05,
        delay: 0.4,
        duratio: 0.3,
    })
    gsap.to("#svg svg", {
        x: 0,
        duration: 0.3,
        delay: 0.8,
        // ease:Power1
    })
})

var sideh1 = document.querySelectorAll("#change-h1 #h1")

sideh1.forEach(function (ele) {
    var sideh1C = ele.textContent;

    var splitedside = sideh1C.split("");
    console.log(splitedside);
    var clutter1 = "";
    splitedside.forEach(function (ee) {
        clutter1 += `<span>${ee}</span>`
        // console.log(clutter1);

    })
    ele.innerHTML = clutter1;
})
var change = document.querySelector("#change-h1");
change.addEventListener("mouseenter", function () {
    console.log("hey")
    gsap.to("#change-h1 h1 span", {
        opacity: 0,
        stagger: 0.1,
    })
    gsap.to(" #change-h1 h2 span", {
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.4
    })

})
change.addEventListener("mouseleave", function () {
    console.log("hey")
    gsap.to("#change-h1 h2 span", {
        opacity: 0,
        stagger: 0.1,
    })
    gsap.to("#change-h1 h1 span", {
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.4
    })

})


var wrok = document.querySelectorAll('#work #or')
wrok.forEach(function (loo) {
    var workText = loo.textContent;
    console.log(workText);
    var worksplit = workText.split("");
    console.log(worksplit);
    var clutter2 = "";
    worksplit.forEach(function (eeee) {
        clutter2 += `<span>${eeee}</span>`
    });
    loo.innerHTML = clutter2;
})
var workadd = document.querySelector("#work");
workadd.addEventListener("mouseenter", function () {
    console.log("hey")
    gsap.to("#work h1 span", {
        opacity: 0,
        stagger: 0.1,
    })
    gsap.to("#work h2 span", {
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.4
    })

})
workadd.addEventListener("mouseleave", function () {
    console.log("hey")
    gsap.to("#work h2 span", {
        opacity: 0,
        stagger: 0.1,
    })
    gsap.to("#work h1 span", {
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.4
    })

})
var sideh2 = document.querySelectorAll("#change-h2 #h2")

sideh2.forEach(function (elee) {
    var sideh2C = elee.textContent;

    var splitedh2 = sideh2C.split("");
    console.log(splitedh2);
    var clutter3 = "";
    splitedh2.forEach(function (eu) {
        clutter3 += `<span>${eu}</span>`
        // console.log(clutter1);

    })
    elee.innerHTML = clutter3;
})
var change = document.querySelector("#change-h2");
change.addEventListener("mouseenter", function () {
    console.log("hey")
    gsap.to("#change-h2 h1 span", {
        opacity: 0,
        stagger: 0.1,
    })
    gsap.to(" #change-h2 h2 span", {
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.4
    })

})
change.addEventListener("mouseleave", function () {
    console.log("hey")
    gsap.to("#change-h2 h2 span", {
        opacity: 0,
        stagger: 0.1,
    })
    gsap.to("#change-h2 h1 span", {
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.4
    })

})

var sideh3 = document.querySelectorAll("#change-h3 #h3")

sideh3.forEach(function (elu) {
    var sideh3C = elu.textContent;

    var splitedh3 = sideh3C.split("");
    console.log(splitedh3);
    var clutter3 = "";
    splitedh3.forEach(function (uu) {
        clutter3 += `<span>${uu}</span>`
        // console.log(clutter1);

    })
    elu.innerHTML = clutter3;
})
var changeh3 = document.querySelector("#change-h3");
changeh3.addEventListener("mouseenter", function () {
    console.log("hey")
    gsap.to("#change-h3 h1 span", {
        opacity: 0,
        stagger: 0.1,
    })
    gsap.to(" #change-h3 h2 span", {
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.4
    })

})
changeh3.addEventListener("mouseleave", function () {
    console.log("hey")
    gsap.to("#change-h3 h2 span", {
        opacity: 0,
        stagger: 0.1,
    })
    gsap.to("#change-h3 h1 span", {
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.4
    })

})
var t3=gsap.timeline();
var nav1part = document.querySelector("#nav1-part svg")
var flug = 0;
nav1part.addEventListener("click", function () {
    
   if(flug == 0){
        // t3.set("#side-left h1, #side-right", { opacity:1 });
    console.log("hey")
    t3.to(".page1 #click-page", {
        top: "0%",
        ease:"power4.out",
        

        
    });
   
     t3.from("#side-left h1", {
        y:30,
        opacity: 0,
        delay:0.4,
        stagger: {
            amount: .5,
        }
    },"v")
    t3.from("#side-right", {
        y:30,
        opacity: 0,
        delay:0.6,
        stagger: {
            amount: .5,
        }
    },"v")
    flug = 1;       
}
else{
    console.log("by")
   
    t3.to("#side-left h1, #side-right", {
        opacity: 0,
        stagger:0.2
         
    },"p")
    t3.to(".page1 #click-page",{
        top:"-100%",
        ease:"power4.out",
        duration:0.2,

    });
    flug = 0;
}
});
var flagimg=document.querySelector("#textC .innertext");
flagimg.addEventListener("mousemove",function(dets){
    gsap.to("#content img",{
        x:dets.x - (400),
        y:dets.y - (500),
        opacity:1,
    })
})
flagimg.addEventListener("mouseleave",function(){
    gsap.to("#content img",{
        opacity:0,
    })
    });

// function themchange(){

//     var oby=document.querySelector("#nav-part1 svg");
//     oby.addEventListener("click",function(){
//         console.log("hey")
//         // document.documentElement.style.setProperty(" --primary","#fff")
//         // document.documentElement.style.setProperty(" --secondary","#151515")

//     })
// }
// themchange();
// 


//     var obys = document.querySelector("#part1-1 h2")

//     obys.addEventListener("click", function () {
//         console.log("hry")
//     //     document.documentElement.style.setProperty("--primary", "#fff")
//     //     document.documentElement.style.setProperty("--secondary", "#151515")
//      })
// }

// themeChange()
var select=document.querySelector("part1-1 h2");
select.addEventListener("click", function(){
    console.log("hey");
})