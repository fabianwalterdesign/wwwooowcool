
gsap.registerPlugin(ScrollTrigger);

// Intro Slide-In

gsap.fromTo(".intro_quote_sticker_wrap", {
  x: "-40vw",
  rotation: 0
}, {
  x: "65vw",
  rotation: 1100,
  duration: 3,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".intro_quote_wrap",
    start: "top 40%",
    end: "bottom 20%"
  }
});

gsap.from(".intro_paragraph", {
  opacity: 0,
  y: "200%",
  duration: 0.6,
  ease: "easeOutQuart",
  scrollTrigger: {
    trigger: ".intro_paragraph_wrap",
    start: "top 30%",
    end: "bottom 20%"
  }
});

gsap.from(".quiz_answer", {
  opacity: 0,
  y: "100%",
  stagger: 0.3,
  duration: 0.6,
  ease: "easeOutQuart",
  scrollTrigger: {
    trigger: ".quiz_content_wrap.u-grid-autofit",
    start: "top 90%",
    end: "bottom 20%"
  }
});


// matter.js Functions

function initSimulation() {
  var Engine = Matter.Engine,
    Render = Matter.Render,
    Events = Matter.Events,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;

  var engine = Engine.create(),
    world = engine.world;
  var containerElement = document.querySelector(".tag-canvas");
  var containerWidth = containerElement.clientWidth + 2;
  var containerHeight = containerElement.clientHeight + 2;

  var render = Render.create({
    element: containerElement,
    engine: engine,
    options: {
      width: containerWidth,
      height: containerHeight,
      pixelRatio: 2,
      background: "transparent",
      border: "none",
      wireframes: false,
    }
  });

  var ground = Bodies.rectangle(
    containerWidth / 2 + 160,
    containerHeight + 80,
    containerWidth + 320,
    160,
    { render: { fillStyle: "#000000" }, isStatic: true }
  );
  var wallLeft = Bodies.rectangle(
    -80,
    containerHeight / 2,
    160,
    containerHeight,
    { isStatic: true }
  );
  var wallRight = Bodies.rectangle(
    containerWidth + 80,
    containerHeight / 2,
    160,
    1200,
    { isStatic: true }
  );
  var roof = Bodies.rectangle(
    containerWidth / 2 + 160,
    -80,
    containerWidth + 320,
    160,
    { isStatic: true }
  );

  var radius = 20;

  var tagLauter = Bodies.rectangle(containerWidth / 2 + 150, 500, 200, 101, {
    chamfer: { radius: radius },
    render: { sprite: { texture: "https://uploads-ssl.webflow.com/65f9458664d6556cb8b26f29/65fd56cc72c420778a5a2ee6_tag-lauter.svg", xScale: 1.2, yScale: 1.2 } }
  });
  var tagInteraktiver = Bodies.rectangle(containerWidth / 2 + 10, 300, 200, 101, {
    chamfer: { radius: radius },
    render: { sprite: { texture: "https://uploads-ssl.webflow.com/65f9458664d6556cb8b26f29/65fd56cc732f74ad161c9d45_tag-interaktiver.svg", xScale: 1.2, yScale: 1.2 } }
  });
  var tagWichtiger = Bodies.rectangle(containerWidth / 2 - 150, 380, 200, 101, {
    chamfer: { radius: radius },
    render: { sprite: { texture: "https://uploads-ssl.webflow.com/65f9458664d6556cb8b26f29/65fd56cca2d45138393ccf6c_tag-wichtiger.svg", xScale: 1.2, yScale: 1.2 } }
  });
  var tagEffektiver = Bodies.rectangle(containerWidth / 2 + 700, 490, 200, 101, {
    chamfer: { radius: radius },
    render: { sprite: { texture: "https://uploads-ssl.webflow.com/65f9458664d6556cb8b26f29/65fd56cced2718f3cc18ac4f_tag-effektiver.svg", xScale: 1.2, yScale: 1.2 } }
  });
  var tagBunter = Bodies.rectangle(containerWidth / 2 - 142, 440, 200, 101, {
    chamfer: { radius: radius },
    render: { sprite: { texture: "https://uploads-ssl.webflow.com/65f9458664d6556cb8b26f29/65fd56cc4302bf90a53276bc_tag-bunter.svg", xScale: 1.2, yScale: 1.2 } }
  });
  var tagGroesser = Bodies.rectangle(containerWidth / 2 - 10, 800, 200, 101, {
    chamfer: { radius: radius },
    render: { sprite: { texture: "https://uploads-ssl.webflow.com/65f9458664d6556cb8b26f29/65fd56cc0ae3641e5ca88288_tag-bunter-1.svg", xScale: 1.2, yScale: 1.2 } }
  });
  var tagRelevanter = Bodies.rectangle(containerWidth / 2 - 242, 420, 200, 101, {
    chamfer: { radius: radius },
    render: { sprite: { texture: "https://uploads-ssl.webflow.com/65f9458664d6556cb8b26f29/65fd56ccf8cb4a71ff13acea_tag-relevanter.svg", xScale: 1.2, yScale: 1.2 } }
  });
  var tagPraesenter = Bodies.rectangle(containerWidth / 2 + 250, 100, 200, 101, {
    chamfer: { radius: radius },
    render: { sprite: { texture: "https://uploads-ssl.webflow.com/65f9458664d6556cb8b26f29/65fd56cc0bdf49442037d2eb_tag-praesenter.svg", xScale: 1.2, yScale: 1.2 } }
  });
  var tagEinflussreicher = Bodies.rectangle(containerWidth / 2 - 460, 380, 200, 101, {
    chamfer: { radius: radius },
    render: { sprite: { texture: "https://uploads-ssl.webflow.com/65f9458664d6556cb8b26f29/65fd56cc39f014395867475c_tag-einflussreicher.svg", xScale: 1.2, yScale: 1.2 } }
  });
  var tagVoller = Bodies.rectangle(containerWidth / 2 - 100, 540, 200, 101, {
    chamfer: { radius: radius },
    render: { sprite: { texture: "https://uploads-ssl.webflow.com/65f9458664d6556cb8b26f29/65fd56cc6551ca811f3dbf58_tag-voller.svg", xScale: 1.2, yScale: 1.2 } }
  });

  World.add(engine.world, [
    ground,
    wallLeft,
    wallRight,
    roof,
    tagLauter,
    tagInteraktiver,
    tagWichtiger,
    tagEffektiver,
    tagBunter,
    tagGroesser,
    tagRelevanter,
    tagPraesenter,
    tagEinflussreicher,
    tagVoller
  ]);

  var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });

  World.add(world, mouseConstraint);

  render.mouse = mouse;

  mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
  mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

  let click = false;

  document.addEventListener("mousedown", () => (click = true));
  document.addEventListener("mousemove", () => (click = false));
  document.addEventListener("mouseup", () => console.log(click ? "click" : "drag"));

  Events.on(mouseConstraint, "mouseup", function(event) {
    var mouseConstraint = event.source;
    var bodies = engine.world.bodies;
    if (!mouseConstraint.bodyB) {
      for (i = 0; i < bodies.length; i++) {
        var body = bodies[i];
        if (click === true) {
          if (Matter.Bounds.contains(body.bounds, mouseConstraint.mouse.position)) {
            var bodyUrl = body.url;
            console.log("Body.Url >> " + bodyUrl);
            if (bodyUrl != undefined) {
              window.open(bodyUrl, "_blank");
              console.log("Hyperlink was opened");
            }
            break;
          }
        }
      }
    }
  });

  Engine.run(engine);
  Render.run(render);
}

var observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      initSimulation();
      observer.disconnect();
    }
  });
}, { rootMargin: '-50%' });

var triggerElement = document.querySelector(".intro_conclusion_wrap");
observer.observe(triggerElement);




// Reaction Slider

document.addEventListener("DOMContentLoaded", function() {
  var reactionIconWrap = document.querySelector(".stat_reaction_icon_wrap");
  var reactionProgress = document.querySelector(".stat_reaction_progress");
  var reactionBar = document.querySelector(".stat_reaction_bar");
  var isDragging = false;

  reactionIconWrap.addEventListener("mousedown", startDragging);
  reactionIconWrap.addEventListener("touchstart", startDragging);
  document.addEventListener("mouseup", stopDragging);
  document.addEventListener("touchend", stopDragging);
  document.addEventListener("mousemove", drag);
  document.addEventListener("touchmove", drag);

  function startDragging(event) {
    isDragging = true;
    event.preventDefault();
  }

  function stopDragging(event) {
    isDragging = false;
  }

  function drag(event) {
    if (isDragging) {
      var clientX;
      if (event.type === "touchmove") {
        var touch = event.touches[0];
        clientX = touch.clientX;
      } else {
        clientX = event.clientX;
      }

      var rect = reactionBar.getBoundingClientRect();
      var percent = ((clientX - rect.left) / rect.width) * 100;
      percent = Math.min(Math.max(percent, -10), 100 - (reactionIconWrap.offsetWidth / reactionBar.offsetWidth) * 100 + 10);
      reactionIconWrap.style.left = percent + "%";

      var progressWidth = percent + 15;
      progressWidth = Math.min(progressWidth, 100);
      reactionProgress.style.width = progressWidth + "%";
    }
  }
});

// Quiz

document.addEventListener('DOMContentLoaded', function() {
  var answers = document.querySelectorAll('.quiz_answer');

  answers.forEach(function(answer) {
    answer.addEventListener('click', function() {
      var originalText = answer.textContent; // Speichern des ursprünglichen Textes
      if (answer.classList.contains('is-correct')) {
        answer.textContent = 'Richtig';
        answer.style.backgroundColor = '#C5FFA0';
        answer.style.transition = 'background-color 0.5s ease, transform 0.5s ease';
        answer.style.transform = 'scale(1.1)';

        setTimeout(function() {
          answer.textContent = originalText; // Setze den Text zurück
          answer.style.backgroundColor = ''; // Setze die Hintergrundfarbe zurück
          answer.style.transform = ''; // Setze das Transform zurück
        }, 3000); // 3000 Millisekunden sind 3 Sekunden
      } else {
        answer.classList.add('shake');
        answer.style.backgroundColor = '#FFFCEF';
        setTimeout(function() {
          answer.classList.remove('shake');
          answer.style.backgroundColor = '';
        }, 300);
      }
    });
  });
});
