// Timeline 1
var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "0 95%",
      end: "70% 50%",
      scrub: 2,
      invalidateOnRefresh: true
    }
  });
  
  tl.to("#can", {
    top: "98%",
    rotate: "30deg",
    left: "12%",
    immediateRender: true // Stops premature render
  }, "chocolate");
  
  tl.to("#chocolate", {
    top: "160%",
    left: "20%",
    immediateRender: true // Stops premature render
  }, "chocolate");
  
  tl.to("#chocolate2", {
    top: "175%",
    left: "70%",
    width: "20%",
    rotate: "-15deg",
    immediateRender: true // Stops premature render
  }, "chocolate");
  
  tl.to("#almod", {
    top: "110%",
    left: "70%",
    rotate: "130deg",
    immediateRender: true
  }, "chocolate");
  
  tl.to("#almod2", {
    top: "110%",
    left: "10%",
    rotate: "130deg",
    immediateRender: true
  }, "chocolate");
  
  // Timeline 2
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#footer",
      start: "0 85%",
      end: "20% 50%",
      scrub: 2,
      invalidateOnRefresh: true
    }
  });
  
  tl2.to("#can", {
    width: "30%",
    left: "35%",
    top: "210%",
    rotate: "0deg",
    immediateRender: true
  }, 'can');
  
  tl2.to("#chocolate", {
    left: "42%",
    top: "214%",
    immediateRender: true
  }, 'can');
  
  tl2.to("#chocolate2", {
    width: "15%",
    left: "35%",
    top: "290%",
    immediateRender: true
  }, 'can');
  