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
    "revision": "a6a5848f2ce9911c4e8e4d8866cc8933"
  },
  {
    "url": "about/index.html",
    "revision": "7ae4f8111b48bee9fde4e46f8bbed7b3"
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
    "url": "assets/js/10.7b2a41a0.js",
    "revision": "add05700c70725d906b3ebe28fb8d30d"
  },
  {
    "url": "assets/js/11.e8c6b06f.js",
    "revision": "e6ff7278ac8c2c03ef41281a7af40eff"
  },
  {
    "url": "assets/js/12.5d6b7855.js",
    "revision": "77b699cd02fdcf9cbe14d7f7caad804f"
  },
  {
    "url": "assets/js/13.0df7b40b.js",
    "revision": "d2c5070c9b12b2249587f265a73d502c"
  },
  {
    "url": "assets/js/14.5abd49d1.js",
    "revision": "755a5d97839079f738288c48510d82b4"
  },
  {
    "url": "assets/js/15.903afe06.js",
    "revision": "613b04e989ba200f4074f612710df4b3"
  },
  {
    "url": "assets/js/16.71bcd2bb.js",
    "revision": "cea7dda528834578a486ce2f310d48b0"
  },
  {
    "url": "assets/js/17.1b6c59a6.js",
    "revision": "c010d1cddffae1bfc43cc8785e1c2f32"
  },
  {
    "url": "assets/js/18.5e7bffd3.js",
    "revision": "3d355ef0cdff440be4dd27142ca37d76"
  },
  {
    "url": "assets/js/19.ae3d81e6.js",
    "revision": "d4432aec06f1f14d01c29ec58f6a5a08"
  },
  {
    "url": "assets/js/2.53a06445.js",
    "revision": "453650821f9b0d48d28135ac1ca362b4"
  },
  {
    "url": "assets/js/20.c13883e7.js",
    "revision": "224c073892577af0049dd7af65682f45"
  },
  {
    "url": "assets/js/21.30401151.js",
    "revision": "289554bd2eb3e6dcace034a60d56554a"
  },
  {
    "url": "assets/js/22.77638dac.js",
    "revision": "ade8c87b5d138cea292f2d629de80129"
  },
  {
    "url": "assets/js/23.e1554a7f.js",
    "revision": "8acf6b4d35fa7824cb758e98d1f27726"
  },
  {
    "url": "assets/js/24.b1f48863.js",
    "revision": "c0a2bf36b8cfb9405024801f08e0d821"
  },
  {
    "url": "assets/js/25.f940fd18.js",
    "revision": "bbfb99e4daa978a824688db8596fb6da"
  },
  {
    "url": "assets/js/26.6b5234e4.js",
    "revision": "3d0d42312687e275ce39d7e4d12879e5"
  },
  {
    "url": "assets/js/27.dbc72dee.js",
    "revision": "1ba902584b3dbe5a60a95af1e93511d2"
  },
  {
    "url": "assets/js/28.48978654.js",
    "revision": "257947586f871ff52529b798da5b5f7b"
  },
  {
    "url": "assets/js/29.f2d168ee.js",
    "revision": "7ba83e304c10d7a6be5bd1d1948db912"
  },
  {
    "url": "assets/js/3.9be4e1d5.js",
    "revision": "79d76d290f2161b8f4eed768f9de36ed"
  },
  {
    "url": "assets/js/30.5a084f19.js",
    "revision": "b8cc283f417917caf6292e09a6a52b16"
  },
  {
    "url": "assets/js/4.b5dc6004.js",
    "revision": "f0278e8dadeadac7aa7a88aeefd811ad"
  },
  {
    "url": "assets/js/5.ecc16a84.js",
    "revision": "48b889f3d3c29e02bce8ac85382c93d6"
  },
  {
    "url": "assets/js/6.677491ba.js",
    "revision": "d1eee159825392c8d7714b2f4fba1243"
  },
  {
    "url": "assets/js/7.4876986a.js",
    "revision": "e3137fa44b39d93cf0f0fae90cee53a1"
  },
  {
    "url": "assets/js/8.b8197eca.js",
    "revision": "87af58fa99014efa2317454a8b9580d5"
  },
  {
    "url": "assets/js/9.5176d815.js",
    "revision": "837c1813977c761691e414338c371a76"
  },
  {
    "url": "assets/js/app.eaa4485d.js",
    "revision": "e5a3c7c88254f21b469ab26148c0bffa"
  },
  {
    "url": "blog/index.html",
    "revision": "eb99f5b6e66ebb761745383caeee8630"
  },
  {
    "url": "blog/posts/2021-05-01-MQ.html",
    "revision": "5a33bcd5229d6386fca26fea16d2915f"
  },
  {
    "url": "blog/posts/2021-05-02-why-pulsar-not-kafka.html",
    "revision": "b2779f5a637c289e2bb959d5ad62f192"
  },
  {
    "url": "blog/posts/2021-05-11-docker-mysql.html",
    "revision": "302b6f516e7b2d2005433dfb9b391f2d"
  },
  {
    "url": "blog/posts/2021-05-18-postgresql-debug.html",
    "revision": "c04afb960f3b8eb296f520e5b18c5cb0"
  },
  {
    "url": "blog/posts/2021-06-21-login.html",
    "revision": "004d0ffbc0263b6ec584e8d8bd97812c"
  },
  {
    "url": "blog/posts/2021-07-04-calendar.html",
    "revision": "61c2573d7386d55442fd8e946f910ab7"
  },
  {
    "url": "blog/posts/2021-07-21-linux-env.html",
    "revision": "96507a7c66222e1f789d664d5d09d0f1"
  },
  {
    "url": "blog/posts/2021-08-18-event-driven-architecture.html",
    "revision": "a001cf70a608829518c81dfd665c7de2"
  },
  {
    "url": "blog/posts/2021-09-25-wasm.html",
    "revision": "09ddb9018bfa34a2ea94b544bf996a4a"
  },
  {
    "url": "blog/posts/2021-11-12-linux-service.html",
    "revision": "8ebeb60a8dca1609ec50802eb253a08f"
  },
  {
    "url": "blog/posts/2021-12-20-remote-deploy.html",
    "revision": "3ed41b787612102bf566c77ec19f69ae"
  },
  {
    "url": "blog/posts/2022-05-23-linux-mount.html",
    "revision": "3312d37f6a3dc615ccfc776b9bb0ed5c"
  },
  {
    "url": "guide/index.html",
    "revision": "997b92374b53cb74e9f9899db6a35969"
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
    "revision": "60b015a98c56e423f755bd2b0dad0ae8"
  },
  {
    "url": "leetcode/index.html",
    "revision": "d1b4ca909cddf2b9bbe3f35a0c26e603"
  },
  {
    "url": "leetcode/problemset/n0-template.html",
    "revision": "2ebe6f53d2d41787af8af3bc49570c27"
  },
  {
    "url": "leetcode/problemset/n1-two-sum.html",
    "revision": "b9903d511259206b00657ed13fb8b54e"
  },
  {
    "url": "leetcode/problemset/n13-roman-to-integer.html",
    "revision": "cd9bdbaa2d70814420f81283d922209a"
  },
  {
    "url": "leetcode/problemset/n6-zigzag-conversion.html",
    "revision": "74ccd90b0049e8e9b79f1dad94da52a8"
  },
  {
    "url": "leetcode/problemset/n7-reverse-integer.html",
    "revision": "829e5c3089e71fafa0eaa9c11c0dff29"
  },
  {
    "url": "leetcode/problemset/n9-palindrome-number.html",
    "revision": "0dca4742fa6a1e8265eb941ed155afe1"
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
