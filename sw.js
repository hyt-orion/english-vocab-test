// Service Worker - 缓存离线使用
const CACHE_NAME = 'english-vocab-v54';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './words.js',
  './words_renai.js',
  './exams.js',
  './manifest.json',
  './assets/qilin/qilin-1.png',
  './assets/qilin/qilin-2.png',
  './assets/qilin/qilin-3.png',
  './assets/qilin/qilin-4.png',
  './assets/qilin/qilin-5.png',
  './assets/qilin/qilin-6.png',
  './assets/qilin/qilin-7.png',
  './grammar/grammar.html',
  './grammar/index.html',
  './grammar/grammar-common.js',
  './grammar/grammar-common.css',
  './grammar/grammar-data.js',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // 只缓存同源GET请求
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) {
    // 外部请求（如Free Dictionary API）不缓存
    return;
  }
  // 视频文件不进缓存（体积大、走本地/网络直取，避免撑爆缓存配额）
  if (url.pathname.includes('/videos/')) {
    return;
  }
  // 关键资源（页面与脚本）采用 network-first 并绕过 HTTP 缓存：
  // 即便旧 Service Worker 仍在控制页面，也能拿到最新代码，避免旧缓存死锁。
  const isCritical = /\.(html|js)$/.test(url.pathname) || url.pathname.endsWith('/') || url.pathname === '';
  if (isCritical) {
    e.respondWith(
      fetch(e.request, { cache: 'no-cache' })
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone)).catch(() => {});
          return response;
        })
        .catch(() => caches.match(e.request).then((c) => c || caches.match('./')))
    );
    return;
  }
  // 其余资源（css/图片/字体等）cache-first，离线友好
  e.respondWith(
    caches.match(e.request).then((cached) => {
      return cached || fetch(e.request).then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone)).catch(() => {});
        return response;
      }).catch(() => cached);
    })
  );
});
