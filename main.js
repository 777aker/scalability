// Step 1
import { Application } from "pixi.js";

(async () => {
  // Step 2
  const app = new Application();

  // Step 3
  await app.init({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x34495e,
  });

  app.canvas.style.position = "absolute";

  // Step 4
  document.body.appendChild(app.canvas);
})();
