const cacheName = 'firstCache';     //캐시명 선언
const fileNames = [                 //캐싱할 파일명
    './',
    './index.html',
    './manifest.json',
    './images/hello-pwa.png',
];

const fontStyle = 'font-size:12px;font-weight:900;background:gold;color:darkgreen;';

// 서비스워커 설치 및 캐싱
self.addEventListener('install', event => {
    console.log('%c [install] ', fontStyle, ' serviceWorker ');

    event.waitUntil(
        caches.open(cacheName)
        .then( cache => {
            return cache.addAll(fileNames);
        })    
    )
});

// 서비스 워커 시작
self.addEventListener('activate', event => {
    console.log('%c [activate] ', fontStyle, 'serviceWorker')
});

// 데이터 요청시 캐시반환 혹은 네트워크 요청
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(res => {
            if(!res) {
                // 캐시에 없는 경우 네트워크 요청
                return fetch(event.request);
            } else {
                // 캐시에 존재하는 경우 데이터 반환
                return res;
            }
        })
        .catch(err => console.log(err))
    );
});