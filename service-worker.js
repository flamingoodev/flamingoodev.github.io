/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b6982d4fe2c3fd6765107bed0063a63f"
  },
  {
    "url": "about/index.html",
    "revision": "7cb27030a4f5ecc93798eefe4ca81fcd"
  },
  {
    "url": "assets/css/0.styles.06853840.css",
    "revision": "fe094b1a6b644e40b9fca31f439b1a63"
  },
  {
    "url": "assets/img/calendar-event.6736f3ad.jpg",
    "revision": "6736f3adc4aa48af208bce2f48b198a5"
  },
  {
    "url": "assets/img/calendar.74081111.jpg",
    "revision": "74081111184cde2bc21ca333f7c494e7"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "4fc38cbde572d3da77735264652547c4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.36c66e78.js",
    "revision": "1ac76355117997673c2cc01d8f60b4fc"
  },
  {
    "url": "assets/js/11.be77e5e2.js",
    "revision": "f2e28db2b4a891413c47763169692e10"
  },
  {
    "url": "assets/js/12.d820740b.js",
    "revision": "e081b28ea357a04dc3b687980cffb811"
  },
  {
    "url": "assets/js/13.be87665f.js",
    "revision": "9df86b298ef0084a53238fee95bdb370"
  },
  {
    "url": "assets/js/14.daf58319.js",
    "revision": "6d277178eac24217ead7d62827dde366"
  },
  {
    "url": "assets/js/15.d9ba8cbc.js",
    "revision": "41d8990e2a403453cd712ada585c3623"
  },
  {
    "url": "assets/js/16.145d5990.js",
    "revision": "b0f4c0842930b0c331f696c8a732f386"
  },
  {
    "url": "assets/js/17.54f691c2.js",
    "revision": "56681f3fa151daa2ba120b3f74b9ce93"
  },
  {
    "url": "assets/js/18.48f37bc7.js",
    "revision": "2e19c899ae6911e03fd273ece60d2396"
  },
  {
    "url": "assets/js/19.bfa120a1.js",
    "revision": "8680573384cf7b8d412c5cd5453e3dcc"
  },
  {
    "url": "assets/js/2.9b5bde32.js",
    "revision": "005e78e9d491cc2356cb888138631ffe"
  },
  {
    "url": "assets/js/20.ae53eb8c.js",
    "revision": "d9f090ff130e8fa86269fb0f57f0ea9b"
  },
  {
    "url": "assets/js/21.5ee88bbc.js",
    "revision": "97fc3f47688f75e5e1258dc1ab89806a"
  },
  {
    "url": "assets/js/22.72ccac25.js",
    "revision": "3a461ca2a6af4e3639efca5e4e6456cf"
  },
  {
    "url": "assets/js/23.15e28f68.js",
    "revision": "bc1dc68add5afa652a1401431f6df163"
  },
  {
    "url": "assets/js/3.9be4e1d5.js",
    "revision": "79d76d290f2161b8f4eed768f9de36ed"
  },
  {
    "url": "assets/js/4.e0616443.js",
    "revision": "dd0801257dfc17e9a73f586b9a34265a"
  },
  {
    "url": "assets/js/5.0ab0ea1a.js",
    "revision": "69d54c0435fe770565a21376b3cb3e52"
  },
  {
    "url": "assets/js/6.13571802.js",
    "revision": "20c618452434440eff6a17cf3a17166c"
  },
  {
    "url": "assets/js/7.960e79ad.js",
    "revision": "2bc62b11778ae5b9b4a7e5484f463d45"
  },
  {
    "url": "assets/js/8.21325f2e.js",
    "revision": "0041e3875453609f24594823196794a8"
  },
  {
    "url": "assets/js/9.8946f518.js",
    "revision": "0ea8c97f003a3512409a838a3fe88a2a"
  },
  {
    "url": "assets/js/app.d8e7a271.js",
    "revision": "2467e596be83a0e4805ff9b3a50971a7"
  },
  {
    "url": "blog/index.html",
    "revision": "708d7a755ee8340dc75228411889efbb"
  },
  {
    "url": "blog/posts/2021-05-01-MQ.html",
    "revision": "d528e18cfc52a7f2f4947ee88a0d3a8d"
  },
  {
    "url": "blog/posts/2021-05-02-why-pulsar-not-kafka.html",
    "revision": "ba0ea67a4f7a4796a67e224ccb32ae36"
  },
  {
    "url": "blog/posts/2021-05-11-docker-mysql.html",
    "revision": "e0864fdac76ef8848967e2686aaf0f3f"
  },
  {
    "url": "blog/posts/2021-05-18-postgresql-debug.html",
    "revision": "02fca170a742cefbd1b20d3cf359129c"
  },
  {
    "url": "blog/posts/2021-06-21-login.html",
    "revision": "c4b0e1bcef800b32831cc049ba47ec1d"
  },
  {
    "url": "blog/posts/2021-07-04-calendar.html",
    "revision": "92798fe7e8d484317b8742b87ce0bb4e"
  },
  {
    "url": "guide/index.html",
    "revision": "d625e5dab4f2a97959ae3ac361af3b55"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/flamingo-995x995.png",
    "revision": "4fc38cbde572d3da77735264652547c4"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "df3197ff2ec7416371f12cf21a67d2e3"
  },
  {
    "url": "leetcode/index.html",
    "revision": "3e5fdb28b6267b12c9ae1dccea5ae424"
  },
  {
    "url": "leetcode/problemset/n0-template.html",
    "revision": "044f31729a5b10c2d893ab3759f7f2ed"
  },
  {
    "url": "leetcode/problemset/n1-two-sum.html",
    "revision": "a030a8733fd278bb51bc23a84b0c3162"
  },
  {
    "url": "leetcode/problemset/n13-roman-to-integer.html",
    "revision": "6ffddb2adf446cadc82cdc552cf01092"
  },
  {
    "url": "leetcode/problemset/n6-zigzag-conversion.html",
    "revision": "8db32ca8a2aa1648558d33d496d1b73a"
  },
  {
    "url": "leetcode/problemset/n7-reverse-integer.html",
    "revision": "15a69a0b5322ecdfe1c677194b6899fa"
  },
  {
    "url": "leetcode/problemset/n9-palindrome-number.html",
    "revision": "aa8f656206274fe4fd166032aeda5fef"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
