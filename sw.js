const cacheName = 'Gym-App v0.1'
const cacheFiles = [
    '/',
    '/index.html',
    '/app.js',
    '/registerSW.js',
    'https://cdn.jsdelivr.net/npm/vue/dist/vue.js',
    'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css',
    'manifest.json',
    '/media/check-fill.svg',
    '/media/delete-bin-6-fill.svg',
    'media/android-launchericon-72-72.png',
    'media/android-launchericon-96-96.png',
    'media/android-launchericon-144-144.png',
    'media/android-launchericon-192-192.png',
    'media/android-launchericon-512-512.png'
]


self.addEventListener('install' , e => {
    console.log('SW Installed ' , e)

    //caching files
    e.waitUntil(
        caches.open( cacheName )
        .then(  cache => {
            console.log('Caching Files')
            cache.addAll( cacheFiles )
        })
    )
})
self.addEventListener('activate' , e => {
    console.log('SW Activated' , e)
})
self.addEventListener('fetch' , e => {
    console.log('Fetching..', e)

    //show cache files
    e.respondWith(
        caches.match(e.request)
        .then( res => {
            return res;
        }),
    )
})