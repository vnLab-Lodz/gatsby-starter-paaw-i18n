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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "icons/icon-144x144.png",
    "revision": "7f47e8b815b45988b5b3a7ac2070b811"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "e901a03f12ca37a76bc1c52c136fd757"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "6d22e9de4d4ab3044398263d903716a4"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "869198f3ce80e385992e6cd25de9aa1c"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "e5750d2189a8fa0fa9e1f47cbb09ea3e"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "0de43592593b1e8c980d515ca3174167"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "5ee3a522ad6797f94ce764564b73a31d"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "e3236a87558f05fec14879a61b5e2266"
  },
  {
    "url": "framework-9e4eb1400cd56c77d826.js"
  },
  {
    "url": "app-1901e84d5108ce49ceed.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "31d13954b0764078e088609127a3c2f7"
  },
  {
    "url": "webpack-runtime-39f165bb0171c8ef2eba.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-ddb9bd58919854aabc39.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "07cf21f11f1896fdc1b62e07323ef16b"
  },
  {
    "url": "page-data/sq/d/1239077767.json",
    "revision": "0fe00726fde23421a19ebd7229788d18"
  },
  {
    "url": "page-data/sq/d/3280999885.json",
    "revision": "482e9824f0786b265396884338683241"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "1454b5a9a8523d8dfd88c456c19e940f"
  },
  {
    "url": "polyfill-afaa03fe57d3b93c1119.js"
  },
  {
    "url": "styles.607f204ee7558054229f.css"
  },
  {
    "url": "component---src-pages-404-tsx-c7a6a6e5c795a35c78aa.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "dcf745110b3fa280aeef5fa9333c9a79"
  },
  {
    "url": "page-data/sq/d/3649515864.json",
    "revision": "656687fd581f6e8109ca67c1291bcaf1"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "af28ec02bcd06d8972564d21c3a75d54"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "460fa1ee51c065f1f1d8a35fd8ad9569"
  },
  {
    "url": "component---src-templates-section-tsx-2ab368e602598b4d0b49.js"
  },
  {
    "url": "page-data/chapter_1/page-data.json",
    "revision": "f46fb62056351f0c8e39963252707ef6"
  },
  {
    "url": "page-data/chapter_2/page-data.json",
    "revision": "a37262388f32d323cf5e9e463ff4069d"
  },
  {
    "url": "component---src-pages-index-tsx-e28e85222265704156cc.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "06dfc0d69baef3bd10d98532d544f482"
  },
  {
    "url": "component---src-pages-page-two-tsx-52dc23f4f87351ba150c.js"
  },
  {
    "url": "page-data/page-two/page-data.json",
    "revision": "d237d7eacbc4598764acc1697c6b5297"
  },
  {
    "url": "page-data/pl/page-data.json",
    "revision": "56dc09d9cd6fb8a0bfdf9bf8747966fe"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "bf64a2794c19dd4a19f5baf827c2ad47"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/gatsby-starter-paaw-i18n`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/gatsby-starter-paaw-i18n/app-1901e84d5108ce49ceed.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/gatsby-starter-paaw-i18n/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
