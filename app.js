gsap.registerPlugin(ScrollTrigger);

let contactMe = document.querySelector(".section5 h2")
let contactMeText = contactMe.textContent
let newElement= ""

for(let text of contactMeText){
    newElement +=`<span>${text}</span>`
        
}
contactMe.innerHTML =newElement

// YOUR CODE HERE

let section1= gsap.timeline()
section1.from(".content h1 span:nth-child(2)",{x:"100vw"})
.from(".content span:first-child",{x:-300}).from(".content p",{rotate:"45%", scale:0})
.from(".content img",{y:"100vh"})

let section2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section2',
      start: 'top',
      end: 'bottom',
      pin: true,
      scrub: true, 
    }
  })

  section2.from(".section2 span:first-child",{y:-400})
        .from(".section2 span:nth-child(2)",{y:-400})
        .from(".section2 p",{scale:0})

let section3 = gsap.timeline({
            scrollTrigger: {
              trigger: '.section3 ',
              markers:true,
              start: 'top',
              end: 'bottom 30%',
              
              
            //   pin: true,
              scrub: true, 
            }
          })

          section3.from(".section3 h2",{x:-550})
            .from(".section3 p span:first-child",{y:"50vh"})
            .to(".section3 p span:first-child",{background:"white",color:"black"})
            .from(".section3 p span:nth-child(2)",{y:"50vh"})
            .to(".section3 p span:nth-child(2)",{background:"white",color:"black"})
            .from(".section3 p span:nth-child(3)",{y:"50vh"})
            .to(".section3 p span:nth-child(3)",{background:"white",color:"black"})
            .from(".section3 p span:nth-child(4)",{y:"50vh"})
            .to(".section3 p span:nth-child(4)",{background:"white",color:"black"})
            

        section3.to(".section4 ",{x:-1350}).from(".section4 portfolio-item",{x:-1350})


        let section5 = gsap.timeline({
            scrollTrigger: {
              trigger: '.section5 ',
              markers:true,
              start: 'top',
              end: 'bottom 40%',
              
              
              pin: true,
            //   scrub: true, 
            }
          })

          section5.from('.section5 h2 span:first-child',{y:"-250"})
          .from('.section5 h2 span:nth-child(2)',{y:"-250"})
          .from('.section5 h2 span:nth-child(3)',{y:"-250"})
          .from('.section5 h2 span:nth-child(4)',{y:"-250"})
          .from('.section5 h2 span:nth-child(5)',{y:"-250"})
          .from('.section5 h2 span:nth-child(6)',{y:"-250"})
          .from('.section5 h2 span:nth-child(7)',{y:"-250"})
          .from('.section5 h2 span:nth-child(8)',{y:"-250"})
          .from('.section5 h2 span:nth-child(9)',{y:"-250"})
          .from('.section5 h2 span:nth-child(10)',{y:"-250"})

        .from('.section5 p', {y:30})

        .from('.contact-btn', {scale:0})
          