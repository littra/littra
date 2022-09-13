let CACHE_NAME = "Littra_Cache ";

var fileToLoad = [
  "/",
  "index.html",
  "/manifest.json",
  "/main.css",
  "/npm.html-entities.chunk.js",
  "/bundle.js",
  "/favicon.ico",

  "/assets/images/menu.png",
  "/assets/images/welcome.png",
  "/assets/images/support.png",
  "/assets/images/idea.png",
  "/assets/images/creativety.png",
  "/assets/images/ourWorks.png",
  "/assets/images/chooseUs.png",
  "/assets/images/footer.png",
  "/assets/images/welcomeOne.jpg",
  "/assets/images/feature3.svg",
  "/assets/images/feature2.svg",
  "/assets/images/monitor.png",
  "/assets/images/feature4.svg",
  "/assets/images/feature5.svg",
  "/assets/images/feature6.svg",
  "/assets/images/feature7.svg",
  "/assets/images/feature8.svg",
  "/assets/images/LayoutDesign.jpg",
  "/assets/images/f1.svg",
  "/assets/images/documentation.jpg",
  "/assets/images/f2.svg",
  "/assets/images/parallex.png",
  "/assets/images/f3.svg",
  "/assets/images/html5.jpg",
  "/assets/images/f4.svg",
  "/assets/images/support.jpg",
  "/assets/images/f5.svg",
  "/assets/images/LightDark.jpg",
  "/assets/images/f6.svg",
  "/assets/images/refresh.png",
  "/assets/images/video-conference.svg",
  "/assets/images/meeting.png",
  "/assets/images/disherve.png",
  "/assets/images/dish.png",
  "https://cdn.jsdelivr.net/npm/tsparticles@1.33.1/tsparticles.min.js",
  "/assets/images/image1.png",
  "https://i.ibb.co/VJmZKFj/high-quality.png",
  "https://i.ibb.co/qgKNr59/backup.png",
  "https://i.ibb.co/Kbd0xbp/smart.png",
  "https://i.ibb.co/G53sbGK/customer.png",
  "/icon_192.png",
  "/assets/images/welcomeTwo.jpg",
  "/assets/images/welcomeThree.jpg",
  "/assets/images/welcomeFour.jpg",
  "/assets/images/welcomeFive.jpg",
  "/assets/images/welcomeSix.jpg",
  "/assets/images/welcomeSeven.jpg",
  "/assets/images/welcomeEight.jpg",

  "/npm.react-redux.chunk.js",
  "/npm.react-router-dom.chunk.js",
  "/npm.react-router.chunk.js",
  "/npm.webpack-dev-server.chunk.js",
  "/npm.intl-messageformat.chunk.js",
  "/npm.intl-relativeformat.chunk.js",
  " /npm.scheduler.chunk.js",
  "/npm.prop-types.chunk.js",
  "/npm.styled-components.chunk.js",
  "/npm.researchgate.chunk.js",
  "/i18n-en.chunk.js",
  "/npm.history.chunk.js",
  "/npm.lodash.chunk.js",
  "/npm.node-libs-browser.chunk.js",
  "/npm.path-to-regexp.chunk.js",
  "/npm.react-intersection-observer.chunk.js",
  "/npm.redux.chunk.js",
  "/npm.regenerator-runtime.chunk.js",
  "/npm.sockjs-client.chunk.js",
  "/npm.framer-motion.chunk.js",
  "/npm.react-is.chunk.js",
  "/npm.react.chunk.js",
  "/npm.popmotion.chunk.js",
  "/npm.eventsource-polyfill.chunk.js",
  "/npm.intl-messageformat-parser.chunk.js",
  "/npm.style-loader.chunk.js",
  "/npm.url.chunk.js",
  "/npm.events.chunk.js",
  "/npm.whatwg-fetch.chunk.js",
  "/npm.react-dom.chunk.js",
  "/npm.react-intl.chunk.js",
  "https://i.ibb.co/jVL0zvC/section-img.jpg",
  "https://fonts.gstatic.com/s/raleway/v28/1Ptug8zYS_SKggPNyC0ITw.woff2",
  "https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;700&display=swap",

  "/assets/images/planetDefense.png",
  "/offline",
  "/assets/images/blaster.png",
  "/assets/images/sprite.png",
  "/assets/images/explosion.png",
  "/assets/images/space.jpg",
  "/assets/images/CanvasDraw.png",

  "https://marclopezavila.github.io/planet-defense-game/img/space.jpg",
  "https://marclopezavila.github.io/planet-defense-game/img/aim_red.png",
];

//  install service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(fileToLoad);
      })
      .catch((err) => console.log("catch er", err))
  );
});

// fetch cache data

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    console.log("Offline...");
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }
      })
    );
  }
});

this.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function(cacheNames) {
            //
          })
          .map(function(cacheNames) {
            return caches.delete(cacheNames);
          })
      );
    })
  );
});
