const initialPath = "M 10 100 Q 500 100 925 100";
const finalPath = "M 10 100 Q 500 100 990 100";

const svg = document.querySelector("svg");

svg.addEventListener("mousemove", (dets) => {
  gsap.to("svg path", {
    attr: {
      d: `M 10 100 Q ${dets.x} ${dets.y} 990 100`,
    },
  });
});

svg.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: {
      d: finalPath,
    },
    duration: 1.5,
    ease: "elastic.out(1.75,0.1)",
  });
});
