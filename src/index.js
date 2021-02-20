const projDescs = document.querySelectorAll(
  ".projects__wrapper .subsection .desc"
);

const setProjDescHeight = () => {
  if (document.body.clientWidth <= 800) {
    projDescs.forEach((desc) => {
      desc.style.height = "initial";
    });
    return;
  }

  let maxDescHeight = 0;
  projDescs.forEach((desc) => {
    if (desc.clientHeight > maxDescHeight) maxDescHeight = desc.clientHeight;
  });

  projDescs.forEach((desc) => {
    desc.style.height = maxDescHeight + "px";
  });
};

// Runs when the document loads.
setTimeout(setProjDescHeight, 0);

// Runs when the window is resized.
window.addEventListener("resize", setProjDescHeight);

