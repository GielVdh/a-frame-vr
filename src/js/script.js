const cam = document.querySelector(`a-entity`),
  head = document.querySelector(`#head`);
let camPos;

const init = () => {

  console.info(`Hello, A-frame-test`);
  updateCamControls();
  setupPlayerHead();
  window.addEventListener(`keydown`, handleKeyDown);
};

const updateCamControls = () => {
  //console.log(cam.getAttribute(`position`));
  requestAnimationFrame(updateCamControls);
};

const handleKeyDown = e => {
  console.log(e);
  camPos = cam.getAttribute(`position`);
  console.log(camPos);
  setupPlayerHead();
};

const setupPlayerHead = () => {
  console.log(cam.getAttribute(`userHeight`));
  head.getAttribute(`position`).y = cam.userHeight;
  console.log(`head = ${head.getAttribute(`position`).y}`);
};

init();
