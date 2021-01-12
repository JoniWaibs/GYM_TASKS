//check if serviceworker is supported in navigator
if( 'serviceWorker' in navigator ){
    //register at sw
    navigator.serviceWorker.register('/sw.js')
        .then( registered => console.log('SW registered' , registered) )
        .catch( err => console.log('Instalation failed' , err) )
} else {
    console.log('ServiceWorkers not supported')
}