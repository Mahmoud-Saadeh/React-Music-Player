import { v4 as uuidv4 } from "uuid";
import covertaylor from "./cover.jpg";
import audiotaylor from "./04 exile.mp3";
function chillHop() {
  return [
    {
      name: "There and Back",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
      artist: "Shopan",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10311",
      color: ["#ccb3c9", "#1f487c"],
      id: uuidv4(),
      active: true,
    },
    // {
    //   name: "Exile",
    //   cover: covertaylor,
    //   artist: "Taylor Swift",
    //   audio: audiotaylor,
    //   color: ["#ccb3c9", "#1f487c"],
    //   id: uuidv4(),
    //   active: false,
    // },
    {
      name: "Who Knows",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/371dadcad6dee874bd96515ae5d19b6daef2f408-1024x1024.jpg",
      artist: "Psalm Trees, Guillaume Muschalle",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10553",
      color: ["#986f48", "#2e4237"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Flashback",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
      artist: "Blue Wednesday, Shopan",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8741",
      color: ["#5b6396", "#c69bc9"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Lax Incense",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg",
      artist: "Mama Aiuto, Daphné",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12125",
      color: ["#38510f", "#51191a"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "ny90",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-1024x1024.jpg",
      artist: "Ezzy",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9331",
      color: ["#2e387d", "#b57474"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Hereafter",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
      artist: "Makzo",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9331",
      color: ["#5264a2", "#3b252a"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Sugarless",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
      artist: "The Field Tapes, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11243",
      color: ["#c1a663", "#c3d8db"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
