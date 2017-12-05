"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","ff194be16091ab608c3486d05803fe74"],["/static/css/main.669b98e2.css","b59f13cc4989623679c584930d003999"],["/static/js/main.3eefccd0.js","fce2e5deb80c8ea8743ba572be559efd"],["/static/media/Bungee-Regular.c706b489.ttf","c706b489c5e288414b67fe82d2fe9aa3"],["/static/media/Lato-Regular.7f690e50.ttf","7f690e503a254e0b8349aec0177e07aa"],["/static/media/aws.0292ec4e.svg","0292ec4ebac41c7e4107e34474814eaa"],["/static/media/babel.e031d9e2.svg","e031d9e23a84447d57f999e1fd0d19e1"],["/static/media/bootstrap.c4ce29f3.svg","c4ce29f3d8d818e21c893bde4d815089"],["/static/media/css3.a70a7e3e.svg","a70a7e3e545f3ddc5707d4c4da8cfa17"],["/static/media/heroku.3af582e5.svg","3af582e56c213a6439e38c3f360bd633"],["/static/media/html.7997c424.svg","7997c4244e7a8cf2b160803e1c741502"],["/static/media/jasmine.87220f71.svg","87220f713630c403715767b24fd37dde"],["/static/media/jquery.cebb17c0.svg","cebb17c0855c821f6f042fc2956b54e8"],["/static/media/js.0154328f.svg","0154328fc3e7bfcdb3d9ca42a6f848b1"],["/static/media/rails.3247e1d0.svg","3247e1d0b99eb78410e47bfa5009c087"],["/static/media/react.e9f3d01c.svg","e9f3d01c242e086f895bde131803b451"],["/static/media/rspec.c29c1023.png","c29c1023d5fbc1650078b3b86f9e77ef"],["/static/media/ruby.54acf8ca.svg","54acf8ca0ec984efbba47605ab040104"],["/static/media/sass.88c10477.svg","88c1047792044b547d1d3e066d3e18c4"],["/static/media/sinatra.e22cf4ed.png","e22cf4ed5c732116c98dafeb720a69db"],["/static/media/webpack.9a7a86a8.svg","9a7a86a89b95d03d85686fad1578790e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});