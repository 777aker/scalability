// Step 1
import {Application} from 'pixi.js';

(async() => {
  
  // Step 2
  const app = new Application();

  // Step 3
  await app.init();

  // Step 4
  document.body.appendChild(app.canvas);

})();