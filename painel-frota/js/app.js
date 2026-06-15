import { startClock } from "./ui/clock.js";
import { initAudio } from "./ui/audio.js";
import { initFullscreen } from "./ui/fullscreen.js";

import { loadPainel } from "./services/painel.js";

startClock();

initAudio();

initFullscreen();

loadPainel();

setInterval(
loadPainel,
30000
);
