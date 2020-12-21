if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"84fcdf42d6cfbf1bdb080531f4044bdd","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"84fcdf42d6cfbf1bdb080531f4044bdd","url":"index.html"},{"revision":"f256150dc4c184a44274a6ed1b14042e","url":"precache-manifest.f256150dc4c184a44274a6ed1b14042e.js"},{"revision":"745d3c8224dafd98c6bc937d98a43cec","url":"static/css/15.3949935b.chunk.css"},{"revision":"7d4e1e17bdf366f877b4d150879e4be7","url":"static/js/0.4e9d56d0.chunk.js"},{"revision":"b337424a08a1f1728b015a7189688be9","url":"static/js/1.5b7a4733.chunk.js"},{"revision":"f55fb6a5fec79469a85cd36b63aabd75","url":"static/js/10.ed0eaa06.chunk.js"},{"revision":"0a58d68bbe22cb25e2aaee3491d98113","url":"static/js/11.27d72884.chunk.js"},{"revision":"5a4062935a66ce705fbf59e42682f29d","url":"static/js/12.7ee258a8.chunk.js"},{"revision":"096fee898e0b50ec5b4485ef2cdd4737","url":"static/js/13.96ce3f32.chunk.js"},{"revision":"b5d3ded50a01b4e8a48d5aeeea90a6f4","url":"static/js/14.96ab3da3.chunk.js"},{"revision":"9cdde6369978332f51a0ec215b279dd6","url":"static/js/15.e5fe2f83.chunk.js"},{"revision":"144526261ea4b13be3436eb499484195","url":"static/js/16.07125b58.chunk.js"},{"revision":"b3776b54f6f6603f88914d42c00caeeb","url":"static/js/17.1becda0e.chunk.js"},{"revision":"932c647a914433bbe3af1b0e05631a47","url":"static/js/18.fb2d9e27.chunk.js"},{"revision":"cc6cc1af065cde69c59baab689f4ae52","url":"static/js/19.e036a738.chunk.js"},{"revision":"22a0ea3abb6535a17d1d2ae3bbadffe7","url":"static/js/2.852d72c6.chunk.js"},{"revision":"476fbd1a76e7f7cb970292c708458489","url":"static/js/20.00e91bf0.chunk.js"},{"revision":"b06a8f482e27e6700cb982d9505d06a2","url":"static/js/21.0941bf20.chunk.js"},{"revision":"e60c36cc1f844c45192e42d96f18b27f","url":"static/js/22.b9a592e5.chunk.js"},{"revision":"7f4afafd0a7ddcf69f75c1581f7de5eb","url":"static/js/23.94d8d682.chunk.js"},{"revision":"b0af5257e9d9ecba94c5c964aa6e1a02","url":"static/js/24.51107359.chunk.js"},{"revision":"48f6c0a7b66d5583292d123916c6bcab","url":"static/js/25.bb64025f.chunk.js"},{"revision":"ecdd582d1e71e9200ee18808fa03dc02","url":"static/js/26.e6d43df6.chunk.js"},{"revision":"786bafbaa1e2216c4f9c9830f9a8a7be","url":"static/js/27.8e2b3ee9.chunk.js"},{"revision":"828063b02f48130e964e2cce652333a5","url":"static/js/28.60ca90dd.chunk.js"},{"revision":"11a3a8e2702fc75b5ce45dcf0774ab36","url":"static/js/29.bf273d4f.chunk.js"},{"revision":"a0ac6d90f855433940989d7fbf6d851f","url":"static/js/3.6fe98d4a.chunk.js"},{"revision":"d88f2406190faf34b35ad69115ea40ae","url":"static/js/30.556b68de.chunk.js"},{"revision":"0fed23e6802ff990b30f049c0d21acd4","url":"static/js/31.e89f5f0f.chunk.js"},{"revision":"c8c006e2105c0adc8bbc7b40be5f7e61","url":"static/js/32.635cfbe3.chunk.js"},{"revision":"3c39a2d5193cb083ec00e3327c2da447","url":"static/js/33.c2950085.chunk.js"},{"revision":"57d14907e12c0fa02a5eacf4ece9493b","url":"static/js/34.0ddcbc4d.chunk.js"},{"revision":"f9fef21e14df6c82776ca267a359cc71","url":"static/js/35.d263f4b8.chunk.js"},{"revision":"a9c68c47b061509cb62461af4a08746a","url":"static/js/36.55fd9182.chunk.js"},{"revision":"b14616e5e282d44f2ba3581eb4633128","url":"static/js/37.e517f828.chunk.js"},{"revision":"592a31437fdf443c89a96cbdb118e3a2","url":"static/js/4.f1059655.chunk.js"},{"revision":"a2dd7702cc8797a5895a81e8cc53f551","url":"static/js/5.518f6213.chunk.js"},{"revision":"a637c41e7e26614f840dd025689973a8","url":"static/js/6.b8af48c2.chunk.js"},{"revision":"c796e438aecd18dfa97aa91e830e06c5","url":"static/js/9.82bb6d47.chunk.js"},{"revision":"7c297f4d2db90c864afa9a8f2c9155e4","url":"static/js/main.20760830.chunk.js"},{"revision":"707edc5a9b088379dc59444407247fdf","url":"static/js/runtime-main.7ae1ad14.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
