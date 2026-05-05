const CACHE_NAME = 'Calc-hub-v3';
const assets = [
  'index.html',
  'shift_calc.html',
  'roller_calc.html',
  'job_card_calc.html',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];


// ૧. ઇન્સ્ટોલ સ્ટેજ: નવી ફાઇલો કેશ કરવી
self.addEventListener('install', e => {
  self.skipWaiting(); // નવા સર્વિસ વર્કરને તરત જ એક્ટિવેટ કરવા માટે
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('નવી કેશ સેવ થઈ રહી છે...');
      return cache.addAll(assets);
    })
  );
});

// ૨. એક્ટિવેટ સ્ટેજ: જૂની કેશ ડિલીટ કરવી (આ ફંક્શન જરૂરી છે)
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('જૂની કેશ ડિલીટ થઈ રહી છે:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim()) // તરત જ કંટ્રોલ લેવા માટે
  );
});

// ૩. ફેચ સ્ટેજ: ફાઇલો લોડ કરવી
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
